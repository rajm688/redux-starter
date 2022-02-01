import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer) // higher order function since it takes a function  as a argument
export default store