import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from './wek4-hw/src/navigation/index';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>

  );
}

export default App;