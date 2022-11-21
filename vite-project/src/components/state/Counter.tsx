import { useReducer } from "react";

const initialState = { count:0 };

type CouterSate = {
    count: number;
}
type UpdateAction = {
    type: 'increment' | 'decrement' | 'reset';
    payload: number;
}
type ResetAction = {
    type: 'reset'
}
type CouterAction = UpdateAction | ResetAction;

function reducer( state:CouterSate, action:CouterAction ) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload};
        case 'decrement':
            return {count: state.count - action.payload};
        case 'reset':
            return initialState
        default: return state;
    }
}

export const Counter = () => {
    const [ state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset', payload: 0})}>Reset</button>
        </div>
    )
}