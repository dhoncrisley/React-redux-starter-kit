import { combineReducers } from 'redux';
const initialState = {
  something: 'else'
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOMETHING_ELSE': 
    console.log(action)
    return { ...state, something: 'something else' }
    
    default: return state;
  }
}
const reducers = combineReducers({
  something: rootReducer
})
export default reducers;
