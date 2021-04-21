const axios = require('axios');


const getGPXRoute = async (data) => {

    try {

        const GPXRoute = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/routes/${data.id}/export_gpx`,
            params: {
                access_token: data.access_token
            }
        });

        return GPXRoute.data;
    }

    catch(error) {
        return error;
    }

}


const getTCXRoute = async (data) => {

    try {

        const TCXRoute = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/routes/${data.id}/export_tcx`,
            params: {
                access_token: data.access_token
            }
        });

        return TCXRoute.data;
    }

    catch(error) {
        return error;
    }
}



const getRoutes = async (data) => {

    try {

        const routes = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/routes/${data.id}`,
            params: {
                access_token: data.access_token
            }
        });

        return routes.data;
    }

    catch(error) {
        return error;
    }
}


module.exports = { getGPXRoute, getTCXRoute, getRoutes}