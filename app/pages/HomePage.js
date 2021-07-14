import React, { useState, useCallback, useRef } from 'react';
import { View, StyleSheet, FlatList, TextInput, Text } from 'react-native';
import colors from '../styles/colors';
import { useBooks } from '../actions/hooks';
import { BookCard, LoadingView } from '../components';
import {
  moderateVerticalScale,
  moderateScale,
} from 'react-native-size-matters';
import { useDebouncedEffect } from '../hooks';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  const { data = {}, isFetching } = useBooks(
    {
      bibkeys: query,
      jscmd: 'data',
    },
    { enabled: !!query }
  );

  //   bibkeys: 'ISBN:0451526538,ISBN:0201558025',

  const processQuery = () => {
    const isbnArray = searchText.split(' ');
    const queryValue = isbnArray.reduce(
      (value, isbn) => (value += isbn ? `ISBN:${isbn},` : ''),
      ''
    );
    setQuery(queryValue);
  };

  useDebouncedEffect(processQuery, [searchText], 500);

  const onChangeText = value => {
    setSearchText(value.replace(/\D/g, ' '));
  };

  const renderItem = ({ item }) => <BookCard book={item} />;
  const renderSeparator = () => <View style={styles.separator} />;
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          {query ? 'No book matching the ISBN number(s)' : 'Search for books'}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          value={searchText}
          onChangeText={onChangeText}
          keyboardType="numeric"
          placeholder="Search.."
          placeholderTextColor={colors.black}
          style={styles.input}
        />
      </View>
      <LoadingView containerStyle={styles.listContainer} isLoading={isFetching}>
        <FlatList
          data={Object.values(data)}
          keyExtractor={item => item.key}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={renderEmpty}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </LoadingView>
    </View>
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
  listContainer: {
    flex: 1,
  },
  separator: {
    height: moderateVerticalScale(10),
  },
  searchbar: {
    height: moderateVerticalScale(40),
    borderRadius: moderateScale(6),
    borderWidth: 0.5,
    borderColor: colors.gray,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  list: {
    flexGrow: 1,
    paddingVertical: moderateVerticalScale(15),
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    color: colors.gray,
  },
  input: {
    color: colors.black,
  },
});
