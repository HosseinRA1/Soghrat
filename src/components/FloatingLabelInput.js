import React,{Component} from 'react'
import Text from "./Text";
import {View, TextInput,  Animated} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
export default class FloatingLabelInput extends Component {
    state = {
        isFocused: false,
    };

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });


    render() {
        const { label, ...props } = this.props;
        const { isFocused } = this.state;
        const labelStyle = {
            position: 'absolute',
            right: 0,
            top: !isFocused ? 42 : 6,
            backgroundColor : 'transparent',
            fontSize: !isFocused ? hp('2%')  : hp('1.8%') ,
            color: '#ffffff',
            paddingRight : 15,

        };
        return (
            <View style={{ paddingTop: hp('2%') }}>
                <Text style={labelStyle}>
                    {label}
                </Text>
                <TextInput
                    {...props}
                    style={{ height: hp('7%'),width : wp('70%'),borderRadius : 30, fontSize: hp('2%'), color: '#ffffff', borderWidth: 1, borderColor: '#ffffff' , textAlign: 'center' }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    maxLenght = {11}
                />
            </View>
        );
    }
}
