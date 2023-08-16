import React from 'react';
import { Picker } from 'react-native';

// ตัวอย่างการนำไปใช้
// const App = () => {

//     const [selectedValue, setSelectedValue] = React.useState('java');
//     return (
//         <PickerComponent
//             selectedValue={selectedValue}
//             onValueChange={(itemValue) => setSelectedValue(itemValue)}
//             items={[
//                 { label: 'Java', value: 'java' },
//                 { label: 'JavaScript', value: 'js' },
//             ]}
//         />
//     );
// }

const PickerComponent = ({ selectedValue, onValueChange, items }) => {
  return (
    <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
      {items.map((item) => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

export default PickerComponent;
