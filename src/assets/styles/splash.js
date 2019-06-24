import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const splash = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo : {
        width: wp('30%'),
        height: hp('30%') ,
        resizeMode:'contain'
    }
});

export default splash;