import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../styles/colors';
import {
  moderateVerticalScale,
  moderateScale,
} from 'react-native-size-matters';
import Card from '../styles/card';
import { useRoute } from '@react-navigation/native';

const BookPage = ({ navigation }) => {
  const {
    params: { book },
  } = useRoute();

  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: book?.cover?.medium }}
      blurRadius={5}
    >
      <View style={styles.navbar}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text
            style={[styles.headerTitle, !book?.cover && styles.black]}
            numberOfLines={2}
          >
            {book?.title || 'Book'}
          </Text>
        </View>
        <View style={styles.backContainer} />
      </View>
      <View style={styles.coverContainer}>
        <Image style={styles.cover} source={{ uri: book?.cover?.medium }} />
      </View>
    </ImageBackground>
  );
};

export default BookPage;

const styles = StyleSheet.create({
  navbar: {
    height: moderateVerticalScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  backContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },
  titleContainer: {
    flex: 6,
  },
  headerTitle: {
    fontSize: moderateScale(15, 0.3),
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  coverContainer: {
    ...Card.container,
    height: moderateScale(260),
    width: moderateScale(160),
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginRight: moderateScale(5),
    justifyContent: 'center',
    marginTop: moderateScale(30),
  },
  cover: {
    height: '100%',
  },
  black: {
    color: colors.black,
  },
});
