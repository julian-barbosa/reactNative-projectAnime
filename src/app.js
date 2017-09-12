import React from 'react';
import Registry from './registry';
import MainView from './mainView';
import {
    Platform
  } from 'react-native';

import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox  
  } from 'react-native-router-flux';

  const isAndroid = Platform.OS === 'android'; 
  const App = () => (   
      
    <Router>
      <Stack key="root">
        <Scene key="login" component={Registry} hideNavBar={true} />  
        <Scene key="mainView" component={MainView} hideNavBar={isAndroid}/>         
      </Stack>
    </Router>
  );

  export default App;