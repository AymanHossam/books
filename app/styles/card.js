import { moderateScale } from 'react-native-size-matters';
import { SHADOW } from './constants';

const Card = {
  container: {
    ...SHADOW,
    elevation: 5,
    borderRadius: moderateScale(6),
  },
};

export default Card;
