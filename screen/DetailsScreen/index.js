import React from 'react';
import {SafeAreaView, View, Text, FlatList, ScrollView} from 'react-native';
import {styles} from '../DetailsScreen/styles';

class DetailsScreen extends React.Component {
  render() {
    const data = this.props.route.params.text;
    const Item = ({name, date, rating, review}) => (
      <View style={styles.item}>
        <View>
          <View style={styles.details}>
            <Text style={styles.reviewStyle}>{name}</Text>
            <Text style={styles.reviewStyle}>{date}</Text>
            <Text style={styles.reviewStyle}>{rating}</Text>
          </View>
          <View style={styles.review}>
            <Text style={styles.reviewStyle}>{review}</Text>
          </View>
        </View>
      </View>
    );
    const renderItem = ({item}) => (
      <Item
        name={item.name}
        date={item.date}
        rating={item.rating}
        review={item.comments}
      />
    );
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.cuisineName}>
              <Text style={styles.cuisineText}>{data.name}</Text>
            </View>
            <View style={styles.cuisineName}>
              <Text style={styles.cuisineType}>{data.cuisine_type}</Text>
            </View>
            <View style={styles.cuisineStyle}>
              <Text style={styles.timeStyle}>
                Monday-
                {data.operating_hours['Monday']}
              </Text>
              <Text style={styles.timeStyle}>
                Tuesday-
                {data.operating_hours['Tuesday']}
              </Text>
              <Text style={styles.timeStyle}>
                Wednesday-
                {data.operating_hours['Wednesday']}
              </Text>
              <Text style={styles.timeStyle}>
                Thursday-
                {data.operating_hours['Thursday']}
              </Text>
              <Text style={styles.timeStyle}>
                Friday-
                {data.operating_hours['Friday']}
              </Text>
              <Text style={styles.timeStyle}>
                Saturday-
                {data.operating_hours['Saturday']}
              </Text>
              <Text style={styles.timeStyle}>
                Sunday-
                {data.operating_hours['Sunday']}
              </Text>
            </View>
            <View style={styles.workingTimeStyle}>
              <FlatList
                data={data.reviews}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DetailsScreen;
