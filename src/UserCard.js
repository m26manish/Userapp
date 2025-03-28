// src/components/UserCard.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import UserForm from './userform';
import { deleteUser, updateUser } from '../services/api';
import styles from './styles';

const UserCard = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleDelete = () => {
    Alert.alert(
      'Delete User',
      'Are you sure you want to delete this user?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await deleteUser(user.id);
              setNotification({ type: 'success', message: 'User deleted successfully' });
              // In a real app, you would refresh the user list here
            } catch (error) {
              setNotification({ type: 'error', message: error.message });
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  const handleUpdate = async (updatedUser) => {
    try {
      await updateUser(user.id, updatedUser);
      setNotification({ type: 'success', message: 'User updated successfully' });
      setIsEditing(false);
      // In a real app, you would update the user in the list here
    } catch (error) {
      setNotification({ type: 'error', message: error.message });
    }
  };

  return (
    <View style={styles.card}>
      {notification && (
        <View style={[styles.notification, styles[notification.type]]}>
          <Text style={styles.notificationText}>{notification.message}</Text>
        </View>
      )}

      {isEditing ? (
        <UserForm
          user={user}
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{`${user.first_name} ${user.last_name}`}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setIsEditing(true)}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleDelete}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default UserCard;