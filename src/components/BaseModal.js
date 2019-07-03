import React, {Component} from 'react'
import Modal from 'react-native-modal'
import {View, StyleSheet} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class BaseModal extends Component {
    state = {
        isModalVisible: false,
    };
    _toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible})
    };

    render() {
        return (
            <Modal onBackdropPress={this._toggleModal} style={{alignItems: 'center'}}
                   isVisible={this.state.isModalVisible}>
                <View style={styles.main}>
                    {this.props.children}
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        padding: 15,
        width: wp('80%'),
        backgroundColor: 'white',
        borderRadius: 20,
    }
});