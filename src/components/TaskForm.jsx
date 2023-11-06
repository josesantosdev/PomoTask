
import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'
import { styled } from 'nativewind'


const StyledText = styled(Text);
const StyledView = styled(View);

const TaskForm = ({
  task,
  deadLine,
  setTask,
  setDeadLine,
}) => {

  const [taskText, setTaskText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');

  const handleTaskText = () => {
    setTask(taskText);
    ;
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StyledView
        className='flex'
      >
        <StyledView
          className='flex items-start justify-center py-6 pl-5 bg-blue-600 rounded-t-3xl'
        >
          <StyledView>
            <StyledText
              className="w-full text-3xl font-bold text-white "
            >
              Criar nova Tarefa.

            </StyledText>
          </StyledView>
        </StyledView>

        <StyledView
          className='flex items-center justify-center bg-white'
        >

          <TextInput
            placeholder='Título da tarefa'
            onChangeText={(text) => setTaskText(text)}
            onEndEditing={handleTaskText}
            defaultValue={task}
            maxLength={40}
            className="w-11/12 py-4 mb-5 text-lg border-b-2 border-gray-500 focus:border-black"
          >
          </TextInput>

        </StyledView>
        <StyledView
          className="flex items-start justify-center w-11/12 text-3xl bg-white"
        >
          <StyledText
            className="w-full pl-4 text-base text-black "
          >
            Prazo para conclusão:
          </StyledText>
          <DateTimePicker
            mode="datetime"
            onChange={(event, date) => {
              const d = new Date(date);
              setDeadLine(d)
            }}
            value={deadLine}
            display='spinner'
            locale="pt-BR"

          />

        </StyledView>
      </StyledView >
    </KeyboardAvoidingView>
  )
}

export default TaskForm;