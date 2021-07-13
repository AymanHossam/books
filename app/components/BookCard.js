import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../styles/colors';
import { useBooks } from '../actions/hooks';
import Card from '../styles/card';

const BookCard = ({ book }) => {
  return (
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        <Image style={styles.cover} source={{ uri: book?.cover.medium }} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{book?.title}</Text>
        <Text>{book?.authors?.[0]?.name}</Text>
        <Text>{book?.publish_date}</Text>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 10,
  },
  coverContainer: {
    ...Card.container,
    width: 90,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  cover: {
    height: '100%',
  },
  details: {
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
