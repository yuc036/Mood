import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';

export default class YesChart extends React.PureComponent {
  render() {

        const fill = '#E70000'
        const contentInset = { top: 20, bottom: 20 }

        const data = [ 50, 10, 5, 0, 30 ]

        const dataMood = [ 'Sucks', 'Meh', 'Fine', 'Good', 'Amaze' ]
        // const dataMood = []
        //
        // dataMood.push(<Icon name='sentiment-very-dissatisfied' color='#E70000' size={60} type='materialIcons'/>);
        // dataMood.push(<Icon name='sentiment-dissatisfied' color='#E70000' size={60} type='materialIcons'/>);
        // dataMood.push(<Icon name='sentiment-neutral' color='#E70000' size={60} type='materialIcons'/>);
        // dataMood.push(<Icon name='sentiment-satisfied' color='#E70000' size={60} type='materialIcons'/>);
        // dataMood.push(<Icon name='sentiment-very-satisfied' color='#E70000' size={60} type='materialIcons'/>);

        return (
            <View style={styles.container}>
              <View style={styles.heading}>
                <Text style={styles.text}>
                  {"Yesterday's mood at "}
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
