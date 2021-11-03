import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";

// import store from "./store";
import Select from "./components/select";

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Select} />
      </Switch>
    </Router>
    // </Provider>
  );
}

export default App;
