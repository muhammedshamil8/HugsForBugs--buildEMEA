<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\StoreDataRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\DataResource;
use App\Models\User;
use App\Models\Data;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        
        return UserResource::collection(User::query()->orderBy('id', 'desc')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreUserRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);

        return response(new UserResource($user) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateUserRequest $request
     * @param \App\Models\User                     $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $user->update($data);

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response("", 204);
    }

    public function getData()   
    {   
        $user = auth()->user();
        
        return DataResource::collection(Data::with('user')->where('user_id', $user->id)->orderBy('id', 'desc')->paginate(10));
    }   
    public function storeData(StoreDataRequest $request)
    {
        // Validated data is available via $request->validated()
        $data = $request->validated();
    
        try {
            // Additional logic to store the data
            $data['user_id'] = auth()->id();
            $createdData = Data::create($data);
    
            // Return a successful response
            return response(new DataResource($createdData), 201);
        } catch (\Exception $e) {
            // Log the exception for further investigation
            \Log::error($e);
    
            // Return an error response
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
    public function userID()
    {
        $user = auth()->user();
        return response()->json(['user_id' => $user->id], 200);
    }
    
}
