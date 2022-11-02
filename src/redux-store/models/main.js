import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  get: ["params"],
  set: ["stateKey"],
});

export const AuthTypes = Types;
export default Creators;

const INITIAL_STATE = {
  stateKey: "123",
};
export const reducer = createReducer(INITIAL_STATE, {
  SET: (state, { stateKey }) => ({ ...state, stateKey }),
});
