//Desenvolvido por: João Raposo e Carla Dias

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./src/views/UserList";
import UserForm from "./src/views/UserForm";
import { Button, Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();

export default Comp => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => {
            return {
              title: "Lista de Usuários",
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("UserForm")}
                  type="clear"
                  icon={<Icon name="add" size={25} color="white" />}
                />
              )
            }
          }
          }
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{
            title: "Formulário de Usuários"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#009955"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
}