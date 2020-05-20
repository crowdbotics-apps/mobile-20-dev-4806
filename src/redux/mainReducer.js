import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4355Reducer from '../features/EmailAuth4355/redux/reducers';
import EmailAuth4354Reducer from '../features/EmailAuth4354/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4355: EmailAuth4355Reducer,
EmailAuth4354: EmailAuth4354Reducer,
EmailAuth: EmailAuthReducer,

});