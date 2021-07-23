import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../assets/images/menu.png')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        width: '100%',
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },

    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }

   


})

export default Header;