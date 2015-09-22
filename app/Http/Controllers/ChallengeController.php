<?php

namespace App\Http\Controllers;

use App\Challenge;
use App\Entry;
use App\Like;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Arr;
use Mockery\CountValidator\Exception;
use Tymon\JWTAuth\Facades\JWTAuth;

class ChallengeController extends Controller
{

    /**
     * returns challenges. with some additional information, that have already started, ordered desc by start date.
     *
     * @param $challengeType
     * @return string
     */
    public function getSpecific($challengeType){

            $type = $challengeType;

            if($type == "monthly"){
                $challenges = Challenge::where('isWeekly', '=', 0)->started()->orderBy('start', 'DESC')->get();
            }else if($type == 'weekly'){
                $challenges = Challenge::where('isWeekly', '=', 1)->started()->orderBy('start', 'DESC')->get();
            }else{
                return 'wrong challenge type';
            }

            foreach($challenges as $challenge){
                $challenge->img = $challenge->featuredImg();
                $challenge->howManyUploads = $challenge->entryCount();
                $challenge->end = $challenge->getEndDate();
                unset($challenge->isWeekly);
                unset($challenge->created_at);
                unset($challenge->updated_at);
            }

            return $challenges;


    }

    public function getEntries($challengeType, $challenge_id)
    {

        try{
            $userToken = JWTAuth::parseToken()->authenticate();
            $signed_in = true;
        }catch (\Exception $e){
            $signed_in = false;
        }

        $challenge = Challenge::find($challenge_id);
        $entries = $challenge->entries;

        if ($entries) {
            foreach ($entries as $entry) {
                $user = $entry->user;

                unset($entry->challenge_id);
                unset($entry->created_at);
                unset($entry->updated_at);
                unset($entry->user);
                $entry->userPic = $user->userPic;
                $entry->userName = $user->name;
                $entry->category = ($challenge->isWeekly) ? 'weekly' : 'monthly';
                $entry->likes = $entry->likesCount();
                if($signed_in){
                    $likes = Like::where('user_id', $userToken->id)->get();
                    foreach($likes as $like){
                        if($like->entry_id == $entry->id){
                            $entry->liked = true;
                        }else{
                            $entry->liked = false;
                        }
                    }
                }
            }

            return $challenge;
        } else {
            return false;
        }


    }

    public function newChallenge(Request $request, $challengeType){
            $newChallenge = $request->all();
            $newChallenge['isWeekly'] = ($challengeType === 'weekly' ? true : false);
            return Challenge::create($newChallenge);
        }
}
