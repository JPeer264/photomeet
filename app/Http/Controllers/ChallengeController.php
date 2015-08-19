<?php

namespace App\Http\Controllers;

use App\Challenge;
use App\Entry;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Arr;

class ChallengeController extends Controller
{

    public function getSpecific($challengeType){

        //some dummy test data for frontend development without a db connection
        //APP_DATAMODE is located in the .env file
        if(env('APP_DATAMODE') == "dummy"){

            $entries = array();

            for($i=1;$i<=10;$i++){
                $dummy = (object)array(
                    'id' => $i,
                    'name' => 'Dummy Entry #'.$i,
                    'category' => 'weekly',
                    'img' => 'filename',
                    'desc' => 'This is a dummy description',
                    'userName' => 'Simon',
                    'userPic' => 'simon.jpg',
                    'likes' => 10*$i
                );
                array_push($entries, $dummy);
            }

            return $entries;

        } else{
            //the real deal
            $type = $challengeType;

            if($type == "monthly"){
                $challenges = Challenge::where('isWeekly', '=', 0)->started()->get();
            }else if($type == 'weekly'){
                $challenges = Challenge::where('isWeekly', '=', 1)->started()->get();
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
    }

    public function getEntries($challengeType, $challenge_id)
    {

        if(env('APP_DATAMODE') == "dummy"){

            $entries = array();

            for($i=1;$i<=10;$i++){
                $dummy = (object)array(
                    'id' => $i,
                    'name' => 'Dummy Entry #'.$i,
                    'category' => 'weekly',
                    'img' => 'filename',
                    'desc' => 'This is a dummy description',
                    'userName' => 'Simon',
                    'userPic' => 'simon.jpg',
                    'likes' => 10*$i
                );
                array_push($entries, $dummy);
            }

            return $entries;

        } else {
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
                }

                return $entries;
            } else {
                return false;
            }
        }

    }

    public function newChallenge(Request $request, $challengeType){
            $newChallenge = $request->all();
            $newChallenge['isWeekly'] = ($challengeType === 'weekly' ? true : false);
            return Challenge::create($newChallenge);
        }
}
