import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4366Reducer from '../features/EmailAuth4366/redux/reducers';
import EmailAuth4355Reducer from '../features/EmailAuth4355/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4366: EmailAuth4366Reducer,
EmailAuth4355: EmailAuth4355Reducer,
EmailAuth: EmailAuthReducer,

});