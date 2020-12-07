import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { useNavigation } from '@react-navigation/native';

import { Card, CardSection, Input, Button, Spinner } from '../common';

const LoginScreen = () => {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <LoginForm />
      </View>
    );
  };

  const {
    emailChanged,
    email,
    passwordChanged,
    password,
    loginUser,
    error,
    loading,
    user,
  } = props;

  const navigation = useNavigation();
  useEffect(() => {
    if (user) {
      //user !== undefined
      navigation.replace('ContactsList');
    }
  }, [user]);

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="james@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={emailChanged}
          value={email}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Password"
          placeholder="password"
          onChangeText={passwordChanged}
          value={password}
        />
      </CardSection>

      {error !== '' && (
        <View>
          <Text style={{ color: 'red' }}>{error}</Text>
        </View>
      )}

      <CardSection>
        {loading ? (
          <Spinner size="large" />
        ) : (
          <Button onPress={() => loginUser({ email, password })}>Login</Button>
        )}
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Gets the global state
/**STATE: {
  "auth": Object {
    "email": "",
    "password": "",
  }, */
const mapStateToProps = (state) => {
  // console.log('LoginForm state', state);
  const { email, password, error, loading, user } = state.auth;

  // return { email: email, password: password }; //if key: value are equal, you can just do this:
  return { email, password, error, loading, user };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default connect(mapStateToProps, {
  //mapdispatchtoprops
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginScreen);
