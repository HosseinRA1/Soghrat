import React, {Component} from 'react'
import LinearGradient from "react-native-linear-gradient";
import splash from "../assets/styles/splash";
import {StatusBar, Image, View} from "react-native";
import {Icon} from 'native-base'
import question from '../assets/styles/question'
import Text from "../components/Text";

export default class QuestionsPage extends Component {
    render() {
        return (
            <LinearGradient colors={['#023d4f', '#011828']}
                            style={question.container}>
                <StatusBar hidden/>
                <View style={question.topView}>
                    <View style = {question.rateView}>
                        <Text h4>امتیاز من</Text>
                        <Text h3>200</Text>
                    </View>
                    <View style = {question.topImageView}>
                        <Image source={require('../assets/images/main-page-image.png')} style={question.topImage}/>

                    </View>
                    <View style = {question.homeIconView}>
                        <Icon style={question.homeIcon} name="md-home"/>
                        <Text h4>خانه</Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}