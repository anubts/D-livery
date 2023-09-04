import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {colors} from '../globals/style';

const HomeHeadNav = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Fontisto name="nav-icon-a" size={24} color="black" style={styles.myicon} />
    <View>
        <Text style={styles.mytext}>De-Livery
        <MaterialIcons name="delivery-dining" size={24} color="black" style={styles.myicon}  />
        </Text>
        

    </View>
    <TouchableOpacity onPress={() => { navigation.navigate('userprofile') }}>
    <FontAwesome5 name="user" size={24} color="#FFFF" />
    </TouchableOpacity>
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#FF6402',
        elevation: 20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderCurve: 'round',
        borderColor:"#FF6402",
    },
    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    myicon: {
        color: '#ffff',
    },
    mytext: {
        color: '#ffff',
        fontSize: 21,
    },
})