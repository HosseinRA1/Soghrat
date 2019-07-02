import React, {Component} from 'react'
import LinearGradient from "react-native-linear-gradient"
import {Image, StatusBar, Animated,View} from 'react-native'
import splash from '../assets/styles/splash'
import {Actions} from "react-native-router-flux";

export default class Splash extends Component {
    state = {
        ready: false,
        SlideInLeft: new Animated.Value(0),
    };

    componentWillMount() {
        /* setTimeout(() => {
             return Animated.parallel([
                 Animated.timing(this.state.SlideInLeft, {
                     toValue: 1,
                     duration: 700,
                     useNativeDriver: true
                 }),
             ]).start();
         }, 1500)
     };
 */
        setTimeout(() => {
            Actions.replace('intro')
        }, 1800)
    }


        render()
        {
            //let {SlideInLeft} = this.state;
            return (
                <LinearGradient colors={['#023d4f', '#011828']}
                                style={splash.container}>
                    <StatusBar hidden/>
                    <View>
                        <Image source={require('./../assets/images/logo-png.png')}
                               style={splash.logo}/>
                    </View>
                    {/*
<Animated.View
    style={{
        transform: [
            {
                translateY: SlideInLeft.interpolate({
                    inputRange: [0, .67],
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
</Animated.View>*/}
                </LinearGradient>
            )
        }
    }


