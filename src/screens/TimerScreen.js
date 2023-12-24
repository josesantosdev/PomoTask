import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const PomodoroScreen = ({ route, navigation }) => {
  const { task } = route.params;
  const [time, setTime] = useState(25 * 60); // Tempo inicial de 25 minutos
  const [isActive, setIsActive] = useState(false);

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{task}</Text>
      <Text>
        {Math.floor(time / 60).toString().padStart(2, '0')}:
        {(time % 60).toString().padStart(2, '0')}
      </Text>
      <Button title={isActive ? 'Pausar' : 'Iniciar'} onPress={toggleTimer} />
      <Button title="Reiniciar" onPress={resetTimer} />
      <Button title="Concluir Pomodoro" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default PomodoroScreen;
