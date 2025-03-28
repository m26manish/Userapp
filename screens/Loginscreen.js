// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Authform from '../src/Authform';
import { login } from '../services/api';
import styles from '../src/styles';

const LoginScreen = ({ navigation }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (credentials) => {
    try {
      setLoading(true);
      const token = await login(credentials);
      // Store token (consider using secure storage in production)
      navigation.navigate('user');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Authform onSubmit={handleLogin} />
      {loading && <ActivityIndicator size="large" color="#D32F2F" />}
    </View>
  );
};

export default LoginScreen;