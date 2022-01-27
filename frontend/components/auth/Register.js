import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }
        this.onSignUp=this.onSignUp.bind(this);
    }
    onSignUp(){
        
    }
    render() {
        return(
        <View>
            <TextInput
            placeholder= "name"
            onTextChange={(name)=>this.setState({name})}
            />
            <TextInput
            placeholder= "email"
            onTextChange={(email)=>this.setState({email})}
            />
            <TextInput
            placeholder= "password"
            secureTextEntry={true}
            onTextChange={(password)=>this.setState({password})}
            />
            <Button 
            title="Sign up"
            onPress={()=>this.onSignUp()}/>
        </View>
        );
    }
}
