import React from 'react';
import { View, StyleSheet, Text, ScrollView  } from 'react-native';

const Header = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>My To Do List App</Text>
    </View>
  );

const Footer = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Carson Yang</Text>
    </View>
  );
  
const MainLayout = ({ children }) => {
  console.log("MainLayout Rendered");
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
      {children}
    </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
    },
    header: {
      flex: 0,
      padding: 10,
      backgroundColor: '#007bff',
    },
    headerText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    footer: {
      flex: 0,
      padding: 10,
      backgroundColor: '#343a40',
    },
    footerText: {
      color: '#fff',
      textAlign: 'center',
    },
  });

export default MainLayout;