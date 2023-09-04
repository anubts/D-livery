import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../globals/style'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Categories = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Categories
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="food-apple-outline" size={24} color="black" style={styles.myicon} />
                    <Text style={styles.mytext}>Starters</Text>
                </View>

                <View style={styles.box}>
                    <MaterialIcons name="dinner-dining" size={24} color="black" style={styles.myicon} />
                    <Text style={styles.mytext}>Dinner</Text>
                </View>

                <View style={styles.box}>
                    <MaterialCommunityIcons name="noodles" size={24} color="black" style={styles.myicon} />
                    <Text style={styles.mytext}>Breakfast</Text>
                </View>

                <View style={styles.box}>
                    <MaterialCommunityIcons name="cupcake" size={24} color="black" style={styles.myicon} />
                    <Text style={styles.mytext}>Deserts</Text>
                </View>
                <View style={styles.box}>
                    <Entypo name="drink" size={24} color="black" style={styles.myicon}/>
                    <Text style={styles.mytext}>Drinks</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        width: '100%',
        // height: 100,
        // alignItems: 'center',
        elevation: 10,
        borderRadius: 10,
    },
    head: {
        color: '#FF6402',
        fontSize: 25,
        fontWeight: '300',
        margin: 10,
        alignSelf: 'center',
        paddingBottom: 5,
        borderBottomColor: '#FF6402',
        borderBottomWidth: 3,
    },
    box: {
        backgroundColor: '#FFFF',
        elevation: 20,
        margin: 12,
        padding: 5,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    myicon: {
        marginRight: 10,
        color: '#FF6402',
    },
    mytext: {
        color: colors.text3,
    }
})
