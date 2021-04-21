const axios = require('axios');


const getRunningRaces = async ({

    year = 2020,
    access_token = ''

} = {}) => {

    try {

        const runningRaces = await axios({
            method: 'get',
            url: 'https://www.strava.com/api/v3/running_races',
            params: {
                year: year,
                access_token: access_token
            }
        });


        return runningRaces.data;

    }

    catch(error) {
        return error;
    }

}


const getRunningRaceById = async (data) => {

    try {

        const raceById = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/running_races/${data.id}`,
            params: {
                access_token: data.access_token
            }
        });

        return raceById.data;
    }

    catch(error) {
        return error;
    }

}


module.exports = { getRunningRaces, getRunningRaceById }