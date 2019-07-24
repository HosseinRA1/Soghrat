import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const setting = StyleSheet.create({
    avatar: {
        width: wp('30%'),
        height: wp('30%'),
        borderRadius: hp('12%'),
        alignSelf : 'center'
    },
    container: {
        alignItems : 'center'
    }
});

export default setting;