import { createStore } from "redux";
import taskReducer from "./reducers";

//we get dispatch(), state() {gives the initalState from reducer}
//why use Redux ToolKit
const store=createStore(taskReducer);

export default store;

//Redux Action: An action is an object that tells redux what we want to do. 
//It must have a type property that describes the action