<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Enseignant;
use App\Models\Etudiant;

class Cours extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $fillable = [
        'name',
        'nombre_etudiant',
        'date',
       
        
    ];
    public function enseignant()
    {
        return $this->belongsTo(Enseignant::class);
    }
    public function etudiants()
    {
        return $this->belongsTo(Etudiant::class);
    }
    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }
}
