const axios = require('axios');
const polyline = require('google-polyline');

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
        
        console.log('entered from strava');
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
        
        console.log('entered from strava refresh Token');
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

getActivityWithPolyline = async (data) => {
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


module.exports = { getAccessTokenUsingCode, getAccessTokenUsingRefreshToken, getActivity, getActivityWithPolyline }
// export { getAccessTokenUsingCode }
