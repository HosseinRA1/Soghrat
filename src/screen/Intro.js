import React, {Component} from 'react'
import LinearGradient from "react-native-linear-gradient";
import {View, Image, TouchableOpacity} from "react-native";
import splash from "../assets/styles/splash";
import AppIntroSlider from "react-native-app-intro-slider";
import Text from "../components/Text";
import intro from "../assets/styles/intro";
import CustomButton from "../components/CustomButton";

const slides = [
    {
        key: 'somethun',
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ',
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ',
        backgroundColor: '#22bcb5',
    },
];

export default class Intro extends Component {
    _renderItem = (item) => {
        return (
            <View style = {intro.description}>
                <Text style = {{textAlign : 'center'}} h4>{item.text}</Text>
            </View>
        );
    };

    render() {
        return (
            <LinearGradient colors={['#023d4f', '#011828']}
                            style={intro.container}>
                <View>
                    <Image source={require('./../assets/images/logo-png.png')}
                           style={splash.logo}/>
                </View>

                <AppIntroSlider
                    renderItem={this._renderItem}
                    slides={slides}
                    paginationStyle ={{padding : 20}}
                    activeDotStyle = {{backgroundColor : '#ff5f74'}}
                    dotStyle = {{backgroundColor : 'white'}}
                />
              <View style = {intro.skip}>
                  <CustomButton small >
                      بلدم
                  </CustomButton>
              </View>
            </LinearGradient>
        )
    }
}