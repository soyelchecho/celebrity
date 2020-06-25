import axios from 'axios'

// Constants

const initialData = {
    array : []
}

//types
const GET_REQUEST_SUCCESSFUL = "GET_REQUEST_SUCCESSFUL";


// Reducer
export default function requestReducer(state = initialData, action){
    switch (action.type) {
        case GET_REQUEST_SUCCESSFUL:
            return {...state, array: action.payload};
        default:
            return state;
    }
}


// Actions
export const getRequestAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://127.0.0.1:3300/api/requests/')
        dispatch({
            type: GET_REQUEST_SUCCESSFUL,
            payload: res.data.body
        })
    } catch (error) {
        console.log(error);
    }
}