import React, {Component} from 'react'
import LinearGradient from "react-native-linear-gradient";
import splash from "../assets/styles/splash";
import {StatusBar} from "react-native";
import Text from "../components/Text";

export default class QuestionsPage extends Component {
    render() {
        return (
            <LinearGradient colors={['#023d4f', '#011828']}
                            style={splash.container}>
                <StatusBar hidden/>
                <Text h2>سقرااااااااط
                نرم افزار پرسش و پاسخ
                </Text>
            </LinearGradient>
        )
    }
}