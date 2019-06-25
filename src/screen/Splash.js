import React, {Component} from 'react'
import LinearGradient from "react-native-linear-gradient"
import {Image, StatusBar, Animated,} from 'react-native'
import splash from '../assets/styles/splash'

export default class Splash extends Component {
    state = {
        ready: false,
        SlideInLeft: new Animated.Value(0),
    };
    componentWillMount() {
        setTimeout(() => {
            return Animated.parallel([
                Animated.timing(this.state.SlideInLeft, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true
                }),
            ]).start();
        }, 1500)
    };
    render() {
        let {SlideInLeft} = this.state;
        return (
            <LinearGradient colors={['#023d4f', '#011828']}
                            style={splash.container}>
                <StatusBar hidden />
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateY: SlideInLeft.interpolate({
                                    inputRange: [0,.67],
                                    outputRange: [200, 0]
                                })
                            }
                        ],

                        height: 200,
                        width: 130,
                        borderRadius: 12,
                        justifyContent: "center"
                    }}
                >
                    <Image source={require('./../assets/images/logo-full.png')}
                           style={splash.logo}/>
                </Animated.View>

            </LinearGradient>
        )
    }
}