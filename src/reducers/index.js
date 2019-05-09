const initialState = {
    profile: null,
    loading: true,
    animation: ''
};
  
const reducer = (state = initialState, action) => {
    const payload = action.payload;

    switch(action.type) {
        case 'FETCH_USER':
          return {
            ...state,
            profile: payload
          };
        
        case 'SET_ANIMATION':
          return {
            ...state,
            animation: payload
          }
        
        case 'SET_LOADING':
          return {
            ...state,
            loading: payload
          }
        
        default:
          return state;
      }
}

export default reducer;