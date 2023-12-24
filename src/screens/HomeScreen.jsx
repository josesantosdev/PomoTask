import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TaskService } from '../services/TaskService';
import { useIsFocused } from "@react-navigation/native";
import { styled } from 'nativewind'
import { Appbar } from 'react-native-paper';



const HomeScreen = () => {
  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledTouchableOpacity = styled(TouchableOpacity);

  const [tasks, setTasks] = useState([]);
  const isFocused = useIsFocused();

  //get tasks
  const fetchTasks = async () => {
    try {
      const fetchedTasks = await TaskService.getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Erro ao buscar as tarefas:', error);
    }
  };

  //load tasks
  useEffect(() => {
    if (isFocused)
      fetchTasks();
  }, [isFocused]);


  return (
    <StyledView>
      <Appbar.Header
        className="flex flex-col items-start justify-center mt-0 mb-6"
      >
        <StyledText
          className="text-5xl font-bold text-blue-500 ml-7"
        >
          Suas Tarefas
        </StyledText>
      </Appbar.Header>
      <StyledView
        className='flex items-center justify-center ml-2'
      >
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (

            <StyledView
              className='flex flex-row items-center justify-around w-11/12 h-24 m-2 bg-white columns-2 rounded-2xl'
            >
              <StyledView 
              className='p-5'
              >
                <StyledText
                  className='w-11/12 mb-2 text-base'
                >
                  {item.task}
                </StyledText>
                <StyledText
                  className='mb-2 text-base'
                >
                  Dead Line:{new Date(item.deadLine).toLocaleString()}
                </StyledText>
              </StyledView>

              <StyledTouchableOpacity
                className='items-center justify-center'
                onPress={}

              >
                <StyledText
                  className='flex text-3xl text-green-400'
                >
                  Go!
                </StyledText>
              </StyledTouchableOpacity>
            </StyledView>
          )}
        />
      </StyledView>
    </StyledView>
  );
};

export default HomeScreen;
