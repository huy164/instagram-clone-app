import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import firebase from 'firebase';

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
        const {name,email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password).
        then(result => {
            console.log("create user :"+result)
        })
        .catch(error => {
            console.log("create user error :"+error)
        })
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
