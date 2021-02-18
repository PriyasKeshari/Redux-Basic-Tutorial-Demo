import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Routes from "../src/route/route";
import { Provider } from "react-redux";
import store from "../src/redux/store/store";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              {Routes.map(({ path, exact, component: Component, ...rest }) => (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  render={(props) => <Component {...props} {...rest} />}
                />
              ))}
            </Switch>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
