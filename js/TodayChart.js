import React from 'react';
import { StyleSheet, View, Text, Image, AsyncStorage } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';

import ProfileScreen from './ProfileScreen.js';

export default class TodayChart extends React.PureComponent {
  render() {
    const fill = '#E70000'
    const contentInset = { top: 20, bottom: 20 }

    // const data = [0, 0, 0, 0, 0]
    // const data = [ 10, 40, 50, 0, 5 ]
    const {state} = this.props.navigation;
    const data = state.params.data;

    // const data = [0, 0, 0, 0, 0];
    //
    // console.log(storeData.length);
    //
    // for (var i = 0; i < storeData.length; i++) {
    //   var myKey = `storeData[${i}]`;
    //   AsyncStorage.setItem(myKey, storeData[i]);
    //   this.setState({myKey: storeData[i]});
    //   console.log(AsyncStorage);
    // }
    //
    // for (var i = 0; i < storeData.length; i++) {
    //   AsyncStorage.getItem(`storeData[${i}]`).then((value) => {
    //     data[i] = value;
    //   }).done();
    // }
    //
    // console.log(data);

    // const {params} = this.props.navigation.state;

    const dataMood = [ 'Sucks', 'Meh', 'Fine', 'Good', 'Amaze' ]

    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.text}>
            {"Today's mood at "}
            <Image
              style={styles.image}
              source={require('../assets/images/macys.png')}
            />
          </Text>
        </View>
        <View style={{ height: 600, flexDirection: 'row' }}>
          <YAxis
            style={{ height: 600, marginLeft: 10 }}
            data={ data }
            contentInset={ contentInset }
            svg={{ fill: 'black', fontSize: 6 }}
            numberOfTicks={ 10 }
            formatLabel={ value => `${value}` }
          />
          <BarChart
            style={{ flex: 1, marginLeft: 10, height: 600 }}
            data={ data }
            svg={{ fill }}
            spacingInner={0.2}
            contentInset={ contentInset }
            formatLabel={(value, index) => dataWeek[ index ]}
          >
            <Grid/>
          </BarChart>
        </View>
        <XAxis
          style={{ marginHorizontal: 20, paddingLeft: 28 }}
          data={ data }
          formatLabel={(value, index) => dataMood[ index ]}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 6, fill: 'black' }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingBottom: 60,
    paddingLeft: 5,
    paddingRight: 20
  },
  heading: {
    alignItems: 'center',
    paddingTop: 40
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
})
