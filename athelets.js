const axios = require('axios');



const getAthletes = async (data) => {

    try {

        const athletes = await axios({
            method: 'get',
            url: 'https://www.strava.com/api/v3/athlete',
            params: {
                access_token: data.access_token
            }
        })

        return athletes.data;
    }

    catch (error) {
        return error;
    }

};


const getAuthenticatedAtheleteZones = async (data) => {

    try {

        const atheleteZones = await axios({
            method: 'get',
            url: 'https://www.strava.com/api/v3/athlete/zones',
            params: {
                access_token: data.access_token
            }
        })

        return atheleteZones.data;
    }

    catch (error) {
        return error;
    }

};


const getAtheleteStats = async ({

    id = id,
    access_token = access_token 

} = {}) => {

    try {

        const atheleteStats = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/athletes/${id}/stats`,
            params: {
                access_token: access_token
            }
        });

        return atheleteStats.data;
    }

    catch(error) {
        return error;
    }

};


const updateAthelets = async ({

    weight: weight,
    access_token: access_token

} = {}) => {

    try {

        const updateAthelest = await axios({
            method: 'put',
            url: 'https://www.strava.com/api/v3/athlete',
            params: {
                weight: weight,
                access_token: access_token
            }
        })

        return updateAthelest.data;
    }

    catch (error) {
        return error;
    };

};


module.exports = { getAthletes, getAuthenticatedAtheleteZones, getAtheleteStats, updateAthelets}