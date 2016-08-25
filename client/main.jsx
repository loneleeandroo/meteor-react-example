import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import rootReducer from '../imports/redux';
import { createStore } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../imports/ui/components/App';

let store = createStore(rootReducer);

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
);

Meteor.startup(() => {
  render(<Root />, document.getElementById('root'));
});
