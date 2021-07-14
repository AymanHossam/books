import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import Card from '../styles/card';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const BookCard = ({ book }) => {
  const navigation = useNavigation();
  const navigateToBook = () => navigation.navigate('Book', { book });
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToBook}>
      <View style={styles.coverContainer}>
        <Image style={styles.cover} source={{ uri: book?.cover?.medium }} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {book?.title}
        </Text>
        <Text>{book?.authors?.[0]?.name}</Text>
        <Text>{book?.publish_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    height: moderateVerticalScale(160),
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingVertical: moderateScale(10),
    marginLeft: moderateScale(5),
  },
  coverContainer: {
    ...Card.container,
    width: moderateScale(90),
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginRight: moderateScale(5),
  },
  cover: {
    height: '100%',
  },
  details: {
    flex: 1,
    justifyContent: 'space-around',
    padding: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(16, 0.3),
    fontWeight: 'bold',
  },
});
