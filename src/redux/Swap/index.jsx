import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { swapAction } from './SwapSlice';

function Swap() {

    const result = useSelector(state => state.swap);
    const dispatch = useDispatch();

    const hanldeClick = () => {
        dispatch(swapAction())
    }

    return (
        <div>
            <p>{result === 0 ? 'Swap1' : 'Swap2'}</p>
            <button onClick={hanldeClick}>Click Swap</button>
        </div>
    );
}

export default Swap;