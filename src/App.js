import React,{Component} from "react";
import Counter from './Components/Counter/Counter'
import { createStore } from "redux";
import { Provider } from "react-redux";

import {  Route } from 'react-router-dom'
import Form from "./Components/Form/Form";
import Navigation from './Components/Navigation/Navigation'
import Navigation2 from './Components/Navigation/Navigation2'
import Table from './Components/Table/Table'

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}


const store = createStore(reducer);


class App extends Component {
  render() {
  return (
    
    <Provider store={store}>
  
       <Route exact path="/" component={Navigation} />
        <Route exact path="/" component={Counter } />

           {/* <Provider store={store}>
            <Counter />
           </Provider> */}
        <Route exact path="/form" component={Navigation2} />
        <Route exact path="/form" component={Form}  />
        <Route exact path="/form" component={Table} />
     
        
</Provider>

   
  );
}
}

export default App;
