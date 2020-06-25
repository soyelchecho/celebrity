import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getRequestAction} from '../redux/requestDucks'


const Request = () => {
    
    const dispatch = useDispatch();

    const requests = useSelector(store => store.requests.array);

    return (
        <div>
            Requets List:
            <button onClick={() => dispatch(getRequestAction())}>Get All Requests</button>
            <ul>
                {
                    requests.map(item =>(
                        <li key={item._id}>{item.message}</li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default Request;