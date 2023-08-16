import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import OIP from '../../images/OIP.jpeg';

const App = () => {
    // ตัวอย่างการใช้งาน การแสดงรูปภาพ
    return (
        // แบบอ้างอิงจาก URL
        <Image source={OIP} style={styles.image} />
        
        // แบบอ้างอิงจาก Local
        // <Image source={require('../images/OIP.jpeg')} style={styles.image} />
    );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
});

export default App;
