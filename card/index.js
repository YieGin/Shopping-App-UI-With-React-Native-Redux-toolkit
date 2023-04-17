import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './components/Redux/store';
import {name as appName} from './app.json';
import Navigation from './components/Navigation';
import App from './App';

const Root = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
