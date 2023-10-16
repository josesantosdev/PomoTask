import React from 'react';
import { SafeAreaView } from 'react-native';
import { styled } from 'nativewind';
import { Text } from 'react-native';
import { Appbar } from 'react-native-paper';


const StyledAppbar = styled(Text)

const CreateTaskScreen = () => {
  return (
  <SafeAreaView>
    <Appbar.Header>
      <Text  
      className=" font-bold ml-7 text-5xl text-blue-600"
      >
        Today
      </Text>
    </Appbar.Header>
  </SafeAreaView>
  );
};

export default CreateTaskScreen;
