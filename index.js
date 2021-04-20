// const axios = require('axios');
// const strava = require('./strava');

// const getRepos = async ({

//     username = 'manikandanb975121',
//     page = 1,
//     per_page = 30

// } = {}) => {
//     try {
//         const repos = await axios.get(
//             `https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`
//         );
        
//         return repos.data
//             .map((repo) => {
//                 return {
//                     name: repo.name,
//                     url: repo.html_url,
//                     description: repo.description,
//                     stars: repo.stargazers_count
//                 };
//             })
//             .sort((first, second) => second.start - first.start ); 
//     } catch (error) {
//         return []
//     }
// };


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



// //getRepos({username: 'harivignesh261998'}).then((repositories) => console.log(repositories));

data = {
    client_id: 64995,
    client_secret: 'fc04cc87700ad7d230e708f51c0d394052b879be',
    code: '9f245fc5e69e4986129f294f2c88c137b5d5f4bd',
};


refreshTokenData = {
    client_id: 64995,
    client_secret: 'fc04cc87700ad7d230e708f51c0d394052b879be',
    refresh_token: 'd906fd44eaec5bb9405412760b2de6c1fa9dac5f'
}

accessToken = {
    access_token: 'f2bc0717cd52ccabab8a73f9e9bb9754d1556d86'
}

// getAccessTokenUsingCode(data).then((response) => console.log(response));
// console.log(accessToken);

// Testing

// strava.getAccessTokenUsingCode(data).then((response) => console.log(response));

// strava.getAccessTokenUsingRefreshToken(refreshTokenData).then((response) => console.log(response));

// strava.getActivity(accessToken).then((response) => console.log(response));

// strava.getActivityWithPolyline(accessToken).then((response) => console.log(response));