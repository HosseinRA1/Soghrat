import React, {Component} from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import Text from "./Text";
import PropTypes from 'prop-types';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import {Icon} from 'native-base'

const colors = {
    pinkButton: ['#db3756', '#fd5c72'],
    blueButton: ['#187ee9', '#20b3ee'],
    transparentButton: ['transparent']
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
    };

    render() {
        let style, pink, blue, transparent, small, onPress;
        ({
            style = {},
            pink,
            icon = false,
            blue = false,
            transparent = false,
            small = false,
            onPress = () => {
            },
        } = this.props);

        if (pink) {
            return (

                <TouchableOpacity style={[styles.button, style]} onPress={() => this.props.onPress}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.pinkButton}
                                    style={styles.main}>
                        <Text h4>{this.props.children}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            )
        }
        if (blue) {
            return (

                <TouchableOpacity style={[styles.button, style]} onPress={() => this.props.onPress}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.blueButton}
                                    style={styles.main}>
                        <Text h4>{this.props.children}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            )
        }
        if (transparent) {
            return (

                <TouchableOpacity style={[styles.button, style]} onPress={() => this.props.onPress}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.transparentButton}
                                    style={styles.main}>
                        <Text h4>{this.props.children}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
        }
        if (icon) {
            return (

                <TouchableOpacity style={[styles.button, {flexDirection: 'row'}]} onPress={() => this.props.onPress}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.pinkButton}
                                    style={styles.main}>
                        <Icon name='ios-arrow-back' style={{
                            color: 'white',
                            fontSize: wp('4%'),
                            position: 'absolute',
                            left: 10,
                            paddingLeft: 10
                        }}/>
                        <Text h4>{this.props.children}</Text>
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

            <TouchableOpacity style={[styles.button, style]} onPress={this.props.onPress}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.pinkButton} style={styles.main}>
                    <Text h4>{this.props.children}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: wp('70%'),
        borderRadius: 30,
        height : hp('7%')
    },
    main: {
        borderRadius: 30,
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
});