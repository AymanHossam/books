import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './styles/colors';
import { BookPage, HomePage } from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Stack = createStackNavigator();

const Books = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ title: 'Books' }}
            />
            <Stack.Screen
              name="Book"
              component={BookPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Books;
