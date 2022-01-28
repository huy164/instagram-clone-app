import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchUser} from '../redux/actions/index';

export default class main extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <View>
                <Text>User is logged in</Text>
            </View>
        );
    }
}
