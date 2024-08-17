import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

// Import Components
// Import Screens
import Login from './src/Auth Screen/Login/Login';
import SignUp from './src/Auth Screen/SignUp/SignUp';

import DashboardTabs from './src/Component/DashboardTabs/DashboardTabs';
import AuthLandingScreen from './src/Auth Screen/AuthLandingScreen/AuthLandinScreen';
import SearchResultsScreen from './src/Component/SearchResultsScreen/SearchResultsScreen';
const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <PaperProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthLanding" component={AuthLandingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  </PaperProvider>
);

const MainStack = () => (
  <PaperProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardTabs" component={DashboardTabs} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />

      {/* <Stack.Screen name="LocationForm" component={LocationFormScreen} /> */}
      {/* Add more screens here if necessary */}
    </Stack.Navigator>
  </PaperProvider>
);

const App = () => {
  const [loginStatus, setLoginStatus] = useState(true);

  const transitionY = useSharedValue(300);
  const transitionStyle = useAnimatedStyle(() => ({
    transform: [{
      translateY: withTiming(transitionY.value, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      })
    }],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {loginStatus ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
