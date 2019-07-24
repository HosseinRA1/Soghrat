import React,{Component} from 'react'
import { View} from "native-base";
import Text from "../Text";
import {TextInput , StyleSheet} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class Input extends Component{
    render(){
        return (
            <View style = {{marginTop : 10}}>
                <Text h4>{this.props.title}</Text>
                <TextInput
                    {... this.props}
                    placeholderTextColor='white'
                    style={styles.input}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        borderColor : 'white'
    },
});