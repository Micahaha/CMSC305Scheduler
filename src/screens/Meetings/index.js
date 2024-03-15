import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';

const MeetingsScreen = props => {

  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log('Add Meeting!')}>
                <Text style={styles.buttonText}>Add Meeting</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default MeetingsScreen;