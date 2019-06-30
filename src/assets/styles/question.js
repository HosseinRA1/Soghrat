import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const question = StyleSheet.create({
    container : {
        flex: 1,

    },
    topImage: {
        width: wp('30%'),
        height: hp('22%'),
        resizeMode: 'contain',
        top : -55,
        position : 'absolute',
    },
    topView: {
        width :wp('100%'),
        height : hp('10%'),
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    topImageView : {
        width :wp('50%'),
        alignItems : 'center'
    },
    homeIconView : {
        width :wp('25%'),
        paddingTop: wp('5%'),
        alignItems : 'flex-end',
        paddingRight: wp('7%'),
    },
    homeIcon: {
        color: 'white'
    },
    rateView : {
        width :wp('25%'),
        paddingTop: wp('5%'),
        alignItems : 'center'
    }
});
export default question;