import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import colors from '../styles/colors';
import { useBooks } from '../actions/hooks';
import { BookCard } from '../components';
import {
  moderateVerticalScale,
  moderateScale,
} from 'react-native-size-matters';

const HomePage = () => {
  const { status, data, error, isFetching } = useBooks({
    bibkeys: 'ISBN:0451526538,ISBN:0201558025',
    jscmd: 'data',
  });

  const renderItem = ({ item }) => <BookCard book={item} />;
  const renderSeparator = () => <View style={styles.separator} />;

  return !isFetching ? (
    <View style={styles.container}>
      <FlatList
        data={Object.values(data)}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  ) : (
    <View />
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: moderateScale(20),
    paddingHorizontal: moderateScale(10),
  },
  separator: {
    height: moderateVerticalScale(10),
  },
});
