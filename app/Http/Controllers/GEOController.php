<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Division;
use App\Models\Thana;
use App\Models\Union;
use Illuminate\Http\Request;

class GEOController extends Controller
{
    public function division(){
        $division = Division::orderBy('name', 'ASC')->get();
        return response()->json([
            'status' => true,
            'division' => $division
        ]);
    }

    public function district($division_id){
        $division = Division::findOrFail($division_id);
        $district = District::where('division_id', $division->id)->orderBy('name','ASC')->get();
        return response()->json([
            'status' => true,
            'district' => $district
        ]);
    }
    public function thana($district_id){
        $district = District::findOrFail($district_id);
        $thanas = Thana::where('district_id', $district->id)->orderBy('name','ASC')->get();
        return response()->json([
            'status' => true,
            'thanas' => $thanas
        ]);
    }
    public function union($thana_id){
        $thana = Thana::findOrFail($thana_id);
        $unions = Union::where('thana_id', $thana->id)->orderBy('name','ASC')->get();
        return response()->json([
            'status' => true,
            'unions' => $unions
        ]);
    }
}
