import React, { useEffect, useState } from 'react';
import { styled } from 'nativewind'
import { SafeAreaView } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import moment from 'moment';

const CreateTaskScreen = () => {

  const StyledSafeAreaView = styled(SafeAreaView);

  const [currentDate, setCurrentDate] = useState('');

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
        Hoje!
      </Text>
      <Text
      className="text-lg italic ml-7"
      >
      { currentDate }
      </Text>
    </Appbar.Header>
  </StyledSafeAreaView>  
  );
};

export default CreateTaskScreen;
