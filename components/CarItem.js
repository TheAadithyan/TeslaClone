import React from 'react'
import { ImageBackground, StyleSheet, View, Text, Dimensions } from 'react-native'
import StyledButton from './StyledButton'

const CarItem = (props) => {

    const { name, tagline, taglineCta, image } =props; 

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    <Text style={styles.taglineCta}>
                        {taglineCta}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
            <StyledButton type="primary" content='Custom Order'/>
            <StyledButton type="secondary" content='existing inventory'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        color: '#393c41',
        fontWeight: '500'
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5d61'
    },
    subtitleCTA: {
        textDecorationLine: 'underline',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
    taglineCta: {
        textDecorationLine: 'underline'
    }
})


export default CarItem
