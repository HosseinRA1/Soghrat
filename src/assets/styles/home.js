import {StyleSheet} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";


const home = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        padding: wp('4%'),
        justifyContent: 'space-between'
    },
    settingIcon: {
        color: 'white',
        fontSize: hp('4%')
    },
    iconButton: {
        alignItems: 'center'
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: wp('30%'),
        height: hp('21%'),
    },
    startButton: {
        width: wp('35%'),
        height: hp('21%'),
        borderRadius: wp('18%'),
        backgroundColor: '#ff5f74',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('10%'),
        zIndex: 1,
        shadowOffset: {
            width: 0,
            height: .5,
        },
        shadowOpacity: 1,
        shadowColor: 'black',
        elevation: 7,
    },
    startIcon: {
        color: 'white',
        fontSize: hp('9%')
    },
    buttonsView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityButton: {
        width: wp('25%'),
        height: hp('15%'),
        borderRadius: wp('12%'),
        backgroundColor: '#38697b',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('20%')
    }
});

export default home;