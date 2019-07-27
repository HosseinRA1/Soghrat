import React, {Component} from 'react'
import {View, Icon} from 'native-base'
import {TouchableOpacity , Image} from 'react-native'
import home from "../../assets/styles/home";
import Text from "../../components/Text";
import question from "../../assets/styles/question";
import {StatusBar} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Actions} from 'react-native-router-flux'

export default class Home extends Component {
    _start = () => Actions.push('question_page');
    _askButtun = () => {Actions.push('')};
    _settingBtnPress = () => {
      Actions.replace('setting_page')
    };
    render() {
        return (
            <LinearGradient colors={['#023d4f', '#011828']}
                            style={question.container}>
                <StatusBar hidden/>
                <View style={home.topView}>
                    <View>
                        <Text h4>امتیاز من</Text>
                        <Text h3>157800</Text>
                    </View>

                        <TouchableOpacity onPress = {this._settingBtnPress} style = {home.iconButton}>
                            <Icon name='md-settings' style={home.settingIcon}/>
                            <Text h5>تنظیمات</Text>
                        </TouchableOpacity>
                </View>
                <View style = {home.body}>
                    <Image source = {require('../../assets/images/logo-png.png')} style = {home.logo} />
                   <View style = {home.buttonsView}>
                       <TouchableOpacity activeOpacity = {.7} style = {[home.activityButton, {marginRight : -20}]}>
                           <Icon name='ios-list' style={home.startIcon}/>
                           <Text h2>فعالیت</Text>
                       </TouchableOpacity>

                       <TouchableOpacity onPress = {this._start} activeOpacity = {.9} style = {home.startButton}>
                           <Icon name='md-play' style={home.startIcon}/>
                           <Text h2>شروع</Text>
                       </TouchableOpacity>

                       <TouchableOpacity activeOpacity = {.7} style = {[home.activityButton, {marginLeft : -20}]}>
                           <Icon name='md-text' style={home.startIcon}/>
                           <Text h2>بپرس</Text>
                       </TouchableOpacity>
                   </View>
                </View>
            </LinearGradient>
        )
    }
}