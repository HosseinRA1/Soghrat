import React, {Component} from 'react'
import LinearGradient from "react-native-linear-gradient"
import {Image, StatusBar} from 'react-native'
import splash from '../assets/styles/splash'

export default class Splash extends Component {
    render() {
        return (
            <LinearGradient colors={['#023d4f', '#011828']}
                            style={splash.container}>
                <StatusBar hidden />
                <Image source={require('./../assets/images/logo-full.png')}
                       style={splash.logo}/>
            </LinearGradient>
        )
    }
}