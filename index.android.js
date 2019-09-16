import {AppRegistry} from 'react-native';
import App from './src/App';

import {setJSExceptionHandler} from 'react-native-exception-handler';
import {rollbar} from './src/utils/rollbar';

setJSExceptionHandler((error, isFatal) => {
  if (isFatal) {
    rollbar.critical(error);
  } else {
    rollbar.error(error);
  }

  Alert.alert(
    'Unexpected Error',
    'Whoops! An unexpected error occurred. We reported this to our team. Please try restarting the app.',
    [{text: 'OK'}]
  );
});

console.disableYellowBox = true;
AppRegistry.registerComponent('wild5', () => App);
