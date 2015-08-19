<?php

namespace App\Http\Controllers;

use App\Entry;
use App\Like;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function newLike(Request $request, $entry_id){
        $user = JWTAuth::parseToken()->authenticate();

        $newLike['entry_id'] = $entry_id;
        $newLike['user_id'] = $user->id;

        if(Like::where(['entry_id' => $newLike['entry_id'], 'user_id' => $newLike['user_id']])->exists()){
            abort(403, 'Like is already registered');
        }else{
            return Like::create($newLike);

        }
    }

    public function removeLike($entry_id){
        $user = JWTAuth::parseToken()->authenticate();

        $newLike['entry_id'] = $entry_id;
        $newLike['user_id'] = $user->id;

        if(Like::where(['entry_id' => $newLike['entry_id'], 'user_id' => $newLike['user_id']])->exists()){
            Like::where(['entry_id' => $newLike['entry_id'], 'user_id' => $newLike['user_id']])->delete();
        }else{
            abort(403, 'Like is not registered');

        }
    }


}

