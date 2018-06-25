import React from 'react';
import { Alert, Button, StyleSheet, View, Text, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>
          {"How's  "}
          <Image
            style={styles.image}
            source={require('../assets/images/macys.png')}
          />
          {"  Today?"}
        </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.view}>
            <Button
              // onPress={() => {Alert.alert("Let's view yesterday's mood")}}
              onPress={() => this.props.navigation.navigate('YesChart')}
              title="Yesterday's mood"
              color="#fff"
            />
          </View>
          <View style={styles.view}>
            <Button
              onPress={() => this.props.navigation.navigate('Profile')}
              title="Tell us your mood"
              color="#fff"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 220
  },
  text: {
    fontSize: 28,
    fontFamily: 'Papyrus',
    justifyContent: 'center',
    paddingTop: 10
  },
  image: {
    width: 100,
    height: 26.65
  },
  buttonContainer: {
   flex: 1,
   justifyContent: 'center',
   paddingBottom: 220
  },
  view: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E70000',
    borderRadius: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 15,
    paddingRight: 15
  }
});
