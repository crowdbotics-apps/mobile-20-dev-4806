import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4366Saga from '../features/EmailAuth4366/redux/sagas';
import EmailAuth4355Saga from '../features/EmailAuth4355/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth4366Saga,
EmailAuth4355Saga,
EmailAuthSaga,
    
  ]);
}