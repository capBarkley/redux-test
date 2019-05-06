const { createStore } = require('redux');

//Initializing state

const initialState = {
    count: 0
}

//Creating reducer

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

//Store actually stores state and reducer

const store = createStore(myReducer);

//Listening to the state changing

store.subscribe(() => {
    console.log('state changed', JSON.stringify(store.getState()))
})

//Doing some sort of actions

store.dispatch({type: 'UP', value: 1});
store.dispatch({type: 'DOWN', value: 1});
store.dispatch({type: 'DOWN', value: 1});
store.dispatch({type: 'DOWN', value: 1});
store.dispatch({type: 'UP', value: 1});