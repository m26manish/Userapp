// src/components/UserForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        value={formData.first_name}
        onChangeText={(text) => handleChange('first_name', text)}
      />

      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        value={formData.last_name}
        onChangeText={(text) => handleChange('last_name', text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.formActions}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserForm;