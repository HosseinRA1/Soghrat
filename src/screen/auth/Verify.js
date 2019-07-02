import React , {Component} from 'react'
import {Image, StatusBar, TextInput ,TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import question from "../../assets/styles/question";
import login from "../../assets/styles/login";
import {Container, Content, View , Icon} from "native-base";
import Text from "../../components/Text";
import CustomButton from "../../components/CustomButton";
import {Actions} from "react-native-router-flux";

export default class Verify extends Component{
    _verify = () => {
        Actions.replace('home')
    };
    _backPress = () => {
        Actions.pop()
    };
    render(){
        return(
            <Container>
                <StatusBar hidden/>
                <LinearGradient colors={['#023d4f', '#011828']}
                                style={question.container}>
                    <Image source={require('../../assets/images/main-page-image.png')} style={login.topImage}/>
                    <View style ={login.backIconView}>
                       <TouchableOpacity onPress = {this._backPress} >
                           <Icon name = 'md-arrow-forward' style={login.backIcon} />
                       </TouchableOpacity>
                    </View>
                    <Content contentContainerStyle={login.contentStyle}>
                        <View style={login.item}>
                            <Text  h4>کد تایید</Text>
                            <TextInput
                                autoFocus={true}
                                keyboardType='number-pad'
                                maxLength={4}
                                style={[login.input , {borderColor : 'white' , letterSpacing: 10}]}/>
                        </View>
                        <View style = {login.buttonView}>
                            <CustomButton onPress={this._verify} icon>
                                مرحله بعد
                            </CustomButton>
                        </View>
                        <View style = {login.sendAgainButton}>
                               <Text h4 onPress = {this._verify} style = {{textDecorationLine : 'underline'}}>ارسال مجدد کد</Text>
                        </View>
                    </Content>
                </LinearGradient>
            </Container>
        )
    }
}