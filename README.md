# PicStar

## GET

> required requests to `www.page.com/dir`

### challenge

> `www.page.com/challenge`

**getSpecificChallenge**

`www.page.com/api/challenge/challengeType `

img returns the filename of the picture with the most likes, if there is no entry it returns false

```json
{
	"id": "",
	"name": "",
	"img": "filename",
	"desc": "", 
	"howManyUploads": ""
	"end" : endOfChallengeDate
}
```

**filterAllChallenges**

> _optional_: & type[]=month & type[]=week

`www.page.com/challenge/count?type[]=month`

```json
{
	"month": {
		"counts": "",
		"mostUploads": {
			"alles was zu einer Challenge Quickview gehört": "",
			"img": "filename",
			"name": ""
		},
		"mostRated": "sames as mostUploads",
		"popular": "sames as mostUploads"
	},
	"week": {
		"values": "same as month"
	}
}
```

[How does this work?](http://stackoverflow.com/questions/1763508/passing-arrays-as-url-parameter)

### entry

**getEntries**

`www.page.com/api/challenge/challengeType/challengeID`

**UPDATE!!!**
Will return the challenge as an object with the attribute 'entries' which will contain all entries for this challenge.


```json
{
  "id": 1,
  "isWeekly": 1,
  "name": "TestChallenge",
  "desc": "TestDescription",
  "start": "2015-03-14 09:51:13",
  "created_at": "2015-08-19 09:51:13",
  "updated_at": "2015-08-19 09:51:13",
  "entries": [
    {
      "id": 1,
      "img": "img",
      "name": "name",
      "desc": "desc\n",
      "user_id": 1,
      "userPic": "",
      "userName": null,
      "category": "weekly",
      "likes": 0
    },
    {
      "id": 2,
      "img": "img2",
      "name": "name2",
      "desc": "desc2",
      "user_id": 1,
      "userPic": "",
      "userName": null,
      "category": "weekly",
      "likes": 0
    }
  ]
}
```

**getEntryDetail**

> get specific entry with an entry ID at the end

`www.page.com/api/challenge/challengeType/challengeID/entryID` 

```json
{
	"id": "",
	"category": "monthly/weekly",
	"name": "",
	"img": "filename",
	"desc": "",
	"userName": "",
	"userPic": "filename",
	"likes": ""
	"vielleicht gibts noch geile zusätze sonst wärs schwachsinnig eine eigene Funktion im Backend zu machen"
}
```

**getUserDetail**

`www.page.com/api/username?token=value`

```json
{
	"id": "",
	"name": "",
	"userPic": "filename",
	"desc": "",
	"prename": "",
	"lastname": "",
	"birthday": "timestamp",
	"city": "",
	"alles was dir noch einfällt": ""
	"biography": ""
}
```

## POST

> following statements are for **updating** and **creating** as well
**!!EXCEPTION!!** login is just for submitting data, returns value

### user

**login**

> **required**: & username=value or email=value & password=value.

`www.page.com/api/login?email=value&password=value`

_returns:_
```json
{
	"token": "e72e16c7e42f292c6912e7710c838347ae178b4a"
}
```
> The first login will send username and hashed password. The server will return an TOKEN, which is saved in backend and frontend (cookie) as well. With every further request, which is submitted by the user, the TOKEN will be in the request as well as a 'Authorization' header with the value 'Bearer tokenValue'. The backend will check the frontend TOKEN with the backend TOKEN. If they are the same, the backend knows, which user is currently logged in. E.g.: `www.page.com/newEntry` `**POST-DATA:** ?entryValues&token=value`

**register / setUser**

> **required**: & userName=value & email=value & password=value

`www.page.com/api/user/new`

`POST-DATA: ?username=value&email=value&password=value

**delete User**
> **required**: Token

`www.page.com/api/user/delete`

**delete User**
> **required**: Token, Value to Update (Request Body)

`www.page.com/api/user/update`

### Token

**CheckToken**

> **required**: Token
if token is fine it will be returned, exceptions if it is expired or didn't exists, etc.

`www.page.com/api/token'

**refreshToken**

> **required**: Token
if token is fine, it will generate a new one with a fresh expire date.

`www.page.com/api/refresh`

### challenge

**setChallenge**

> **required**: [isWeekly (bool)], name (string), start (date), desc (string) 

isWeekly is not necessary because of the url parameter
!! start-attribute has to be Y-m-d !!

`www.page.com/api/challenge/challengeType/new`

### entry

**newEntry**

> **required**: & name=Simons%20cat%20in%20vienna & desc=value & file=file

`www.page.com/api/challenge/challengeType/challengeID/new`

`POST-DATA: ?name=Simons%20cat%20in%20vienna&desc=value&username=value`

!! Error if challenge is already expired !!

### likes

#### add like

www.page.com/api/like/{entry_id}
> **required**: Authorization: Bearer {tokenKey}

adds like from user to entry

#### remove like
www.page.com/api/deletelike/{entry_id}
> **required**: Authorization: Bearer {tokenKey}

removes like from user


## 

## ToDo - OVERVIEW

> note: Just send if Accept-Header is `application/json`

| Done | PARAM | url                                  | Description 
| :---:| :---: | ------------------------             | --- 
| :x:  | GET   | /api/challenge/challengeType             | get all challenges _challengeType = month, day, week,..._
| :x:  | GET   | /api/challenge/filter?type[]=month       | filters all challenges into Popular, Most Uploads, etc., see above
| :x:  | GET   | /api/challenge/challengeType/challengeID | get all entrys from e.g.: /challenge/monthly/244225
| :x:  | GET   | /api/challenge/challengeType/challengeID/entryID | get specific entry from challenge. E.g.: /challenge/monthly/244225/412423
| :x:  | GET   | /api/Username                            | returns all userinformation
| :x:  | POST  | /api/login?username=value&password=value | OTOKEN FTW ! :bowtie:
| :x:  | POST  | /api/user?username=value&email=value&password=value&passwordProof=value | add new user
| :x:  | POST  | /api/challenge/challengeType/challengeID?name=value&desc=value&username=value | add new entry
| :x:  | POST  | /api/challenge/challengeType?name=value&username=value | add new challenge
