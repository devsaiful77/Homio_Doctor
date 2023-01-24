<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DoctorCategory;
use App\Services\DoctorService;
use Illuminate\Http\Request;

class DoctorCategoryController extends Controller
{
    public function index(){
        $category_list = DoctorService::getAllCategory();
        return response()->json([
            'status' => true,
            'category_list' => $category_list
        ]);
    }

    public function edit($id){
        $category = DoctorCategory::findOrFail($id);
        return response()->json([
            'status' => true,
            'category' => $category
        ]);
    }


    public function store(Request $request){
        $data = $request->validate([
            'name' => 'required',
        ]);
        $data['slug'] = strtolower(str_replace(' ','-',$data['name']));
        if ($request->hasFile('imageFile')) {
            $path = $request->file('imageFile')->store('images/doctor_category', 'public');
            $data['image'] = $path;
        }
        DoctorCategory::query()->create($data);
        return response()->json([
            'status' => true,
            'message' => 'Successfully added Doctor Category'
        ]);

    }

    /* Update */
    public function update(Request $request,$id){
        $doctor = DoctorCategory::findOrFail($id);
        $data = $request->validate([
            'name' => 'required',
        ]);
        $data['slug'] = strtolower(str_replace(' ','-',$data['name']));
        if ($request->hasFile('imageFile')) {
            $path = $request->file('imageFile')->store('images/doctor_category', 'public');
            $data['image'] = $path;
        }
        $doctor->update($data);
        return response()->json([
            'status' => true,
            'message' => 'Successfully Update Doctor Category'
        ]);
    } 
}
