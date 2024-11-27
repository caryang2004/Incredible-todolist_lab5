

import React, {useState} from 'react';
import { Button, Text, SafeAreaView } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {

    // Step lab3.A.3-4: Define the state variable `tasks` with useState and initialize it with hard-coded tasks
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    const addTask = (task) => {
        // Implement the logic to add a new task
        setTasks([...tasks, task]);
    };

    return (
      
      // <MainLayout>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>HomeScreen</Text>

        <ToDoList tasks={tasks}/>
        {/* <ToDoForm addTask={() => {}} /> */}
        <ToDoForm addTask={addTask} tasks={tasks} />  
        {/* Passing addTask function as a prop to ToDoForm */}

        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
      // </MainLayout>
      
    );
  };
  
  export default HomeScreen;

  