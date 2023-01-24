<?php

namespace App\Http\Controllers\Admin;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Services\WorkService;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function index(){
        $service_list = WorkService::getAllService();
        return response()->json([
            'status' => true,
            'service_list' => $service_list
        ]);
    }

    public function edit($id){
        $service = Service::findOrFail($id);
        return response()->json([
            'status' => true,
            'service' => $service
        ]);
    }


    public function store(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);
        $data['slug'] = strtolower(str_replace(' ','-',$data['name']));
        if ($request->hasFile('imageFile')) {
            $path = $request->file('imageFile')->store('images/service', 'public');
            $data['image'] = $path;
        }
        Service::query()->create($data);
        return response()->json([
            'status' => true,
            'message' => 'Successfully added new Service'
        ]);

    }

    /* Update */
    public function update(Request $request,$id){
        $service = Service::findOrFail($id);
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);
        $data['slug'] = strtolower(str_replace(' ','-',$data['name']));
        if ($request->hasFile('imageFile')) {
            $path = $request->file('imageFile')->store('images/service', 'public');
            $data['image'] = $path;
        }
        $service->update($data);
        return response()->json([
            'status' => true,
            'message' => 'Successfully Edit Service'
        ]);
    } 



}
