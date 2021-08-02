import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './CouterSlice';

function Counter() {    
    const couter = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increase());
    }

    const handleDecrease = () => {
        dispatch(decrease());
    }

    return (
        <div>
            <p>Couter Feature: {couter}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
}

export default Counter;