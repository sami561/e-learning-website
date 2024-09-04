<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categorie;

class CategorieController extends Controller
{
      //getCategorie
   public function getCategorie(){

    return response()->json(Categorie::all(),200);
   }
    //getCategorieById 
    public function getCategorieById($id){
        $categorie=Categorie::find($id);
        if(is_null($categorie)){
            response()->json(['message'=>'categorie introuvable'],404);
        }
        return response()->json(Categorie::find($id),200);
       }
       
         //add Categorie
    public function addCategorie(Request $request){
        $this->validate($request, [
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);
        $image_path = $request->file('image')->store('image', 'public');
        $data =json_decode($request->input('data'), true);
        $etudiant=Categorie::create([
            'name' => $data['name'],
            'image' => $image_path,
        ]);
       
        return response()->json($etudiant,201);
       }
       //updateCategorie
       public function updateCategorie(Request $request,$id){
        $categorie=Categorie::find($id);
        if(is_null($categorie)){
            response()->json(['message'=>'categorie introuvable'],404);
        }
        $this->validate($request, [
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);
        $image_path = $request->file('image')->store('image', 'public');
        $categorie->update( ['name' => $request->input('name'),
        'image' => $image_path,]);
        return response()->json($categorie,200);
       }
           //deleteCategorie
           public function deleteCategorie(Request $request,$id){
            $categorie=Categorie::find($id);
            if(is_null($categorie)){
                response()->json(['message'=>'categorie introuvable'],404);
            }
            $categorie->cours()->delete(); 
            $categorie->delete();
            return response()->json(['message'=>'le categorie  est  supprimer'],204);
           }


           public function getImage($path)
{
    $fullPath = storage_path('/app/public/image/'.$path );
    
    if (!file_exists($fullPath)) {
   return response()->json(['error' => 'Image not found.'], 404);
    }
    
    $file = file_get_contents($fullPath);
    
   return response($file, 200)->header('Content-Type', 'image/jpeg');
  //return response($file, 200)->json($fullPath);
  //return response($fullPath);
}
}
