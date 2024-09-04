<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cours;

class Categorie extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $fillable = [
        'name',
        'image'
    ];
    public function cours()
    {
        return $this->hasMany(Cours::class);
    }
}
