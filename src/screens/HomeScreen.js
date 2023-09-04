import { StyleSheet, Text, View, StatusBar, TextInput, FlatList, Image, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'
import { AntDesign } from '@expo/vector-icons';
import { colors} from '../globals/style'

import { firebase } from '../../Firebase/firebaseConfig'
import Cardslider from '../components/Cardslider'
import BottomNav from '../components/BottomNav'
import { windowHeight } from '../components/BottomNav'

const HomeScreen = ({ navigation }) => {

    const [foodData, setFoodData] = useState([]);
    const [VegData, setVegData] = useState([]);
    const [NonVegData, setNonVegData] = useState([]);
    const [DrinkData, setDrinkData] = useState([]);


    const foodRef = firebase.firestore().collection('FoodData');

    useEffect(() => {
        foodRef.onSnapshot(snapshot => {
            setFoodData(snapshot.docs.map(doc => doc.data()))
        }
        )
    }, [])

    useEffect(() => {
        setVegData(foodData.filter((item) => item.foodType == 'veg'))
        setNonVegData(foodData.filter((item) => item.foodType == 'non-veg'))
        setDrinkData(foodData.filter((item) => item.foodType == 'liquid'))
    }, [foodData])
    console.log(foodData)
    console.log(VegData)



    // search box
    const [search, setSearch] = useState('')

    console.log(search)
    console.log(windowHeight)
    return (
        <View style={styles.container}>
            <StatusBar />

            <HomeHeadNav navigation={navigation} />

            <View style={styles.bottomnav}>
                <BottomNav navigation={navigation} />
            </View>


            <ScrollView>
                <View style={styles.searchbox}>
                    <AntDesign name="search1" size={24} color="black" style={
                        styles.searchicon
                    } />
                    <TextInput style={styles.input} placeholder="Search" onChangeText={(e) => {
                        setSearch(e)
                    }} />

                </View>
                {search != '' && <View style={styles.seacrhresultsouter}>
                    <FlatList style={styles.searchresultsinner} data={foodData} renderItem={
                        ({ item }) => {
                            if (item.foodName.toLowerCase().includes(search.toLowerCase())) {
                                return (
                                    <View style={styles.searchresult}>
                                        <AntDesign name="arrowright" size={24} color="#ff6402" />
                                        <Text style={styles.searchresulttext}>{item.foodName}</Text>
                                    </View>
                                )
                            }
                        }
                    } />
                </View>}
                <Categories />
                <OfferSlider />
                {/* <Text>HomeScreen</Text> */}

                <Cardslider title={"Today's Menu"} data={foodData} navigation={navigation} />
                <Cardslider title={"Non-Veg"} data={NonVegData} navigation={navigation} />
                <Cardslider title={"Veg"} data={VegData} navigation={navigation} />
                <Cardslider title={"Drink"} data={DrinkData} navigation={navigation} />
            </ScrollView>

            <BottomNav/>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // marginTop: 50,
        flex: 1,
        backgroundColor: '#FFFF',
        // alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    searchbox: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#FFFF',
        borderRadius: 35,
        alignItems: 'center',
        padding: 10,
        margin: 20,
        elevation: 10,
    },
    input: {
        marginLeft: 10,
        width: '90%',
        fontSize: 18,
        color: '#ff6402',
    },
    searchicon: {
        color: '#ff6402',
    },
    seacrhresultsouter: {
        width: '100%',
        marginHorizontal: 45,
        height: '100%',
        backgroundColor: '#ffff',
    },
    searchresultsinner: {
        width: '100%',
    },
    searchresult: {
        width: '100%',
        flexDirection: 'row',
        // alignItems: 'center',
        padding: 5,
    },
    searchresulttext: {
        marginLeft: 10,
        fontSize: 18,
        color: '#ff6402',
    },
    bottomnav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#FFFF',
        zIndex: 20,
    }
})
export default HomeScreen
