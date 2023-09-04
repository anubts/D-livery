import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
//import LottieView from 'lottie-react-native';
//import Video from 'react-native-video';
//import WD from "../../../assets/WD.mp4"
import Swiper from 'react-native-swiper';
import logo from "../../../assets/logo.png";
import logo1 from "../../../assets/logo1.png";
import { colors, hr80 } from "../../globals/style";
import { firebase } from "../../../Firebase/firebaseConfig";

const WelcomeScreen = ({ navigation }) => {
  const [userlogged, setUserlogged] = useState(null);
  useEffect(() => {
    const checklogin = () => {
      firebase.auth().onAuthStateChanged((user) => {
        // console.log(user);
        if (user) {
          // navigation.navigate('home');
          setUserlogged(user);
        } else {
          // No user is signed in.
          console.log("no user");
        }
      });
    };
    checklogin();
  }, []);

  const handlelogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        setUserlogged(null);
        console.log("signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To D-Livery</Text>
      <View style={styles.logoout}>
      <View style={styles.logoout}></View>
      <Image source={logo1} style={styles.logo} />
      </View>
      <Text style={styles.text}>
        Find the best food around you at lowest price.{'\n'} {'\n'}
        <Text style={styles.text1}>"Search it, Order it, Eat it, and enjoy"
        </Text>
      </Text>

      {userlogged === null ?

<View style={styles.btnout}>
    <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Text style={styles.btn}>Sign up</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style={styles.btn}>Sign In</Text>
    </TouchableOpacity>
</View>

:
<View style={styles.logged}>
    <Text style={styles.txtlog}>{'\n'}{'\n'}Signed in as <Text style={styles.txtlogin}>{userlogged.email}</Text></Text>
    <View style={styles.btnout}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlelogout()}>
            <Text style={styles.btn}>Log Out</Text>
        </TouchableOpacity>

    </View>
</View>
}
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "#FF6402",
    textAlign: "center",
    marginTop: 70,
    marginVertical: 25,
    fontWeight: "500",
  },
  slide: {
    marginTop:250,
    width: '100%',
    height: '50%',
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
},
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 20,
},
  logoout: {
    width: "80%",
    height: "30%",
    // backgroundColor: '#fff',
    alignItems: "center",
  },
  logo: {
    marginBottom:30,
    width: "100%",
    height: "100%",
    marginBottom:80,
  },
  text: {
    marginTop:70,
    fontSize: 30,
    width: "80%",
    color: "#FF6402",
    textAlign: "center",
  },
  text1: {
    fontSize: 20,
    width: "80%",
    color: "#FF6402",
    textAlign: "center",
  },
  btnout: {
    flexDirection: "row",
  },
  btn: {
    fontSize: 23,
    color: "#FDFDFD",
    textAlign: "center",
    marginTop:180,
    marginVertical: 30,
    marginHorizontal: 30,
    fontWeight: "700",
    backgroundColor: "#BF4100",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 40,
  },
  logged: {
    alignItems: "center",
  },
  txtlog: {
    fontSize: 19,
    color:"#FF6402",
    textShadowColor:"grey",
  },
  txtlogin: {
    marginTop:20,
    fontSize: 19,
    color: "#FF6402",
    fontWeight: "700",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
