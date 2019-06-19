import axios from 'axios';

const FETCH_PROPERTY = 'FETCH_PROPERTY';
const SET_ANIMATION = 'SET_ANIMATION';
const SET_LOADING = 'SET_LOADING';

const API_ETUOVI_URL = 'https://3apfvpgw8k.execute-api.eu-west-1.amazonaws.com/prod/randomannouncements';

const buildImageUri = (url, size = 250) => {
    if (url === undefined) return '';

    return 'https://' + url.replace('{imageParameters}', size.toString() + 'x');
}

export const fetchRandomProperty = () => async dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: true
    });

    await axios.get(API_ETUOVI_URL)
    .then(res => {
        const result = res.data.hits.hits[0];

        const property = {
            id: result._source.id,
            friendlyId: result._source.friendlyId,
            picture: buildImageUri(result._source.mainImageUri, 512),
            price: result._source.searchPrice,
            propertyType: result._source.propertyType,
            propertySubtype: result._source.propertySubtype,
            districtAndCity: result._source.districtAndCity,
            streetAddress: result._source.streetAddress
        };

        dispatch({
            type: FETCH_PROPERTY,
            payload: property
        });

        dispatch({
            type: SET_ANIMATION,
            payload: 'fadeIn'
        });

        dispatch({
            type: SET_LOADING,
            payload: false
        });
    })
    .catch(err => {
        alert("Error loading data! Find more info info in the console.");
        
        console.log(err);
    });
}

export const swipeLeft = () => {
    return {
        type: SET_ANIMATION,
        payload: 'hate'
    }
}

export const swipeRight = () => {
    return {
        type: SET_ANIMATION,
        payload: 'love'
    }
}