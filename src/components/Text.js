import React, {Component} from 'react';
import {Text as BaseText} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Text extends Component {
    render(){
        let {style = {}, fontSize , color = 'white' ,h2 = false, h3 = false, h4 = false, h5 = false, h6 = false} = this.props;
        if (h2) {
            fontSize =hp('3.2%') //fontSize:22
        }
        if (h3) {
            fontSize = hp('2.7%') //fontSize:18
        }
        if (h4) {
            fontSize = hp('2%') //fontSize:14
        }
        if (h5) {
            fontSize = hp('1.8%') //fontSize:12
        }
        if (h6) {
            fontSize = hp('1.5%') //fontSize:10
        }
        return (
            <BaseText {...this.props}
                      style={[{fontFamily: 'IRANYekanMobileMedium', writingDirection: 'rtl', color, fontSize}, style]}>
                {this.props.children}
            </BaseText>
        );
    }
}