<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

    Route::post('api/like/{entry_id}', ['uses' => 'LikeController@newLike', 'middleware' => 'json'])->where('entry_id', '[0-9]+');
    Route::post('api/deletelike/{entry_id}', ['uses' => 'LikeController@removeLike', 'middleware' => 'json'])->where('entry_id', '[0-9]+');

    Route::post('api/login', ['uses' => 'TokenAuthController@authenticate', 'middleware' => 'json']);
    Route::post('api/user/new', ['uses' => 'TokenAuthController@register', 'middleware' => 'json']);
    Route::post('api/user/delete', ['uses' => 'UserController@deleteUser', 'middleware' => 'json']);
    Route::post('api/user/update', ['uses' => 'UserController@updateUser', 'middleware' => 'json']);

    Route::post('api/challenge/{challengeType}/{challenge_id}/new', ['uses' =>'EntryController@newEntry', 'middleware' => 'json'])->where('challenge_id', '[0-9]+');
    Route::post('api/challenge/{challengeType}/new', ['uses' => 'ChallengeController@newChallenge', 'middleware' => 'json']);

    Route::get('api/challenge/{challengeType}/{id}', ['uses' => 'ChallengeController@getEntries', 'middleware' => 'json'])->where('id', '[0-9]+');

    Route::get('api/challenge/{challengeType}/{challenge_id}/{entry_id}', ['uses' => 'EntryController@getDetails', 'middleware' => 'json'])->where(['challenge_id' => '[0-9]+', 'entry_id' => '[0-9]+']);

    Route::get('api/challenge/{challengeType}', ['uses' => 'ChallengeController@getSpecific', 'middleware' => 'json']);

    Route::get('api/{name}', ['uses' => 'UserController@getDetails', 'middleware' => 'json']);

    Route::any('{all}', function(){
        View::addExtension('html', 'php');
        return view('index');
    })->where('all', '.*');