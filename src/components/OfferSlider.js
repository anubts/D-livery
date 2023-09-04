import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../globals/style'



const OfferSlider = () => {
    return (
        <View>
            <View style={styles.offerSlider}>
                <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true}
                    dotColor={colors.text2} activeDotColor={'#ff6402'}
                    nextButton={<Text style={styles.buttonText}>›</Text>}
                    prevButton={<Text style={styles.buttonText}>‹</Text>}
                >

                    <View style={styles.slide}>
                        <Image source={require('../../assets/OfferSliderImages/img1.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/OfferSliderImages/img2.png')} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/OfferSliderImages/img3.png')} style={styles.image} />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}

export default OfferSlider

const styles = StyleSheet.create({
    offerSlider: {
        width: '100%',
        height: 200,
        backgroundColor: '#FFFF',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    slide: {
        width: '100%',
        height: 200,
        backgroundColor: '#FFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '110%',
        height: '110%',
        borderRadius: 50,
    },
    buttonText: {
        color: '#ff6402',
        fontSize: 40,
        fontWeight: '500',
        backgroundColor: 'white',
        borderRadius: 20,
        width: 40,
        height: 40,
        textAlign: 'center',
        lineHeight: 40,
    }
})
