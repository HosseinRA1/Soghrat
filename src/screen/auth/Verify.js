import React, {Component} from 'react'
import {Image, StatusBar, TextInput, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import question from "../../assets/styles/question";
import login from "../../assets/styles/login";
import {Container, Content, View, Icon} from "native-base";
import Text from "../../components/Text";
import CustomButton from "../../components/CustomButton";
import {Actions} from "react-native-router-flux";

export default class Verify extends Component {
    _verify = () => {
        Actions.replace('home')
    };
    _backPress = () => {
        Actions.pop()
    };

    render() {
        return (
            <Container>
                <StatusBar hidden/>
                <LinearGradient colors={['#023d4f', '#011828']}
                                style={question.container}>
                    <Image source={require('../../assets/images/main-page-image.png')} style={login.topImage}/>
                    <View style={login.backIconView}>
                        <TouchableOpacity onPress={this._backPress}>
                            <Icon name='md-arrow-forward' style={login.backIcon}/>
                        </TouchableOpacity>
                    </View>
                    <Content contentContainerStyle={login.contentStyle}>
                        <View style={{justifyContent: 'space-between', flex: .7}}>
                            <View style={{alignItems: 'center'}}>
                                <Text h3>کد به شماره 195 8686 0919 ارسال شد</Text>
                                <Text h4 onPress={this._verify} style={{textDecorationLine: 'underline'}}>ویرایش
                                    شماره</Text>
                            </View>
                            <View style={login.buttonView}>
                                <Text h4>کد تایید</Text>
                                <TextInput
                                    autoFocus={true}
                                    keyboardType='number-pad'
                                    maxLength={4}
                                    style={[login.input, {borderColor: 'white', letterSpacing: 10}]}/>
                              <View style = {{marginTop : 10}}>
                                  <CustomButton onPress={this._verify} icon>
                                      مرحله بعد
                                  </CustomButton>
                              </View>
                            </View>
                            <View style={login.sendAgainButton}>
                                <Text> ثانیه 36 </Text>
                                <Text h4 onPress={this._verify} style={{textDecorationLine: 'underline'}}>ارسال مجدد
                                    کد</Text>
                            </View>
                        </View>
                    </Content>
                </LinearGradient>
            </Container>
        )
    }
}