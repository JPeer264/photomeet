# photomeet

## Getter Functions

> required functions with return values

### Startseite

**getMonthlyChallenges()**

```json
{
	"ID": "",
	"name": "",
	"img": "",
	"description": "",
	"howManyUploads": ""
}
```

**getWeeklyChallenges()**

```json
{
	"ID": "",
	"name": "",
	"img": "",
	"description": "",
	"howManyUploads": ""
}
```

**countAllChallenges(Array)**
> `countAllChallenges(['month', 'week'])` ausbaufähig auf `countAllChallenges(['day', 'week'])`

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

**getUser()**

> if logged in `return true` - if not `return false`

```json
{
	"ID": "",
	"Username": ""
}
```

### Specific Challenge

**getEntrys(ChallengeID)**

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
### No use case until now

**getEntryDetail(EntryID)**

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

### User Profile

**getUserDetail(UserID)**
**getUserDetail()**

> maybe laravel stores the user?!

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

## Setter Funtions

> required functions for a stable backend

**Simons turn**

For example:

**setUser(JsonOfUser)**

```json
{
	"Username": "",
	"Password": "",
	"Password2": "",
	"etc": "",
}
```

## ToDo

| Done  | Functions            | Description |
| :---: | -------------------- | ----------- |
| :x:   | getMonthlyChallenges |             |
| :x:   | getWeeklyChallenges  |             |
| :x:   | countAllChallenges   |             |
| :x:   | getUser			   |             |
| :x:   | getEntrys            |             |
| :x:   | getEntryDetail       |             |
| :x:   | getUserDetail        |             |