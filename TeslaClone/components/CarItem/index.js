import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={require('../../assets/images/ModelX.jpeg')} 
                style={styles.image} 
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,000</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%'
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '500'
    },
    subtitle: {
        fontSize: 20,
        color: '#5c5e62'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    }
})

export default CarItem
