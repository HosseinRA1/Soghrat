import React, {Component} from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import Text from "./Text";
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import {Icon} from 'native-base'

const colors = {
    pinkButton: ['#db3756', '#fd5c72'],
    blueButton: ['#187ee9', '#20b3ee'],
};

export default class CustomButton extends Component {


    static propTypes = {
        style: PropTypes.object,
        pink: PropTypes.bool,
        blue: PropTypes.bool,
        transparent: PropTypes.bool,
        small: PropTypes.bool,
        icon: PropTypes.bool,
        onPress: PropTypes.func,
        borderColor : PropTypes.string
    };

    render() {
        let style, pink, blue, transparent,icon, small, onPress , borderColor ;
        ({
            style = {},
            pink,
            icon = false,
            blue = false,
            transparent = false,
            small = false,
            borderColor = 'white',
            onPress = () => {}
        } = this.props);

        if (pink) {
            return (

                <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.pinkButton}
                                    style={styles.main}>
                        <Text style = {styles.text} h3>{this.props.children}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            )
        }
        if (blue) {
            return (

                <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.blueButton}
                                    style={styles.main}>
                        <Text style = {styles.text} h3>{this.props.children}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            )
        }
        if (transparent) {
            return (

                <TouchableOpacity style={[styles.button, style , {borderWidth : .8 ,borderColor : borderColor, padding: 10,justifyContent: 'center' , alignItems: 'center'}]} onPress={onPress}>
                        <Text color = '#fff' style = {styles.text} h3>{this.props.children}</Text>
                </TouchableOpacity>
            )
        }
        if (icon) {
            return (
                <TouchableOpacity style={[styles.button,{flexDirection: 'row'}]} onPress={onPress}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.pinkButton}
                                    style={[styles.main , {width: wp('70%'),}]}>
                        <Icon name='ios-arrow-back' style={{
                            color: 'white',
                            fontSize: wp('5%'),
                            position: 'absolute',
                            left: 10,
                            paddingLeft: 10
                        }}/>
                        <Text style = {styles.text} h3>{this.props.children}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            )
        }
        if (small) {
            style = {
                width: wp('40%')
            }
        }

        return (
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.pinkButton} style={styles.main}>
                    <Text style = {styles.text} h3>{this.props.children}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: wp('70%'),
        borderRadius: 30,
    },
    main: {
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text : {
        textAlign: 'center'
    },
});