import axios from 'axios';

const FETCH_USER = 'FETCH_USER';
const SET_ANIMATION = 'SET_ANIMATION';
const SET_LOADING = 'SET_LOADING';

export const fetchRandomUser = () => async dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: true
    });

    await axios.get("https://uifaces.co/api?random&limit=1&from_age=18&to_age=40&emotion[]=happiness", {headers: {'Cache-Control': 'no-cache', 'X-API-KEY': '__YOUR_API_KEY__'}})
    .then(res => {
        const result = res.data[0];

        const profile = {
            picture: {
                large: result.photo
            },
            name: { first: result.name.split(" ")[0] },
            dob: { age: Math.round(20 + (20 * Math.random())) },
            position: result.position
        };

        dispatch({
            type: FETCH_USER,
            payload: profile
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