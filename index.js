const axios = require('axios');
const polyline = require('google-polyline');

// Club
const Club = require('./club');

// Athelets
const Athelets = require('./athelets');

// Route
const Routes = require('./routes');

// Race
const Race = require('./race');

// Segments
const Segments = require('./segments');


const getAccessTokenUsingCode = async (data) => {
    console.log(data);
    try {

        const repos =  await axios({
            method: 'post',
            url: 'https://www.strava.com/oauth/token',
            params: {
                client_id: data.client_id,
                client_secret: data.client_secret,
                code: data.code,
                grant_type: 'authorization_code'
            }
        })
        
        // console.log('entered from strava');
        return repos.data
    }
    catch (error) {
        return error;
    }
};


const getAccessTokenUsingRefreshToken = async (data) => {
    console.log(data);
    try {

        const repos =  await axios({
            method: 'post',
            url: 'https://www.strava.com/api/v3/oauth/token',
            params: {
                client_id: data.client_id,
                client_secret: data.client_secret,
                refresh_token: data.refresh_token,
                grant_type: 'refresh_token'
            }
        })
        
        // console.log('entered from strava refresh Token');
        return repos.data
    }
    catch (error) {
        return error;
    }
};


const getActivity = async (data) => {

    try {

        const activity = await axios({
            method: 'get',
            url: 'https://www.strava.com/api/v3/activities',
            params: {
                access_token: data.access_token
            }
        })

        return activity.data
    }

    catch(error) {
        return error;
    }

};

const getActivityWithPolyline = async (data) => {
    try {

        const activity = await axios({
            method: 'get',
            url: 'https://www.strava.com/api/v3/activities',
            params: {
                access_token: data.access_token
            }
        })

        activity.data.forEach((act) => {
            act.route = polyline.decode(act.map.summary_polyline)
        })

        // console.log(activity.data.route);
        // activity.data.forEach(act => console.log(act.route));
        return activity.data
    }
    catch(error) {
        return error
    }
};



const getActivityById = async (data) => {
    try {
        const activity = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/activities/${data.id}`,
            params: {
                access_token: data.access_token
            }
        });

        activity.data.route = polyline.decode(activity.data.map.summary_polyline)

        return activity.data
    }
    catch(error) {
        return error;
    }
};


const getActivityComments = async ({
    page = 1,
    per_page = 30,
    id = '',
    access_token = ''
} = {}) => {

    try {
        const activityComments = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/activities/${id}/comments`,
            params: {
                page: page,
                per_page: per_page,
                access_token: access_token
            }
        })

        return activityComments.data
    }
    catch(error) {
        return error
    }
}


const getActivityKudos = async ({

    page = 1,
    per_page = 30,
    id = '',
    access_token = ''
    
} = {}) => {

    try {
        const activityKudos  = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/activities/${id}/kudos`,
            params: {
                page: page,
                per_page: per_page,
                access_token: access_token   
            }
        })

        return activityKudos.data;
    }
    catch(error) {
        return error
    }
};


const getActivityLaps = async (data) => {
    try {
        const activityLaps = await axios ({
            method: 'get',
            url: `https://www.strava.com/api/v3/activities/${data.id}/laps`,
            params: {
                access_token: data.access_token
            }
        });

        return activityLaps.data;
    }
    catch (error) {
        return error
    }
}


const getActivityZones = async (data) => {
    
    try {

        const activityZones = await axios({
            get: 'get',
            url: `https://www.strava.com/api/v3/activities/${data.id}/zones`,
            params: {
                access_token: data.access_token
            }
        });

        return activityZones.data;

    }
    catch (error) {
        return error;
    }
}


const createActivity = async ({

    name = '',
    type = 'Walk',
    start_date_local = new Date(),
    elapsed_time = 0,
    description = '',
    distance = 0,
    trainer = 0,
    commute = 0,
    access_token = ''
} = {}) => {

    try {

        const createActivity = await axios({
            method: 'post',
            url: 'https://www.strava.com/api/v3/activities',
            params: {
                name: name,
                type: type,
                start_date_local: start_date_local,
                elapsed_time: elapsed_time,
                description: description,
                distance: distance,
                trainer: trainer,
                commute: commute,
                access_token: access_token
            }
        });
    
        return createActivity.data;

    }
    
    catch (error) {
        return error
    }

};


const getRouteStream = async (data) => {


    try {
        const routeStream = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/routes/${data.id}/streams`,
            params: {
                access_token: data.access_token
            }
        });

        return routeStream.data;
    }

    catch(error) {
        return error;
    }

}

module.exports = { 
                    getAccessTokenUsingCode, 
                    getAccessTokenUsingRefreshToken, 
                    getActivity, 
                    getActivityWithPolyline,
                    getActivityById,
                    getActivityComments,
                    getActivityKudos,
                    getActivityLaps,
                    getActivityZones,
                    createActivity,
                    Club,
                    Athelets,
                    Race,
                    Routes,
                    Segments
                }





data = {
    client_id: 64995,
    client_secret: 'fc04cc87700ad7d230e708f51c0d394052b879be',
    code: '1600ba45130a245f0ae0dd1470a5bcd75f48745d',
};


refreshTokenData = {
    client_id: 64995,
    client_secret: 'fc04cc87700ad7d230e708f51c0d394052b879be',
    refresh_token: '8623bfde1286b7b98527eb3db1a6e31fc64d379a'
}

accessToken = {
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}

activityId = {
    id: '5159730528',
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}

postActivity = {
    name: 'Sample Post',
    elapsed_time: 10,
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}


athletes = {
    id: '83759951',
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}

updateAthletes = {
    //id: '83759951',
    weight: 53,
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}

clubs = {
    id: '917702',
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}

route = {
    id: '11425994',
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}

race = {
    year: 2019,
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}

raceByIds = {
    id: '3990',
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}


segmentsData = {
    bounds: [37.8331119, -122.4834356, 37.8280722, -122.4981393],
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
} 


segmentsData2 = {
    id: 229781,
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}


stream = {
    id: 'a5159730528',
    access_token: 'b3b4178badfc32ee5dcc4797e4d7ea1d7a42854b'
}

// getAccessTokenUsingCode(data).then((response) => console.log(response));
// console.log(accessToken);

// Testing

// getAccessTokenUsingCode(data).then((response) => console.log(response));

// getAccessTokenUsingRefreshToken(refreshTokenData).then((response) => console.log(response));

// getActivity(accessToken).then((response) => console.log(response));

// getActivityWithPolyline(accessToken).then((response) => console.log(response));

// getActivityById(activityId).then((response) => console.log(response));

// getActivityComments(activityId).then((response) => console.log(response));

// getActivityKudos(activityId).then((response) => console.log(response));

// getActivityLaps(activityId).then((response) => console.log(response));

// getActivityZones(activityId).then((response) => console.log(response));

// createActivity(postActivity).then((response) => console.log(response));


// Athelets Testing Data

// getAthletes(accessToken).then((response) => console.log(response));

// getAuthenticatedAtheleteZones(accessToken).then((response) => console.log(response)); // Requeires profile:read_all  Permissions

// getAtheleteStats(athletes).then((response) => console.log(response));

// updateAthelets(updateAthletes).then((response) => console.log(response));  // Requires profile:write  Permissions

// athelets.getAtheleteStats(athletes).then((response) => console.log(response));


// Club Testing Data

// getClubById(clubs).then((response) => console.log(response));

// getClubActivityById(clubs).then((response) => console.log(response));

// getClubAdminsById(clubs).then((response) => console.log(response));

// getClubMembersById(clubs).then((response) => console.log(response));

// getLoggedInAthleteClubs(accessToken).then((response) => console.log(response));

// club.getClubById(clubs).then((response) => console.log(response));



// Route Testing Data

// getGPXRoute(route).then((response) => console.log(response));

// getTCXRoute(route).then((response) => console.log(response));

// getRoutes(route).then((response) => console.log(response));

// routes.getGPXRoute(route).then((response) => console.log(response));

// routes.getRoutes(route).then((response) => console.log(response));

// Running Race Testing Data

// getRunningRaces(accessToken).then((response) => console.log(response));

// getRunningRaceById(raceByIds).then((response) => console.log(response));

// Race.getRunningRaceById(raceByIds).then((response) => console.log(response));


// Segments Testing Data

// exploreSegments(accessToken).then(response => console.log(response));

// getStarredSegments(accessToken).then((response) => console.log(response));

// getSegmentsById(segmentsData2).then((response) => console.log(response));

// Segments.exploreSegments(accessToken).then(response => console.log(response));


// Stram Testing Data
// getRouteStream(stream).then((response) => console.log(response));