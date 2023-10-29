import { BUY_CAKE } from "./cakeTypes"

//Reduce is a function that accepts state and action as parameter and return the new state
const initaialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initaialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state

    }
}

export default cakeReducer