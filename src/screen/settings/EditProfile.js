import React, {Component} from 'react'
import {Icon, View} from 'native-base'
import question from "../../assets/styles/question";
import Text from "../../components/Text";
import {Image, StatusBar , TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from 'react-native-image-crop-picker';
import CustomButton from "../../components/CustomButton";
import Input from "../../components/settingsComponent/Input";
import {Content, Container} from 'native-base'
import UserAvatar from 'react-native-user-avatar'
import editProfile from "../../assets/styles/editProfile";
import {Actions} from "react-native-router-flux";

export default class EditProfile extends Component {
    state = {
        uri: 'https://static.farakav.com/files/pictures/01421231.jpg?h=192',
        image: null,
    };
    _openPicker = () => {
        ImagePicker.openPicker({
            width: 80,
            height: 80,
            cropping: true
        }).then(image => {
            this.setState({image: {uri: image.path, width: image.width, height: image.height, mime: image.mime}})
        });
    };

    _openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState({image: {uri: image.path, width: image.width, height: image.height, mime: image.mime}})
        });
    };

    _checkProfile = () => {
        if (this.state.image === null) {
            return (
                <UserAvatar size="90" name="حاتم علیجانپور" />)
        } else {
            return (<Image style={editProfile.avatar} source={this.state.image}/>)
        }
    };
    _backPress = () => {
        Actions.pop()
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
                        <TouchableOpacity onPress = {this._backPress} style={question.homeIconView}>
                            <Icon style={question.homeIcon} name="md-arrow-forward"/>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style = {editProfile.avatarButton} onPress={this._openPicker}>
                        {this._checkProfile(this.state)}
                    </TouchableOpacity>
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