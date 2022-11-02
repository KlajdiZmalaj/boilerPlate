import { takeLatest, all } from "redux-saga/effects";

import * as MainGenerators from "./MainSagas";

export default function* rootSaga() {
  yield all([
    // AUTH
    // ...[],
    // MAIN
    ...[takeLatest("GET", MainGenerators.get)],
  ]);
}
