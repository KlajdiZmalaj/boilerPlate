import { put, call, select } from "redux-saga/effects";
import { notification } from "antd";
import MainActions from "../models/main";
import * as MainReq from "services/main";

export function* get({ params }) {
  const response = yield call(MainReq.get, params);
  if (response) {
    yield put(MainActions.set(params.testparam));

    notification["success"]({
      description: "fake data set",
      placement: window.innerWidth <= 1024 ? "topRight" : "bottomRight",
      duration: 4,
    });
  }
}
