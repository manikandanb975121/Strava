const axios = require('axios');
// const polyline = require('google-polyline');


const getClubById = async (data) => {

    try {

        const getClubs = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/clubs/${data.id}`,
            params: {
                access_token: data.access_token
            }
        });

        return getClubs.data;
    }

    catch (error) {
        return error;
    };

};


const getClubActivityById = async ({

    id = '',
    page = 1,
    per_page = 30,
    access_token = ''

} = {}) => {

    try {

        const clubActivity = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/clubs/${id}/activities`,
            params: {
                page: page,
                per_page: per_page,
                access_token: access_token
            }
        });

        return clubActivity.data;
    }

    catch(error) {
        return error;
    };

};


const getClubAdminsById = async ({

    id = '',
    page = 1,
    per_page = 30,
    access_token = ''

} = {}) => {

    try {

        const clubAdmin = await axios ({
            method: 'get',
            url: `https://www.strava.com/api/v3/clubs/${id}/admins`,
            params: {
                page: page,
                per_page: per_page,
                access_token: access_token
            }
        });

        return clubAdmin.data;

    }

    catch(error) {
        return error;
    }
}


const getClubMembersById = async ({

    id = '',
    page = 1,
    per_page = 30,
    access_token = ''

} = {}) => {

    try {

        const clubMembers = await axios({
            method: 'get',
            url: `https://www.strava.com/api/v3/clubs/${id}/members`,
            params: {
                page: page,
                per_page: per_page,
                access_token: access_token
            }
        });

        return clubMembers.data;
    }

    catch(error) {
        return error;
    }
}


const getLoggedInAthleteClubs = async ({

    page = 1,
    per_page = 30,
    access_token = ''
    
} = {}) => {

    try {

        const clubs = await axios({
            method: 'get',
            url: 'https://www.strava.com/api/v3/athlete/clubs',
            params: {
                page: page,
                per_page: per_page,
                access_token: access_token
            }
        });
        
        return clubs.data;

    }

    catch(error) {
        return error;
    }
}

module.exports = { getClubById, getLoggedInAthleteClubs, getClubMembersById, getClubAdminsById, getClubActivityById }
// export { getAccessTokenUsingCode }
