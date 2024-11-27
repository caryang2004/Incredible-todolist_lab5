
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';


function ToDoForm({addTask, tasks}){
  const [taskText, setTaskText] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle adding a new task
  const handleAddTask = () => {
    // console.log('taskText', taskText); // Log the value of taskText
    
    if (taskText.trim() === '') {
      // console.log('empty input');
      setMessage('Please enter a valid task!'); // Set message if input is empty
      return;
    }

    // Check for duplicate tasks
    if (tasks.includes(taskText)) {
      // console.log('duplicate input');
      setMessage('Task already exists!'); // Set message if task is duplicate
      setTaskText(''); // Clear input field if task is duplicate
      return;
    }

    addTask(taskText); // Add the task to the list
    setTaskText(''); // Clear the input field
    setMessage(''); // Clear any previous messages
  };

  return (
    <View style={styles.form}>
        {message ? <Text style={styles.message}>{message}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add Task" onPress={handleAddTask}  />
    </View>
  );
};

const styles = StyleSheet.create({
    
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
      backgroundColor: '#f9f9f9',
      padding: 10,
      borderRadius: 8, // Rounded corners for the form
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      elevation: 3, // Add shadow effect for elevation
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5, // Rounded corners for the input
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
      fontSize: 16,
    },
    message: {
      color: 'red',
      marginRight: 20,
    },
});

export default ToDoForm;