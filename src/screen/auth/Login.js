import React, {Component} from 'react'
import {TextInput, Image, StatusBar} from 'react-native'
import {View, Content ,Container} from 'native-base'
import login from "../../assets/styles/login";
import LinearGradient from "react-native-linear-gradient";
import question from "../../assets/styles/question";
import CustomButton from "../../components/CustomButton";
import Text from "../../components/Text";
import BaseModal from "../../components/BaseModal";

export default class Login extends Component {
    state = { text: '', correct:true };
    checkInput =(text)=> {
        this.setState({text});
        console.log(text.props);
        if (isNaN(text)) {
            this.setState({correct: false})
        }
        else {
            this.setState({correct: true})
        }
    };

    _send = () => {
        this.modal._toggleModal();
    };
    render() {
        const isCorrect =this.state.correct;
        return (
            <Container>
                <StatusBar hidden/>
                <LinearGradient colors={['#023d4f', '#011828']}
                                style={[question.container]}>
                    <Image source={require('../../assets/images/main-page-image.png')} style={login.topImage}/>
                    <Content contentContainerStyle={login.contentStyle}>
                        <View style={login.item}>
                            <Text  h4>شماره موبایل</Text>
                            <TextInput
                                autoFocus={true}
                                onChangeText={(text) => this.checkInput(text)}
                                value={this.state.text}
                                placeholder='09*********'
                                placeholderTextColor='white'
                                keyboardType='number-pad'
                                maxLength={11}
                                style={[login.input , {borderColor : isCorrect ? 'white' : 'red', letterSpacing : 5}]}/>
                        </View>
                        <View style = {login.buttonView}>
                            <CustomButton  onPress={this._send} icon>
                                مرحله بعد
                            </CustomButton>
                        </View>
                        <BaseModal ref = {(ref) => this.modal = ref}>
                            <View style = {{alignSelf : 'center'}}>
                                <Text h3 style = {{textAlign:'center'}} color = 'black'>لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم </Text>
                            </View>
                           <View style = {{alignSelf : 'center' , marginTop: 10}}>
                               <CustomButton onPress={this._send}  small>
                                   باشه
                               </CustomButton>
                           </View>
                        </BaseModal>
                    </Content>
                </LinearGradient>
            </Container>
        )
    }
}