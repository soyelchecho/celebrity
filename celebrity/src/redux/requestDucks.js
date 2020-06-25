import axios from 'axios'

// Constants

const initialData = {
    array : [],
    page : 0,
    page_size : 0
}

//types
const GET_REQUEST_SUCCESSFUL = "GET_REQUEST_SUCCESSFUL";
const GET_NEXT_REQUEST_SUCCESSFUL = "GET_NEXT_REQUEST_SUCCESSFUL";



// Reducer
export default function requestReducer(state = initialData, action){
    switch (action.type) {
        case GET_REQUEST_SUCCESSFUL:
            return {...state, array: action.payload};
        case GET_NEXT_REQUEST_SUCCESSFUL:
            return{...state,array: action.payload.array,page:action.payload.page};
        default:
            return state;
    }
}


// Actions
export const getRequestAction = () => async (dispatch, getState) => {
    const {page, page_size} = getState().requests;
    try {
        const res = await axios.get(`http://127.0.0.1:3300/api/requests?page=${page}&page_size=${page_size}`);
        dispatch({
            type: GET_REQUEST_SUCCESSFUL,
            payload: res.data.body
        })
    } catch (error) {
        console.log(error);
    }
}

export const nextRequestAction = () => async (dispatch, getState) => {
    const {page} = getState().requests;
    const nextPage = (page + 1) % 10;
    const page_size = 2;
    try {
        const response = await axios.get(`http://127.0.0.1:3300/api/requests?page=${nextPage}&page_size=${page_size}`);
        dispatch({
            type: GET_NEXT_REQUEST_SUCCESSFUL,
            payload: {
                array: response.data.body,
                page: nextPage
            }
        })
    } catch (error) {
        console.log(error);
    }
}