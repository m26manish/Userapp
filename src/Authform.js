// src/components/AuthForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles';

const AuthForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const handleSubmit = () => {
    onSubmit({ email, password });
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

export default AuthForm;