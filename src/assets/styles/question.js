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
        marginTop: -30
    },
    topView: {
        width :wp('100%'),
        height : hp('10%'),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems : 'center'

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
        color: 'white',
        fontSize : hp('5%')
    },
    rateView : {
        width :wp('25%'),
        paddingTop: wp('5%'),
        alignItems : 'center'
    },
    questionView : {
        alignItems : 'center',
        justifyContent: 'center',
        padding : 10,
        marginTop : 10
    },
    questionText :{
        textAlign : 'center'
    },
    bottomIcons : {
        flexDirection: 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        padding:10
    },
    contentStyle : {
        alignItems: 'center', justifyContent: 'center'
    },
    answerButtonView : {
        marginTop: hp('4%')
    },
    nextQuestionButton : {
        textDecorationLine : 'underline', alignSelf : 'center' , marginTop : hp('4%')
    }

});
export default question;