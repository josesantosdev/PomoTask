import React from 'react';
import { Text, TouchableOpacity, Alert, View } from 'react-native';
import { styled } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AdminScreen = () => {
  const StyledTouchableOpacity = styled(TouchableOpacity);
  const StyledText = styled(Text);
  const StyledView = styled(View);

  const handlerClearAllData = () => {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => Alert.alert('Tarefas apagadas com sucesso!'));
  }

  return (
    <StyledView
      className='flex items-center justify-center'
    >
      <StyledTouchableOpacity
        className='p-4 bg-blue-500 rounded-lg'
        onPress={handlerClearAllData}
      >
        <StyledText
          className='text-xl text-white'
        >
          Limpar todos os dados da aplicação
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default AdminScreen;