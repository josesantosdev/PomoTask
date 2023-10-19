import React, { useEffect, useState } from 'react';
import { styled } from 'nativewind'
import { SafeAreaView, View, TextInput } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateTaskScreen = () => {

  const StyledSafeAreaView = styled(SafeAreaView);
  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledDateTimePicker = styled(DateTimePicker);

  const [currentDate, setCurrentDate] = useState('');
  const [task ,setTask] = useState('');
  const [description, setDescription] = useState('');
  const [hour, setHour] = useState('');

  useEffect(() => {
    setInterval(
      () => {
        let date = moment().utcOffset('-03:00').locale('pt').format('LL');
        setCurrentDate(date);
      }
    )
  });

  return (
  <StyledSafeAreaView>
    <Appbar.Header 
    className="flex flex-col items-start justify-center mt-0 mb-6">
      <Text  
      className="text-5xl font-bold text-blue-500 ml-7"
      >
        Hoje.
      </Text>
      <Text
      className="text-lg italic ml-7"
      >
      { currentDate }
      </Text>
    </Appbar.Header>
  <StyledView 
  className='flex items-center justify-center p-6 bg'
  >  
    <StyledView
      className='flex items-center justify-center w-11/12 py-6 bg-blue-600 rounded-t-3xl'
      >
      <StyledText
      className="w-auto text-3xl font-bold text-white"
      >
      Criar nova Tarefa.
      </StyledText>

    </StyledView>
    <StyledView
    className='flex items-center justify-center w-11/12 bg-white'
    >
      <TextInput
      placeholder='Título da tarefa'
      onEndEditing={setTask}
      className="w-2/3 p-3 border-b-2 border-gray-500 focus:border-black"
      >
      </TextInput>
      <TextInput
      placeholder='Descrição'
      onEndEditing={setDescription}
      className="w-2/3 p-3 border-b-2 border-gray-500 focus:border-black"
      >
      </TextInput>
    </StyledView>
    <StyledView
      className="flex items-center justify-center w-11/12 text-3xl bg-white"
      >
        <StyledDateTimePicker 
          mode="clock" 
          value={new Date()} 
          onChange={setHour}
          display='spinner'
          className='w-11/12'
          />

      </StyledView>

  </StyledView>
  </StyledSafeAreaView>  
  );
};

export default CreateTaskScreen;
