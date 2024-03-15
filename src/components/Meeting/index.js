import React from 'react';
import styles from './styles';
import {Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Meeting = props => {

    const post = props.post;


    const navigation = useNavigation();
    
    const onPress = () => {
        console.log( post.date)         
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress = {onPress}>
            <View style={{flex: 3}}>
                <Text style={{fontSize: 19}} numberOfLines={1}>Title:   {post.title}</Text>
                <Text style={{fontSize: 19}} numberOfLines={1}>Location:    {post.title}</Text>
            </View>
            <View style ={{flex: 2}}>
            <Text style={{fontSize: 19}}>{post.location}</Text>
            </View>
            <View style ={{flex: 1}}>
            <Text style={{fontSize: 19}}>Date: {post.date}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Meeting;