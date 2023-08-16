import React from 'react';
import { ActivityIndicator } from 'react-native';


// ตัวอย่างการนำไปใช้
// const App = () => {
//     return (
//         <ActivityIndicatorComponent size="large" color="#0000ff" />
//     );
// }

const ActivityIndicatorComponent = ({ size, color }) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default ActivityIndicatorComponent;
