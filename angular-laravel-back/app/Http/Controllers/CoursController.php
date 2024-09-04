<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cours;
use App\Models\Enseignant;
use App\Models\Etudiant;
use App\Models\Categorie;

class CoursController extends Controller
{
     //getCours
     public function getCours(){
        return response()->json(Cours::all(),200);
       }
        //getCoursById 
        public function getCoursById($id){
            $cours=Cours::find($id);
            if(is_null($cours)){
                response()->json(['message'=>'enseignant introuvable'],404);
            }
            return response()->json(Cours::find($id),200);
           }
            //getCoursdetailsById 
        public function getCoursdetailsById($id){
            $cours= Cours::findorfail($id);
        $enseignant_id= $cours->enseignant_id;
        $enseignant=Enseignant::where('id',$enseignant_id)->get();
        $etudiant_id= $cours->etudiant_id;
        $etudiant=Etudiant::where('id',$etudiant_id)->get();
        $categorie_id= $cours->categorie_id;
        $categorie=Categorie::where('id',$categorie_id)->get();
            return response()->json([
                'success' => true,
                'message' => 'Post created successfully!',
                'cours' => 
                ['id' => $cours->id,
                'name' => $cours->name,
                'etudiant' => $etudiant,
                'enseignant' => $enseignant,
                'categorie' => $categorie,
                "nombre_etudiant"=> $cours->nombre_etudiant,
                "date"=>$cours->date,],
            ],200);
           }
           //getEnseignantCoursById

        public function getEnseignantCoursById($id){
            $cours= Cours::findorfail($id);
        $enseignant_id= $cours->enseignant_id;
        $enseignant=Enseignant::where('id',$enseignant_id)->get();
        return $enseignant;
           }
           //getEtudiantCoursById
            
        public function getEtudiantCoursById($id){
            $cours= Cours::findorfail($id);
        $etudiant_id= $cours->etudiant_id;
        $etudiant=Etudiant::where('id',$etudiant_id)->get();
        return $etudiant;
           }
           //getCategorieCoursById
           public function getCategorieCoursById($id){
            $cours= Cours::findorfail($id);
        $categorie_id= $cours->categorie_id;
        $categorie=Categorie::where('id',$categorie_id)->get();
        return $categorie;
           }
             //add Cours
        public function addCours(Request $request){
            $cours=Cours::create($request->all());
           
            return response()->json($cours,201);
           }
           ///addd store
           public function store(Request $request)
            {
    

    // Create the cours with the validated data
    $cours =new Cours(
    );
    $cours->name=$request->name;
    $cours->etudiant_id=$request->etudiant_id;
    $cours->enseignant_id=$request->enseignant_id;
    $cours->categorie_id=$request->categorie_id;
    $cours->nombre_etudiant=$request->nombre_etudiant;
    $cours->date=$request->date;
    $cours->save();

    // Return a response with the newly created cours and a success message
    return response()->json([
        'success' => true,
        'message' => 'Post created successfully!',
        'data' => $cours
    ], 201);
}
           //updateCours
           public function updateCours(Request $request,$id){
            $cours=Cours::find($id);
            if(is_null($cours)){
                response()->json(['message'=>'Cours introuvable'],404);
            }
            $cours->update($request->all());
            return response()->json($cours,200);
           }
               //deletexCours
               public function deleteCours(Request $request,$id){
                $cours=Cours::find($id);
                if(is_null($cours)){
                    response()->json(['message'=>'cours introuvable'],404);
                }
                $cours->delete();
                return response()->json(['message'=>'le cours  est  supprimer'],204);
               }
               public function getparam(){
                $cours=Cours::select(
                    "name",
                    "enseignant_id",
                    "etudiants ",
                    "categorie_id",
                    "nombre_etudiant",
                    "date",)->leftjoin('etudiants','cours.etudiant_id','=','etudiants.id');
                    return response()->json([
                        'success' => true,
                        'message' => 'Post created successfully!',
                        'data' => $cours
                    ], 201);

               }
           
}
