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
You can use your own strava cliend_id, client_secrent and refresh_token to Generate Access Token.

## Methods
- ## Activity
    - getAccessTokenUsingCode
        ```
        inputData = {
            client_id: *****,
            client_secret: '****************',
            code: '*************************',
        };

        strava.getAccessTokenUsingCode(inputData).then((response) => console.log(response));

        You can use your own strava client_id, client_secret and code to Generate access_token

        ```
    - getAccessTokenUsingRefreshToken
        ```
        refreshTokenData = {
            client_id: *****,
            client_secret: '**************',
            refresh_token: '**************'
        }

        strava.getAccessTokenUsingRefreshToken(refreshTokenData).then((response) => console.log(response));

        You can use your own strava cliend_id, client_secrent and refresh_token to Generate Access Token.

        ```
    - getActivity
        ```
        accessToken = {
            access_token: '**********************'
        }

        strava.getActivity(accessToken).then((response) => console.log(response));

        ```
    - getActivityWithPolyline
        ```
        accessToken = {
            access_token: '*****************'
        }
            
        strava.getActivityWithPolyline(accessToken).then((response) => console.log(response));

        ```
    - getActivityById
        ```
        activityId = {
            id: '**********',
            access_token: '*******************'
        }

        strava.getActivityById(activityId).then((response) => console.log(response));

        ```
    - getActivityComments
        ```
        activityId = {
            id: '**************',
            access_token: '****************'
        }

        strava.getActivityComments(activityId).then((response) => console.log(response));

        ```
    - getActivityKudos
        ```
        activityId = {
            id: '************',
            access_token: '********************'
        }

        strava.getActivityKudos(activityId).then((response) => console.log(response));

        ```
    - getActivityLaps
        ```
        activityId = {
            id: '5************',
            access_token: '****************'
        }

        strava.getActivityLaps(activityId).then((response) => console.log(response));

        ```
    - getActivityZones
        ```
        activityId = {
            id: '**************',
            access_token: '**************'
        }

        strava.getActivityZones(activityId).then((response) => console.log(response));

        ```
    - createActivity
        ```
        postActivity = {
            name: 'Sample Post',
            type: 'Walk',
            start_date_local: new Date()
            elapsed_time: 10,
            description: 'Sample Descriptions',
            distance: 15,
            trainer: 0,
            commute: 0,
            access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
        }

        strava.createActivity(postActivity).then((response) => console.log(response));

        name, type, start_local_date and elapsed_time are required field to create a new Strava Activity. Remaining Fields are optional
        
        ```
- ### Athelets
    
    - getAthletes
        ```
        accessToken = {
            access_token: '************'
        }

        strava.Athelets.getAthletes(accessToken).then((response) => console.log(response));

        ```
    - getAuthenticatedAtheleteZones
        ```
        accessToken = {
            access_token: '************'
        }

        strava.Athelets.getAuthenticatedAtheleteZones(accessToken).then((response) => console.log(response)); // Requeires profile:read_all  Permissions
        ```
    - getAtheleteStats
        ```
        athletes = {
            id: '*******',
            access_token: '***************'
        }

        strava.Athelets.getAtheleteStats(athletes).then((response) => console.log(response));
        ```
    - updateAthelets
        ```
        updateAthletes = {
            weight: 0, // You can use any Integer Value
            access_token: '********************'
        }

        strava.Athelets.updateAthelets(updateAthletes).then((response) => console.log(response));  // Requires profile:write  Permissions
        ```

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
- ## Routes
    - getGPXRoute
        ```
        route = {
            id: '*******',
            access_token: 'b*******************'
        }

        strava.Routes.getGPXRoute(route).then((response) => console.log(response));

        ```
    - getTCXRoute
        ```
        route = {
            id: '*******',
            access_token: 'b*******************'
        }

        strava.Routes.getTCXRoute(route).then((response) => console.log(response));

        ```
    - getRoutes
        ```
        route = {
            id: '*******',
            access_token: 'b*******************'
        }

        strava.Routes.getRoutes(route).then((response) => console.log(response));

        ```
- ## Running Race
    - getRunningRaces
        ```
        race = {
            year: 2019, // Year is Optional Field
            access_token: '*******************************'
        }

        strava.Race.getRunningRaces(race).then((response) => console.log(response));

        ```
    - getRunningRaceById
        ```
        raceByIds = {
            id: '*****',
            access_token: '***************'
        }

        strava.Race.getRunningRaceById(raceByIds).then((response) => console.log(response));
        ```
- ## Segments
    - exploreSegments
        ```
        segmentsData = {
            bounds: [37.8331119, -122.4834356, 37.8280722, -122.4981393],
            activity_type: 'running',
            min_cat: 1,
            max_cat: 1,
            access_token: '************************',
        } 

        strava.Segments.exploreSegments(segmentsData).then(response => console.log(response));

        activity_type, min_cat, max_cat are optional fields. access_token and bounds are required fields.

        bounds: The latitude and longitude for two points describing a rectangular boundary for the search: [southwest corner latitutde, southwest corner longitude, northeast corner latitude, northeast corner longitude]

        activity_type: 'running' or 'riding'

        ```
    - getStarredSegments
        ```
        segmentsData = {
            page = 1,
            per_page = 30,
            access_token: '************************',
        }

        strava.Segments.getStarredSegments(segmentsData).then((response) => console.log(response));

        page, per_page field are optional, Defautly it will take page value as 1 and per_page value as 30

        ```
    - getSegmentsById
        ```
        segmentsData = {
            id: 229781,
            access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
        }

        strava.Segments.getSegmentsById(segmentsData).then((response) => console.log(response));

        ```

        
        



