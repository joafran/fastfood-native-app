import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NewOrder from './screens/NewOrder'
import Menu from './screens/Menu'
import MealDetail from './screens/MealDetail'
import MealForm from './screens/MealForm'
import OrderSummary from './screens/OrderSummary'
import OrderProgress from './screens/OrderProgress'

import FirebaseState from './contexts/firebase/firebaseState.js';
import OrderState from './contexts/orders/orderState';

const Stack = createStackNavigator();

const App = () => {
  return ( 
    <>
      <FirebaseState>
        <OrderState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#FFDA00',
                  
                },
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerTitleAlign: 'center'
              }}
              >
              <Stack.Screen 
                name="NewOrder"
                component={NewOrder}
                options={{
                  title: "New Order"
                }}
                />
              <Stack.Screen 
                name="Menu"
                component={Menu}
                options={{
                  title: "Menu"
                }}
                />
              <Stack.Screen 
                name="OrderSummary"
                component={OrderSummary}
                options={{
                  title: "Order Summary"
                }}
                />
              <Stack.Screen 
                name="MealDetail"
                component={MealDetail}
                options={{
                  title: "Meal Detail"
                }}
                />
              <Stack.Screen 
                name="MealForm"
                component={MealForm}
                options={{
                  title: "Meal Order"
                }}
                />
              <Stack.Screen 
                name="OrderProgress"
                component={OrderProgress}
                options={{
                  title: "Order Progress"
                }}
                />
            </Stack.Navigator>
          </NavigationContainer>
        </OrderState>
      </FirebaseState>    
    </>
   );
}
 
export default App;