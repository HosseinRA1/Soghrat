import {StyleSheet} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const login = StyleSheet.create({
    topImage: {
        width: wp('27%'),
        height: hp('6%'),
        alignSelf: 'center',
        position: 'absolute',
        top: 0
    },
    input: {
        borderWidth: 1,
        borderRadius: 30,
        width: wp('70%'),
        height: hp('7%'),
        fontFamily: 'IRANYekanMobileMedium',
        fontSize: hp('2.6%'),
        color: 'white',
        marginTop: hp('1%'),
        textAlign: 'center',
    },
    buttonView : {
        marginTop : hp('1.7%')
    },
    contentStyle : {
        flex: .9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backIconView : {
      paddingTop : hp('4%'),
        alignItems: 'flex-end',
        paddingRight : hp('5%'),
    },
    backIcon : {
        color : 'white'  , fontSize : hp('5%')
    },
    sendAgainButton : {
        paddingTop: hp('.8%'),
        alignItems : 'center'
    }
});
export default login;