import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  
  carContainer: {
    width: '100%',
    height: '100%', 
  },

  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    width: "100%",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    color: "#5c5e62",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    backgroundColor: '#fc0',
    width: '100%', // applied to Image
    height: '100%',
    resizeMode: 'stretch', // or 'stretch'
    position: "absolute",
  },  

});

export default styles;
