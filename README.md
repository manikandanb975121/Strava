# @manikandanb/strava_api

Strava athletes upload millions of activities every day. @manikandanb/strava_api npm library will help developers to get all Strava Activity based on their requirements.

By using this @manikandanb/strava_api npm Library user can able to get Athelets, Club, Race, Routes, Segments and Users Activity related Data.


## Installation

> npm install @manikandanb/strava_api

Once you have installed it, you can import it in any Node JS Application,

> ```const strava = require('@manikandanb/strava_api');```

Once @manikandanb/strava_api is imported, you can use strava library in your Applications:


```

refreshTokenData = {
    client_id: *****,
    client_secret: '**************',
    refresh_token: '**************'
}

strava.getAccessTokenUsingRefreshToken(refreshTokenData).then((response) => console.log(response));

```
You can use your own strava cliend_id, client_secrent and refresh_token for Generate Access Token.

## Methods
- ### Club
    - getClubById
       ```
         clubs = {
            id: '*****',
            access_token: '***********'
        }

        strava.club.getClubById(clubs).then((response) => console.log(response));
        ```
    - getClubActivityById
        ```
         clubs = {
            id: '*****',
            access_token: '***********'
        }
        
        strava.club.getClubActivityById(clubs).then((response) => console.log(response));
        ```
    - getClubAdminsById
        ```
        clubs = {
            id: '*****',
            access_token: '***********'
        }

        strava.club.getClubAdminsById(clubs).then((response) => console.log(response));
        ```
    - getClubMembersById
        ```
         clubs = {
            id: '*****',
            access_token: '***********'
        }

        strava.club.getClubMembersById(clubs).then((response) => console.log(response));
        ```
    - getLoggedInAthleteClubs
        ```
        accessToken = {
            access_token: '************'
        }

        strava.club.getLoggedInAthleteClubs(accessToken).then((response) => console.log(response));

        ```
        
        



