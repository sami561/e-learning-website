<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Etudiant;
use Validator;
use Illuminate\Support\Facades\Hash;
class etudiantController extends Controller
{
      //getEtudiants
   public function getEtudiants(){
    return response()->json(Etudiant::all(),200);
   }
    //getEtudiantsById 
    public function getEtudiantById($id){
        $etudiant=Etudiant::find($id);
        if(is_null($etudiant)){
            response()->json(['message'=>'etudiant introuvable'],404);
        }
        return response()->json(Etudiant::find($id),200);
       }
         //add Etudiant
    public function addEtudiant(Request $request){
        $etudiant=Etudiant::create($request->all());
       
        return response()->json($etudiant,201);
       }
       //updateEtudiant
       public function updateEtudiant(Request $request,$id){
        $etudiant=Etudiant::find($id);
        if(is_null($etudiant)){
            response()->json(['message'=>'etudiant introuvable'],404);
        }
        $etudiant->update($request->all());
        return response()->json($etudiant,200);
       }
           //deleteEtudiant
           public function deleteEtudiant(Request $request,$id){
            $etudiant=Etudiant::find($id);
            if(is_null($etudiant)){
                response()->json(['message'=>'etudiant introuvable'],404);
            }
            $etudiant->cours()->delete(); 
            $etudiant->delete();
            return response()->json(['message'=>'le etudiant  est  supprimer'],204);
           }
           //login
           public function login(Request $req){
            $rules = [
                'email' => 'required',
                'password' => 'required'
            ];
            $validator = Validator::make($req->all(),$rules);
            if($validator->fails()) return $validator->errors();
            else{
                $etudiant = Etudiant::where('email',$req->email)->first();
                if(! $etudiant ||  ! Hash::check($req->password, $etudiant->password)){
                    return response()->json(['message' => 'Incorrect email or password'],400);
                }
                return $etudiant->createToken($req->email)->plainTextToken;
            }
            
        }
        //signup
        public function signup(Request $request)
    {
        $rules = [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|unique:etudiants',
            'password' => 'required',
            'class' => 'required',
            'teleN' => 'required',
           'birthday'=>'required',
        ];
        $validator = Validator::make($request->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $result = Etudiant::create([
                'firstname'=>$request->firstname,
                'lastname'=>$request->lastname,
                'email'=>$request->email,
                'password'=> Hash::make($request->password),
                'class'=>$request->class,
                'teleN'=>$request->teleN,
                'birthday'=>$request->birthday
            ]);
            
            if($result){
                return response()->json(['message' => 'etudiants created'],201);
            }
            else{
                return response()->json(['message' => 'Something went wrong'],500);
            }
        }
    }
}
