const { createStore } = require('redux');

const initialState = {
    count: 0
}

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === 'UP') {
        newState.count+=action.value;
    }

    if (action.type === 'DOWN') {
        newState.count-=action.value;
    }
    return newState;
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log('state changed', JSON.stringify(store.getState()))
})

store.dispatch({type: 'UP', value: 1});
store.dispatch({type: 'DOWN', value: 1});
store.dispatch({type: 'DOWN', value: 1});
store.dispatch({type: 'DOWN', value: 1});
store.dispatch({type: 'UP', value: 1});