import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors';

const LoadingView = ({ containerStyle, children, isLoading }) => {
  const renderLoader = () => {
    return (
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <LottieView
          source={require('../res/loadingIndicator.json')}
          loop
          autoPlay
          autoSize
          speed={0.8}
        />
      </View>
    );
  };

  return (
    <View style={containerStyle}>
      {children}
      {isLoading && renderLoader()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: colors.white,
  },
});

export default LoadingView;
