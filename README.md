# PicStar

## GET

> required requests to `www.page.com/dir`

### challenge

> `www.page.com/challenge`

**getSpecificChallenge**

`www.page.com/challenge/challengeType `

img returns the filename of the picture with the most likes, if there is no entry it returns false

```json
{
	"ID": "",
	"name": "",
	"img": "filename",
	"description": "", 
	"howManyUploads": ""
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

**getEntrys**

`www.page.com/challenge/challengeType/challengeID`

Get entries of a specific challenge

```json
{
	"ID": "",
	"category": "monthly/weekly",
	"name": "",
	"img": "filename",
	"description": "",
	"Username/Uploader": "",
	"Userpic": "filename",
	"Likes": ""
}
```

**getEntryDetail**

> get specific entry with an entry ID at the end

`www.page.com/challenge/challengeType/challengeID/entryID` 

```json
{
	"ID": "",
	"category": "monthly/weekly",
	"name": "",
	"img": "filename",
	"description": "",
	"Username/Uploader": "",
	"Userpic": "filename",
	"Likes": ""
	"vielleicht gibts noch geile zusätze sonst wärs schwachsinnig eine eigene Funktion im Backend zu machen"
}
```

**getUserDetail**

`www.page.com/username?token=value`

```json
{
	"ID": "",
	"Username": "",
	"img": "filename",
	"description": "",
	"basicInformation": {
		"prename": "",
		"lastname": "",
		"birthday": "timestamp",
		"city": "",
		"alles was dir noch einfällt": ""
	},
	"biography": ""
}
```

## POST

> following statements are for **updating** and **creating** as well
**!!EXCEPTION!!** login is just for submitting data, returns value

### user

**login**

> **required**: & username=value or email=value & password=value.

`www.page.com/login?username=value&password=value`
or
`www.page.com/login?email=value&password=value`

_returns:_
```json
{
	"OAUTH": "e72e16c7e42f292c6912e7710c838347ae178b4a"
}
```
> The first login will send username and hashed password. The server will return an TOKEN, which is saved in backend and frontend (cookie) as well. With every further request, which is submitted by the user, the TOKEN will be in the request as well as `& token=value`. The backend will check the frontend TOKEN with the backend TOKEN. If they are the same, the backend knows, which user is currently logged in. E.g.: `www.page.com/newEntry` `**POST-DATA:** ?entryValues&token=value`

**register / setUser**

> **required**: & username=value & email=value & password=value & passwordProof=value 

`www.page.com/user/new`

`POST-DATA: ?username=value&email=value&password=value&passwordProof=value`

### challenge

**setChallenge**

> **required**: & type=month & name=Simons%20Cat & desc=Draw%20Simons%20cat%21 & username=value

`www.page.com/challenge/challengeType/challengeID/new`

`POST-DATA: ?name=Simons%20Cat&desc=Draw%20Simons%20cat%21&username=value`

### entry

**newEntry**

> **required**: & name=Simons%20cat%20in%20vienna & desc=value & username=value

`www.page.com/challenge/challengeType/challengeID/new`

`POST-DATA: ?name=Simons%20cat%20in%20vienna&desc=value&username=value`

## 

## ToDo - OVERVIEW

> note: Just send if Accept-Header is `application/json`

| Done | PARAM | url                                  | Description 
| :---:| :---: | ------------------------             | --- 
| :x:  | GET   | /challenge/challengeType             | get all challenges _challengeType = month, day, week,..._
| :x:  | GET   | /challenge/filter?type[]=month       | filters all challenges into Popular, Most Uploads, etc., see above
| :x:  | GET   | /challenge/challengeType/challengeID | get all entrys from e.g.: /challenge/monthly/244225
| :x:  | GET   | /challenge/challengeType/challengeID/entryID | get specific entry from challenge. E.g.: /challenge/monthly/244225/412423
| :x:  | GET   | /Username                            | returns all userinformation
| :x:  | POST  | /login?username=value&password=value | OTOKEN FTW ! :bowtie:
| :x:  | POST  | /user?username=value&email=value&password=value&passwordProof=value | add new user
| :x:  | POST  | /challenge/challengeType/challengeID?name=value&desc=value&username=value | add new entry
| :x:  | POST  | /challenge/challengeType?name=value&username=value | add new challenge
