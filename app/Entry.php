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
        'desc',
        'filename'
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

    public function saveFile($file){

        //modifying and saving image
        $destinationPath = public_path().('/src/assets/img/uploads/'.$this['user_id']);;
        $extension = $file->getClientOriginalExtension();
        $filename = uniqid().'.'.$extension;

        $file->move($destinationPath, $filename);

        $this['filename']= $filename;
        return $this->update();

        }
}
