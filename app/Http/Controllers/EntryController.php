<?php

namespace App\Http\Controllers;

use App\Challenge;
use App\Entry;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use JWTAuth;

class EntryController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => 'getDetails']);
    }

    public function getDetails( $challengeType, $challenge_id, $entry_id)
    {

        $challenge = Challenge::findOrFail($challenge_id);
        $entry = Entry::findOrFail($entry_id);

        $user = $entry->user;

        unset($entry->challenge_id);
        unset($entry->created_at);
        unset($entry->updated_at);
        unset($entry->user);
        $entry->userPic = $user->userPic;
        $entry->userName = $user->name;
        $entry->category = ($challenge->isWeekly) ? 'weekly' : 'monthly';
        $entry->likes = $entry->likesCount();

        return $entry;

    }

    public function newEntry(Request $request, $challengeType, $challenge_id){
        $challenge = Challenge::findOrFail($challenge_id);
        if($challenge->getEndDate() <= Carbon::now()){
            abort(403, 'Challenge is already expired');
        }else{
            $user = JWTAuth::parseToken()->authenticate();
            $file = Input::file('file');
            $newEntry = $request->all();
            $newEntry['challenge_id'] = $challenge_id;
            $newEntry['user_id'] = $user->id;
            $entry = Entry::create($newEntry);
            $entry->saveFile($file);
            return $entry;
        }
    }

    public function update(Request $request, $id){
            $entry = Entry::findOrFail($id);
            $user = JWTAuth::parseToken()->authenticate();

            if($user->id == $entry->user_id) {
                $entry->update($request->all());
                return $entry;
            }else{
                abort(403, 'Not authorized to update this entry');
            }
        }
}
