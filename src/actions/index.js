import axios from 'axios';

const FETCH_USER = 'FETCH_USER';
const SET_ANIMATION = 'SET_ANIMATION';
const SET_LOADING = 'SET_LOADING';

export const fetchRandomUser = () => async dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: true
    });

    await axios.get("https://randomuser.me/api/")
    .then(res => {
        const result = res.data.results[0];

        const profile = {
            picture: {
                large: result.picture.large
            },
            name: { first: result.name.first },
            dob: { age: result.dob.age }
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