<?php

namespace App\Services;
use App\Models\DoctorCategory;

/**
 * Class DoctorService
 * @package App\Services
 */
class DoctorService
{
    public static function getAllCategory(){
        return DoctorCategory::orderBy('id', 'DESC')->get();
    }
}
