import { useAppSelector, useAppDispatch } from '../app/hooks';
import { increment, getValue, incrementWithNumber } from "../features/moviesSlice";
import { useState } from 'react';

function Header() {
    const dispatch = useAppDispatch();
    const count = useAppSelector(getValue);
    const [incrementValue, setIncrementValue] = useState<any>(1);
    
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <h2>{count}</h2>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >+</button>
            <input 
                style={{color:"red"}}
                type="number" 
                value={incrementValue}
                onChange={(e) => setIncrementValue(e.target.value)}
            />
            <button
                onClick={() => dispatch(incrementWithNumber(incrementValue))}
            >
                Add +
            </button>

        </div>
    );
}

export default Header;