import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4355Saga from '../features/EmailAuth4355/redux/sagas';
import EmailAuth4354Saga from '../features/EmailAuth4354/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth4355Saga,
EmailAuth4354Saga,
EmailAuthSaga,
    
  ]);
}