<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'role' => 'user',
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }
        
        /** @var \App\Models\User $user */
        $user = Auth::user();
        
        if ($user->role === 'admin') {
            // Customize response for admin login
            return response()->json([
                'message' => 'Admin cant login bro this user login page ',
            ]);
        } else {
        $token = $user->createToken('main')->plainTextToken;
            // Customize response for user login
            return response()->json([
                'user' => $user,
                'token' => $token,
                'message' => 'User logged in successfully',
            ]);
        }
    }
    public function Adminlogin(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }
        
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        
        if ($user->role === 'user') {
            // Customize response for admin login
            return response()->json([
                'message' => 'User cant login bro this admin login page ',
            ]);
        } else if ($user->role === 'admin'){
            // Customize response for user login
            return response()->json([
                'admin' => $user,
                'token' => $token,
                'message' => 'Admin logged in successfully',
            ]);
        }
    }


    public function userLogout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
    
        if ($user->role === 'user') {
            $user->currentAccessToken()->delete();
            return response('', 204);
        }
    
        return response([
            'message' => 'Unauthorized logout request for user',
        ], 401);
    }
    
    public function adminLogout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
    
        if ($user) {
            $user->currentAccessToken()->delete();
            return response('', 204);
        }
    
        return response([
            'message' => 'Unauthorized logout request for admin',
        ], 401);
    }
    
}
