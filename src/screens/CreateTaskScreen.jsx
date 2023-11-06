import React, { useEffect, useState } from 'react';
import { styled } from 'nativewind'
import { 
  SafeAreaView, 
  View, 
  TouchableOpacity, 
  Text, 
  Alert
} from 'react-native';
import { Appbar } from 'react-native-paper';
import TaskForm from '../components/TaskForm';
import Task from '../models/Task';
import { TaskService } from '../services/TaskService';

const CreateTaskScreen = () => {

  const StyledSafeAreaView = styled(SafeAreaView);
  const StyledView = styled(View);
  const StyledTouchableOpacity = styled(TouchableOpacity);
  const StyledText = styled(Text);


  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString('pt-BR'));

  useEffect(() => {

    const date = new Date().toLocaleString('pt-BR').substr(0, 10);
    setCurrentDate(date);
  });

  const [formData, setFormData] = useState({
    task: '',
    deadLine: new Date(),
  });

  const { task, description, deadLine } = formData;

  const setTask = value => setFormData(prevState => ({ ...prevState, task: value }));
  const setDeadLine = value => setFormData(prevState => ({ ...prevState, deadLine: value }));

  const handleTaskCreation = async () => {

    const newTask = new Task(task, description, deadLine);

    try {
      await TaskService.addTask(newTask);
      Alert.alert('Sucesso', 'Tarefa criada com sucesso!');
    } catch (e) {
      console.error(e.message);
      Alert.alert('Erro', 'Falha ao criar a tarefa. Por favor, tente novamente.');
    }

    setFormData({
      task: '',
      deadLine: new Date(),
    });

  };


  return (
    <StyledSafeAreaView>
      <Appbar.Header
        className="flex flex-col items-start justify-center mt-0 mb-6"
      >
        <Text
          className="text-5xl font-bold text-blue-500 ml-7"
        >
          Hoje.
        </Text>
        <Text
          className="text-lg italic ml-7"
        >
          {currentDate}
        </Text>
      </Appbar.Header>
      <StyledView
        className='flex items-center'
      >
        <StyledView
          className='flex items-center mt-5 bg-white rounded-3xl'
        >
          <TaskForm
            task={formData.task}
            deadLine={formData.deadLine}
            setTask={setTask}
            setDeadLine={setDeadLine}
          />
          <StyledTouchableOpacity
            className='px-20 py-3 mb-5 bg-blue-600 rounded-full'
            onPress={handleTaskCreation}
          >
            <StyledText
              className='text-2xl text-white'
            >
              Cadastrar Tarefa
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledSafeAreaView>
  );
};

export default CreateTaskScreen;
