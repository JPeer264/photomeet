# PicStar

## GET

> required requests to `www.page.com/dir`

### challenge

> `www.page.com/challenge`

**getSpecificChallenge**

`www.page.com/challenge/challengeType `

```json
{
	"ID": "",
	"name": "",
	"img": "",
	"description": "",
	"howManyUploads": ""
}
```

**filterAllChallenges**

> _optional_: & type[]=month & type[]=week

`www.page.com/challenge/count?type[]=month`

_filterAllChallenges(['month', 'week'])` ausbaufähig auf `filterAllChallenges(['day', 'week'])_

```json
{
	"month": {
		"counts": "",
		"mostUploads": {
			"alles was zu einer Challenge Quickview gehört": "",
			"img": "",
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
	"img": "",
	"description": "",
	"Username/Uploader": "",
	"Userpic": "",
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
	"img": "",
	"description": "",
	"Username/Uploader": "",
	"Userpic": "",
	"Likes": ""
	"vielleicht gibts noch geile zusätze sonst wärs schwachsinnig eine eigene Funktion im Backend zu machen"
}
```

### user

**login**

> **required**: & username=value & email=value & password=value

`www.page.com/login?username=value&password=value`
or
`www.page.com/login?email=value&password=value`

_if not logged in `return json` - if already logged in `return false` (depends on laravel if it stores the usersession)_

```json
{
	"ID": "",
	"Username": ""
}
```

**getUserDetail**

`www.page.com/username`

_maybe laravel stores the user?!_

```json
{
	"ID": "",
	"Username": "",
	"img": "",
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

### user

**setUser**

> **required**: & username=value & email=value & password=value & passwordProof=value 

`www.page.com/user?username=value&email=value&password=value&passwordProof=value`

### challenge

**setChallenge**

> **required**: & type=month & name=Simons%20Cat & desc=Draw%20Simons%20cat%21 & username=value

`www.page.com/challenge/challengeType/challengeID?name=Simons%20Cat&desc=Draw%20Simons%20cat%21&username=value`

### entry

**newEntry**

> **required**: & name=Simons%20cat%20in%20vienna & desc=value & username=value

`www.page.com/challenge/challengeType/challengeID?name=Simons%20cat%20in%20vienna&desc=value&username=value`

## 

## ToDo - OVERVIEW

> note: Just send if Accept-Header is `application/json`

| Done | PARAM | url                                  | Description 
| :---:| :---: | ------------------------             | --- 
| :x:  | GET   | /challenge/challengeType             | get all challenges _challengeType = month, day, week,..._
| :x:  | GET   | /challenge/filter?type[]=month       | filters all challenges into Popular, Most Uploads, etc., see above
| :x:  | GET   | /challenge/challengeType/challengeID | get all entrys from e.g.: /challenge/monthly/244225
| :x:  | GET   | /challenge/challengeType/challengeID/entryID | get specific entry from challenge. E.g.: /challenge/monthly/244225/412423
| :x:  | GET   | /login?username=value&password=value | login - is this save? better solution please :bowtie:
| :x:  | GET   | /Username                            | returns all userinformation
| :x:  | POST  | /user?username=value&email=value&password=value&passwordProof=value | add new user
| :x:  | POST  | /challenge/challengeType/challengeID?name=value&desc=value&username=value | add new entry
| :x:  | POST  | /challenge/challengeType?name=value&username=value | add new challenge







