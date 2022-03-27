import React from 'react';
import Pemesanan from './Comp/Pemesanan';
import Rincian from './Comp/Rincian';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Pembatalan from './Comp/Pembatalan';
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Pemesanan"}
      >
        <Stack.Screen
          name="Pemesanan"
          component={Pemesanan}
          options={{
            title: "Pemesanan",
          }}
        />
        <Stack.Screen
          name="Konfirmasi"
          component={Rincian}
        />
        <Stack.Screen
          name="Batal"
          component={Pembatalan}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
