<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{

    /**
     * allowed for mass assignment
     * @var array
     */
    protected $fillable=[
        'challenge_id',
        'user_id',
        'img',
        'name',
        'desc'
    ];


    /**
     * an entry belongs to one user
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * returns the number of likes
     * @return mixed
     */
    public function likesCount()
    {
        return $this->hasMany('App\Like')->count();
    }

    /**
     *  An entry belongs to one Challenge
     */
    public function challenge()
    {
        return $this->belongsTo('App\Challenge');
    }
}
