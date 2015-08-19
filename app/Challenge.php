<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Challenge extends Model
{
    
    protected $fillable = [
        'name',
        'desc',
        'isWeekly',
        'start'
    ];

    protected $dates=['start'];

    public function scopeStarted($query)
    {
        $query->where('start', '<=', Carbon::now());
    }

    public function getEndDate(){
        $isWeekly = $this->attributes['isWeekly'];
        if($isWeekly){
            return $this->start->addWeek();
        }else{
            return $this->start->addMonth();
        }

    }

    /**
     * @param $date
     */
    public function setStartAttribute($date)
    {
        $this->attributes['start'] = Carbon::createFromFormat('Y-m-d', $date);
        }

    /**
     * get number of entries for this challenge
     *
     * @return mixed
     */
    public function entryCount()
    {
        return $this->hasMany('App\Entry')->count();
    }

    /**
     * returns the img name of the entry with the most likes
     *
     * @return false (no entries) or img
     */
    public function featuredImg()
    {
        $entry = $this->mostLikes();

        if(!$entry == ''){
            return $entry->img;
        }else{
            return false;
        }
    }

    /**
     * returns entry with most likes
     *
     * @return string ('') if there are no likes or entry
     */
    public function mostLikes()
    {
        $entries =  $this->hasMany('App\Entry');
        $counter = 0;
        $match = '';

        foreach($entries as $entry){
            if($entry->likesCount() > $counter){
                $counter = $entry->likesCount();
                $match = $entry;
            }
        }

        return $match;

    }

    /**
     * a challenge can have many entries
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function entries()
    {
        return $this->hasMany('App\Entry');
    }
    
    
}
