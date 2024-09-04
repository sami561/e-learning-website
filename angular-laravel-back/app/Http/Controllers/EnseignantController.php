<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enseignant;
use Validator;
use Illuminate\Support\Facades\Hash;

class EnseignantController extends Controller
{
     //getEnseignant
     public function getEnseignant(){
        return response()->json(Enseignant::all(),200);
       }
        //getEnseignantById 
        public function getEnseignantById($id){
            $enseignant=Enseignant::find($id);
            if(is_null($enseignant)){
                response()->json(['message'=>'enseignant introuvable'],404);
            }
            return response()->json(Etudiant::find($id),200);
           }
             //add Enseignant
        public function addEnseignant(Request $request){
            $enseignant=Enseignant::create($request->all());
           
            return response()->json($enseignant,201);
           }
           //updateEnseignant
           public function updateEnseignant(Request $request,$id){
            $enseignant=Enseignant::find($id);
            if(is_null($enseignant)){
                response()->json(['message'=>'etudiant introuvable'],404);
            }
            $enseignant->update($request->all());
            return response()->json($enseignant,200);
           }
               //deleteEnseignant
               public function deleteEnseignant(Request $request,$id){
                $enseignant=Enseignant::find($id);
                if(is_null($enseignant)){
                    response()->json(['message'=>'enseignant introuvable'],404);
                }
                $enseignant->cours()->delete(); 
                $enseignant->delete();
                return response()->json(['message'=>'le enseignant  est  supprimer'],204);
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
                    $enseignant = Enseignant::where('email',$req->email)->first();
                    if(! $enseignant ||  ! Hash::check($req->password, $enseignant->password)){
                        return response()->json(['message' => 'Incorrect email or password'],400);
                    }
                    return $enseignant->createToken($req->email)->plainTextToken;
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
                'ratings' => 'required',
                'teleN' => 'required',
                'birthday'=>'required',
            
            ];
            $validator = Validator::make($request->all(),$rules);
            if($validator->fails()){
                return $validator->errors();
            }else{
                $result = Enseignant::create([
                    'firstname'=>$request->firstname,
                    'lastname'=>$request->lastname,
                    'email'=>$request->email,
                    'password'=> Hash::make($request->password),
                    'cours_id'=>$request->cours_id,
                    'cours_nom'=>$request->cours_nom,
                    'ratings'=>$request->ratings,
                    'teleN'=>$request->teleN,
                    'birthday'=>$request->birthday
                ]);
                
                if($result){
                    return response()->json(['message' => 'Enseignants created'],201);
                }
                else{
                    return response()->json(['message' => 'Something went wrong'],500);
                }
            }
        }
}
