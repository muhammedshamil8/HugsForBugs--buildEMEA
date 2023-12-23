<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\AdminLoginRequest;
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
            ]);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }
    public function adminLogin(AdminLoginRequest $request)
    {
        try {
            $credentials = $request->validated();
    
            // Check against the admins table
            if (!Auth::guard('admin')->attempt($credentials)) {
                return response(['message' => 'Invalid admin credentials'], 401);
            }
    
            $admin = Auth::guard('admin')->user();
            $token = $admin->createToken('admin')->plainTextToken;
    
            return response(compact('admin', 'token'));
        } catch (\Exception $e) {
            // Log the exception for debugging
            logger()->error('Admin login failed: ' . $e->getMessage());
    
            // Return a generic error response
            return response(['message' => 'An error occurred during admin login'], 500);
        }
    }
    

    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
