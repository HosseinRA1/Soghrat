import React, {Component} from 'react'
import {Icon, View} from 'native-base'
import question from "../../assets/styles/question";
import Text from "../../components/Text";
import {Image, StatusBar} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import setting from "../../assets/styles/setting";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/settingsComponent/Input";
import {Content, Container} from 'native-base'

export default class EditProfile extends Component {
    state = {
        uri: 'https://static.farakav.com/files/pictures/01421231.jpg?h=192'
    };

    render() {
        return (
            <Container>
                <LinearGradient colors={['#023d4f', '#011828']}
                                style={question.container}>
                    <StatusBar hidden/>
                    <View style={question.topView}>
                        <View style={question.rateView}>
                            <Text h4>امتیاز من</Text>
                            <Text h3>200</Text>
                        </View>
                        <View style={question.topImageView}>
                            <Image source={require('../../assets/images/main-page-image.png')}
                                   style={question.topImage}/>

                        </View>
                        <View style={question.homeIconView}>
                            <Icon style={question.homeIcon} name="md-arrow-forward"/>
                        </View>
                    </View>

                    <Image style={setting.avatar}
                           source={{uri: 'https://static.farakav.com/files/pictures/01421231.jpg?h=192'}}/>
                    <Content style={{marginTop: 20 , alignSelf : 'center'}}>
                        <Input title='نام نمایشی'/>
                        <Input title='شماره موبایل'/>
                        <Input title='ایمیل'/>
                        <Input title='شهر'/>
                        <CustomButton pink style={{marginTop : 20}}>
                            ذخیره
                        </CustomButton>
                    </Content>
                </LinearGradient>
            </Container>
        )
    }
}