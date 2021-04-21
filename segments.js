const axios = require('axios');


const exploreSegments = async ({

    bounds = [ 37.8331119, -122.4834356, 37.8280722, -122.4981393],
    activity_type = 'running',
    min_cat = 1,
    max_cat = 1,
    access_token = ''

} = {}) => {

    try {

        const segments = await axios({
            method: 'get',
            url: 'https://www.strava.com/api/v3/segments/explore',
            params: {
                bounds: JSON.stringify(bounds),
                activity_type: activity_type,
                min_cat: min_cat,
                max_cat: max_cat,
                access_token: access_token
            }
        })

        return segments.data;
    }

    catch(error) {
        return error;
    }

};


const getStarredSegments = async ({

    page = 1,
    per_page = 30,
    access_token = '',

} = {}) => {

    try {

        const segments = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/segments/starred`,
            params: {
                page: page,
                per_page: per_page,
                access_token: access_token
            }
        });

        return segments.data;
    }

    catch(error) {
        return error;
    }

}


const getSegmentsById = async (data) => {

    try {

        const segmentsById = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/segments/${data.id}`,
            params: {
                access_token: data.access_token
            }
        });

        return segmentsById.data;
    }
    catch(error) {
        return error;
    }

};


module.exports = { exploreSegments, getStarredSegments, getSegmentsById }