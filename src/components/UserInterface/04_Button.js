import React from 'react';
import { Button } from 'react-native';

const ButtonComponent = ({ onPress, title }) => {
  return <Button title={title} onPress={onPress} />;
};

export default ButtonComponent;
