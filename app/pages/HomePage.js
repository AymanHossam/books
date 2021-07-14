import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import colors from '../styles/colors';
import { useBooks } from '../actions/hooks';
import { BookCard } from '../components';
import {
  moderateVerticalScale,
  moderateScale,
} from 'react-native-size-matters';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  const { data, isFetching } = useBooks({
    bibkeys: query,
    jscmd: 'data',
  });

  //   bibkeys: 'ISBN:0451526538,ISBN:0201558025',

  const onChangeText = value => {
    setSearchText(value.replace(/\D/g, ','));
  };

  const processQuery = () => {
    const isbnArray = searchText.split(' ');
    const queryValue = isbnArray.reduce(
      (value, isbn) => (value += `ISBN:${isbn},`),
      ''
    );
    setQuery(queryValue);
  };

  const renderItem = ({ item }) => <BookCard book={item} />;
  const renderSeparator = () => <View style={styles.separator} />;

  return !isFetching ? (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          value={searchText}
          onChangeText={onChangeText}
          keyboardType="numeric"
          placeholder="Search.."
          onSubmitEditing={processQuery}
        />
      </View>
      <FlatList
        data={Object.values(data)}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
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
    paddingTop: moderateScale(20),
    paddingHorizontal: moderateScale(15),
  },
  separator: {
    height: moderateVerticalScale(10),
  },
  searchbar: {
    height: moderateVerticalScale(40),
    borderRadius: moderateScale(6),
    borderWidth: 0.5,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  list: {
    paddingVertical: moderateVerticalScale(15),
  },
});
