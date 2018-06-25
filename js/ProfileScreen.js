import React from 'react';
import { Button, StyleSheet, View, Text, Image } from 'react-native';
import { Icon, Slider } from 'react-native-elements';

export default class ProfileScreen extends React.Component {
  state = {
    value: 0,
    data: [0, 0, 0, 0, 0]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.text}>
            {"How's your day at "}
            <Image
              style={styles.image}
              source={require('../assets/images/macys.png')}
            />
            {" ?"}
          </Text>
        </View>
        <View style={styles.icon}>
          <Text style={styles.iconText}>{"-2: Sucks "}<Icon name='sentiment-very-dissatisfied' color='#E70000' size={40} type='materialIcons'/></Text>
          <Text style={styles.iconText}>{"-1: Meh "}<Icon name='sentiment-dissatisfied' color='#E70000' size={40} type='materialIcons'/></Text>
          <Text style={styles.iconText}>{"0: Fine "}<Icon name='sentiment-neutral' color='#E70000' size={40} type='materialIcons'/></Text>
          <Text style={styles.iconText}>{"1: Good "}<Icon name='sentiment-satisfied' color='#E70000' size={40} type='materialIcons'/></Text>
          <Text style={styles.iconText}>{"2: Amazing "}<Icon name='sentiment-very-satisfied' color='#E70000' size={40} type='materialIcons'/></Text>
        </View>

        <View style={styles.slider}>
          <Slider
            style={{ width: 240 }}
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            minimumValue={-2}
            maximumValue={2}
            step={1}
            thumbTintColor='#E70000'
            />
            <Text style={{ paddingLeft: 90, fontFamily: 'Papyrus' }}>
              Mood: {this.state.value}
            </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.view}>
            <Button
              onPress={() => {
                for (var i = 0; i < this.state.data.length; i++) {
                  if (this.state.value == i-2) {
                    this.state.data[i] += 1;
                  }
                }
                // console.log(this.state.data);
                this.props.navigation.navigate('TodayChart', { data: this.state.data });
                }
              }
              title="Share your mood!"
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
  },
  heading: {
    paddingTop: 20
  },
  text: {
    fontSize: 20,
    fontFamily: 'Papyrus',
    justifyContent: 'center',
    paddingTop: 2
  },
  image: {
    width: 100,
    height: 26.65
  },
  icon: {
    flex: 2,
    paddingTop: 70
    // justifyContent: 'center'
  },
  iconText: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 28,
    fontFamily: 'Papyrus',
    color: '#E70000'
  },
  slider: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 40
  },
  buttonContainer: {
   flex: 1,
   paddingBottom: 40
  },
  view: {
    margin: 20,
    justifyContent: 'space-between',
    backgroundColor: '#E70000',
    borderRadius: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 15,
    paddingRight: 15
  }
})
