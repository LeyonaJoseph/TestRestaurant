import React from 'react';
import {Text, View, SafeAreaView, FlatList, Pressable} from 'react-native';
import {restaurantData} from '../datas/restaurantData';
import {styles} from './styles';

class HomeScreen extends React.Component {
  render() {
    const Item = ({title}) => (
      <View>
        <Text>{title}</Text>
      </View>
    );
    const renderItem = ({item}) => (
      <Pressable
        onPress={() =>
          this.props.navigation.navigate('Details', {
            text: item,
          })
        }>
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </Pressable>
    );
    return (
      <View>
        <SafeAreaView styles={styles.item}>
          <FlatList
            data={restaurantData['restaurants']}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;
