import {AppRegistry, Alert} from 'react-native';
import App from './src/App';
import {setJSExceptionHandler} from 'react-native-exception-handler';
import Rollbar from 'rollbar-react-native';
import {rollbar} from './src/utils/rollbar';

rollbar.rollbar.configure({
  payload: {
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: '1.0-alpha.3.ios',
        environment: 'production',
      },
    },
  },
});

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
