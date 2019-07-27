import React, {Component} from 'react'
import {Icon, View} from 'native-base'
import question from "../../assets/styles/question";
import Text from "../../components/Text";
import {Image, StatusBar, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import setting from "../../assets/styles/setting";
import CustomButton from "../../components/CustomButton";
import {Actions} from "react-native-router-flux";

export default class Setting extends Component {
    state = {
        name: 'حاتم علیجانپور',
        uri: 'https://static.farakav.com/files/pictures/01421231.jpg?h=192'
    };
    _editProfile = () => {
        Actions.push('edit_profile')
    };
    _homePage = () => {
        Actions.replace('home')
    };

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
                        <Image source={require('../../assets/images/main-page-image.png')} style={question.topImage}/>

                    </View>
                    <TouchableOpacity onPress={this._homePage} style={question.homeIconView}>
                        <Icon style={question.homeIcon} name="md-home"/>
                    </TouchableOpacity>
                </View>

                <View style={setting.container}>
                    <Image style={setting.avatar}
                           source={{uri: 'https://static.farakav.com/files/pictures/01421231.jpg?h=192'}}/>
                    <Text h3>{this.state.name}</Text>
                    <View style={{justifyContent: 'space-around', flexDirection: 'column', marginTop: 20}}>
                        <CustomButton onPress={this._editProfile} transparent>
                            ویرایش پروفایل
                        </CustomButton>
                        <CustomButton style={{marginTop: 10}} transparent>
                            شارژ کیف پول
                        </CustomButton>
                        <CustomButton style={{marginTop: 10}} transparent>
                            تنظیمات
                        </CustomButton>
                        <CustomButton style={{marginTop: 10}} transparent borderColor='red'>
                            خروج
                        </CustomButton>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}