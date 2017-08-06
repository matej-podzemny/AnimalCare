import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBiwGXB5Lo0Zk6z8txXS9jY9hNV4pWyNbc",
      authDomain: "manager-f5b49.firebaseapp.com",
      databaseURL: "https://manager-f5b49.firebaseio.com",
      projectId: "manager-f5b49",
      storageBucket: "manager-f5b49.appspot.com",
      messagingSenderId: "795339984504"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
