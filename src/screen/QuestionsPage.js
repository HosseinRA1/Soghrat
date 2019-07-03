import React, {Component} from 'react'
import LinearGradient from "react-native-linear-gradient";
import {StatusBar, Image, View , TouchableOpacity} from "react-native";
import {Icon, Content} from 'native-base'
import question from '../assets/styles/question'
import Text from "../components/Text";
import CustomButton from "../components/CustomButton";

export default class QuestionsPage extends Component {
    render() {
        return (
            <LinearGradient colors={['#023d4f', '#011828']}
                            style={question.container}>
                <StatusBar hidden/>
                <View style={question.topView}>
                    <View style={question.rateView}>
                        <Text h4>امتیاز من</Text>
                        <Text h3>200</Text>
                    </View>
                    <View style={question.topImageView}>
                        <Image source={require('../assets/images/main-page-image.png')} style={question.topImage}/>

                    </View>
                    <View style={question.homeIconView}>
                        <Icon style={question.homeIcon} name="md-home"/>
                        <Text h4>خانه</Text>
                    </View>
                </View>
                <View style={question.questionView}>
                    <Text style={question.questionText} h2> کدوم رو ترجیح میدی؟ </Text>
                </View>
                <Content contentContainerStyle={question.contentStyle}>
                    <View style={question.answerButtonView}>
                        <CustomButton>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                            است.
                        </CustomButton>
                    </View>
                    <View style={question.answerButtonView}>
                        <CustomButton blue>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                            است.
                        </CustomButton>
                    </View>
                    <View style={question.answerButtonView}>
                        <CustomButton transparent>
                            هیچکدام
                        </CustomButton>
                    </View>
                    <Text h3 style = {question.nextQuestionButton}>سوال بعدی</Text>
                </Content>
                <View style={question.bottomIcons}>

                    <TouchableOpacity style={{alignItems: 'center'}}>
                        <Icon name='md-share' style={{color: 'white'}}/>
                        <Text>اشتراک</Text>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center'}}>
                        <Icon name='md-star' style={{color: '#ffd515'}}/>
                        <Text>2 امتیازی</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Icon name='md-heart' style={{color: '#ae0600'}}/>
                        <Text>452</Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}