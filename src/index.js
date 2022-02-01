import store from "./store";
import { bugAdded, bugRemoved } from "./actionCreators";
// console.log(store) -> store is aan obj with the following properties

// ________________________________________________

// Object
// @@observable: ƒ observable()
// dispatch: ƒ dispatch(action) -> method for despatching actions
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener) -> method for subscribing to store (when we subscribe whenn ever the state of the store changes you will get notified) -> used by ui layer
// [[Prototype]]: Object
//we only have getstate and there is no setstate os if we need to change the state of the store we  need to dispatch an action

// ________________________________________________

// subscribing to store
const unsubscribe = store.subscribe(()=>{ //when user navigates to another page the ui from previous page will no  longer be visible in order to prevent memory leakes it is importent to unsubscribe
    console.log("store changed",store.getState())
})

// ________________________________________________

// adding bug
store.dispatch(bugAdded("bug find in line 143")) // action creator
unsubscribe()
// ________________________________________________

// removing bug
store.dispatch(bugRemoved(1))// action creator

console.log(store.getState())