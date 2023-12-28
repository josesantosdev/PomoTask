import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styled } from 'nativewind';
import { Appbar } from 'react-native-paper';

const PomodoroScreen = ({ navigation }) => {
  const [time, setTime] = useState(25 * 60); // Tempo inicial de 25 minutos
  const [isActive, setIsActive] = useState(false);

  const SlyedView = styled(View);
  const StyledText = styled(Text);
  const StyledTouchableOpacity = styled(TouchableOpacity);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // Aqui você pode executar alguma lógica para lidar com a conclusão do pomodoro
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime(25 * 60); // Reseta o timer para 25 minutos
    setIsActive(false);
  };

  return (
    <SlyedView className="flex: 1; alignItems: 'center'; justify-content: 'center';">
      <Appbar.Header
        className="flex flex-col items-start justify-center mt-0 mb-6"
      >
        <StyledText
          className="text-5xl font-bold text-blue-500 ml-7"
        >
          Pododoro
        </StyledText>
      </Appbar.Header>

      <SlyedView className="p-4 mb-4 bg-blue-500 rounded-lg">

        <StyledText className="mb-4 text-4xl font-bold text-white">
          {Math.floor(time / 60).toString().padStart(2, '0')}:
          {(time % 60).toString().padStart(2, '0')}
        </StyledText>
        <StyledTouchableOpacity
          className="px-6 py-3 mr-2 bg-blue-700 rounded-full"
          onPress={toggleTimer}
        >
          <StyledText className="text-white">{isActive ? 'Pausar' : 'Iniciar'}</StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity
          className="px-6 py-3 mr-2 bg-blue-700 rounded-full"
          onPress={resetTimer}
        >
          <StyledText className="text-white">Reiniciar</StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity
          className="px-6 py-3 bg-blue-700 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <StyledText className="text-white">Concluir Pomodoro</StyledText>
        </StyledTouchableOpacity>
      </SlyedView>
    </SlyedView>
  );
};

export default PomodoroScreen;