<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDataRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\DataResource;
use App\Models\User;
use App\Models\Data;

class DataController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreDataRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDataRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = auth()->id(); // Set the user_id to the authenticated user's ID
        $createdData = Data::create($data);

        return response(new DataResource($createdData), 201);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        // Retrieve and return all data entries
        return DataResource::collection(Data::with('user')->orderBy('id', 'desc')->get());
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Data $data
     * @return \Illuminate\Http\Response
     */
    public function show(Data $data)
    {
        // Return a specific data entry
        return new DataResource($data);
    }
    
    public function getData()   
    {   
        $user = auth()->user();
        
        return DataResource::collection(Data::with('user')->where('user_id', $user->id)->orderBy('id', 'desc')->paginate(10));
    }   
    
    
    // Other methods for updating and deleting data entries can be added as needed
}
