  import React from 'react';
  import { Text, SafeAreaView, Button } from 'react-native';
  // import MainLayout from '../layouts/MainLayout';

  const AboutScreen = ({navigation}) => {
    const currentDate = new Date().toLocaleDateString();

    return (
      <SafeAreaView>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>App Name: To-Do Manager</Text>
        <Text>Developer: Carson Yang</Text>
        <Text>Date: {currentDate}</Text>
        <Button 
          title="Go to Home" 
          onPress={() => navigation.navigate('Home')} 
        />
      </SafeAreaView>
    );
  };

  export default AboutScreen;