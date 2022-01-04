const Actions = {
  LOGIN: "SET_USER_STATE",
  SET_TOKEN: "SET_AUTH_TOKEN",
  LOGOUT: "SET_USER_LOGOUT",
};

const Increase = {
  type: "Increase",
  payload: 5
}
const Decrease = {
  type: "Decrease"
}
export default Actions;
export { Increase, Decrease };