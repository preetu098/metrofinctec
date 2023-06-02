<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel; 

class MutualFundsModel extends Model
{
    protected $table = 'Mutual_Fund_Latest_Nav';
    protected $fillable = [
        'SchemeName',
        'Cateogry',
        'LatestNAVDate',
        'LatestNAV',
        'PreviousNAVDate',
        'PreviousNAV',
        'ChangePercentage',
    ];
}
