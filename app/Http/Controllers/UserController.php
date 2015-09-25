<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\User;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Mockery\CountValidator\Exception;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => 'getDetails']);
    }

    public function getDetails($name)
    {


        if ( ! is_null($user = User::where('userName', $name)->first())) {
            return $user;
        }
        throw new ModelNotFoundException;


    }

    public function deleteUser()
    {
        try{
            $user = JWTAuth::parseToken()->authenticate();
            $user->delete();

        }catch(Exception $e){
            abort(403, 'Error while deleting');
        }


    }

    public function updateUser(Request $request)
    {
        try{
            $update = $request->all();
            $user = JWTAuth::parseToken()->authenticate();
            $user->update($update);
            return $user;

        }catch(Exception $e){
            abort(403, 'Error while updating');
        }


    }
}
