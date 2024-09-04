<?php

namespace App\Http\Controllers\API;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\Enseignant;
use App\Models\Etudiant;



use App\Http\Controllers\Controller;


class authcontroller extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' =>[
                'required',
                function($attribute, $value, $fail) use ($request) {
                    $email = $request->input('email');
                    $existE= Enseignant::select()->where('email', $email)->exists();
                    $existET = Etudiant::select()->where('email', $email)->exists();
                    if (!$existE && !$existET) {
                        $fail('Invalid mail.');
                    }
                }
            ],
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ]);
        }

        //check email
        $email = $request->input('email');
        $user = Enseignant::where('email', $email)->first();
        $role = 'admin';
        if (!$user) {
            $user = Etudiant::where('email', $email)->first();
            $role = 'user';
        }
        //check password
        if (!Hash::check($request->input('password'), $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid password.'
            ]);
        }

        // login successful, return response
        $accessToken = $user->createToken($user->email,[$role],Carbon::now()->addHours(24))->accessToken;
        return response()->json([
            'success' => true,
            'user' => ['id' => $user->id,'email' => $user->email,'role' => $role],
            'access_token' => $accessToken,
            'token'=>$accessToken->token
        ]);

    }

    //logout
    public function logout(Request $request)
    {
        $getToken= DB::table('personal_access_tokens')->where('token',$request->token)->first();
        if (!$getToken) {
            return response()->json([
                'success' => false,
                'message' => 'Error in Log Out'
            ]);
        }
        DB::table('personal_access_tokens')->where('id',$getToken->id)->delete();
        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully',
        ]);
    }
}
