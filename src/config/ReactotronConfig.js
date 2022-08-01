import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  let scriptHostname;
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];

  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'Pokedex',
      host: scriptHostname,
    })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(networking())
    //.useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
} else {
  //For logs don't crash, in production build
  console.tron = {
    log: () => {},
  };
}
