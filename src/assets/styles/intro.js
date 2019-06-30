import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const intro = StyleSheet.create({
    skip: {
        marginBottom : 60
    },
    container: {
        flex: 1,

        alignItems: 'center'
    },
    logo: {
        width: wp('30%'),
        height: hp('30%'),
        resizeMode: 'contain'
    },
    description: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    }
});

export default intro;