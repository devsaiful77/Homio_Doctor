<?php

namespace App\Services;

use App\Models\Service;

/**
 * Class WorkService
 * @package App\Services
 */
class WorkService
{
    public static function getAllService(){
        return Service::orderBy('id','DESC')->get();
    }
}
