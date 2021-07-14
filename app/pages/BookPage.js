import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
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
    params: { book = {} },
  } = useRoute();

  const Title = useCallback(
    ({ title, style }) => (
      <Text style={[style, book.cover && styles.white]}>{title}</Text>
    ),
    [book]
  );

  const {
    title,
    subtitle,
    authors,
    subjects,
    publishers,
    publish_date,
    number_of_pages,
    notes,
  } = book;
  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: book?.cover?.medium }}
      blurRadius={5}
    >
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.pop()}
        >
          <Title title={'Back'} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.subContainer}
      >
        <View style={styles.coverContainer}>
          <Image style={styles.cover} source={{ uri: book?.cover?.medium }} />
        </View>
        <View style={styles.detailsContainer}>
          <Title style={styles.title} title={title} />
          <Title style={styles.author} title={subtitle} />
          <Title style={styles.author} title={authors?.[0]?.name} />
          <Title style={styles.subText} title={subjects?.[0]?.name} />
          <Title style={styles.subText} title={publishers?.[0]?.name} />
          <Title style={styles.subText} title={`${number_of_pages} pages`} />
          <Title style={styles.subText} title={publish_date} />
          <Title style={styles.subText} title={`"${notes}"`} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default BookPage;

const styles = StyleSheet.create({
  navbar: {
    height: moderateVerticalScale(60),
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  backContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  detailsContainer: {
    flex: 1,
    padding: moderateScale(20),
    width: '100%',
  },
  title: {
    fontSize: moderateScale(20, 0.3),
    fontWeight: 'bold',
  },
  author: {
    fontSize: moderateScale(18, 0.3),
    fontWeight: 'bold',
    paddingBottom: moderateScale(5),
  },
  subText: {
    fontSize: moderateScale(16, 0.3),
    paddingBottom: moderateScale(5),
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  subContainer: {
    flexGrow: 1,
    alignItems: 'center',
    width: '100%',
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
  white: {
    color: colors.white,
  },
});
