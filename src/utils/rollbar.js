import {Client, Configuration} from 'rollbar-react-native';
import Config from 'react-native-config';

export const rollbar = new Client(
  new Configuration(Config.ROLLBAR_CLIENT_ITEM, {
    enabled: !__DEV__,
  })
);
