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

    Route::post('like/{entry_id}', 'LikeController@newLike')->where('entry_id', '[0-9]+');
    Route::post('deletelike/{entry_id}', 'LikeController@removeLike')->where('entry_id', '[0-9]+');

    Route::post('login', 'TokenAuthController@authenticate');
    Route::post('user/new', 'TokenAuthController@register');
    Route::post('user/delete', 'UserController@deleteUser');
    Route::post('user/update', 'UserController@updateUser');

    Route::post('challenge/{challengeType}/{challenge_id}/new', 'EntryController@newEntry')->where('challenge_id', '[0-9]+');
    Route::post('challenge/{challengeType}/new', 'ChallengeController@newChallenge');

    Route::get('challenge/{challengeType}/{id}', 'ChallengeController@getEntries')->where('id', '[0-9]+');

    Route::get('challenge/{challengeType}/{challenge_id}/{entry_id}', 'EntryController@getDetails')->where(['challenge_id' => '[0-9]+', 'entry_id' => '[0-9]+']);

    Route::get('challenge/{challengeType}', 'ChallengeController@getSpecific');

    Route::get('{name}', 'UserController@getDetails');

