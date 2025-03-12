import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const rS = (size) => {
    return scale(size)
}   

export const vS = (size) => {
    return verticalScale(size)
}

export const mS = (size) => {
    return moderateScale(size)
}

