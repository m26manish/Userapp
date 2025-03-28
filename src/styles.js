// src/styles.js
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F5E9', 
    alignContent:"center",
  
  },

  // Typography
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 25,
    textAlign: 'center',
    color: '#2E7D32', 
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#455A64',
    marginBottom: 15,
    textAlign: 'center',
  },

  formContainer: {
    marginBottom: 25,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  input: {
    height: 48,
    borderColor: '#B0BEC5',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#263238',
  },
  inputFocused: {
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  label: {
    marginBottom: 8,
    fontWeight: '600',
    color: '#455A64',
    fontSize: 14,
  },
  error: {
    color: '#D32F2F',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Cards
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    width: width - 40, // Responsive width

  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#E8F5E9',
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
    color: '#263238',
  },
  userEmail: {
    textAlign: 'center',
    color: '#607D8B',
    marginBottom: 12,
    fontSize: 14,
  },

  // Buttons
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    flex: 1,
    marginRight: 8,
    borderRadius:10,
    alignItems:"center"
  },
  deleteButton: {
    backgroundColor: '#F44336',
    flex: 1,
    marginLeft: 8,
    borderRadius:10,
    alignItems:"center"
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: 0.5,
  },

  // Pagination
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  pageButton: {
    padding: 12,
    marginHorizontal: 5,
    backgroundColor: '#CFD8DC',
    borderRadius: 8,
    minWidth: 45,
    alignItems: 'center',
  },
  activePageButton: {
    backgroundColor: '#2E7D32',
  },
  pageButtonText: {
    color: '#455A64',
    fontWeight: '600',
  },
  activePageButtonText: {
    color: '#FFFFFF',
  },

  // Notifications
  notification: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  success: {
    backgroundColor: '#C8E6C9',
    borderLeftWidth: 4,
    borderLeftColor: '#2E7D32',
  },
  error: {
    backgroundColor: '#FFCDD2',
    borderLeftWidth: 4,
    borderLeftColor: '#D32F2F',
  },
  notificationText: {
    flex: 1,
    color: '#263238',
    fontWeight: '500',
    marginLeft: 10,
  },

  // Logout button
  logoutButton: {
    alignSelf: 'flex-end',
    marginBottom: 15,
    marginTop: 10,
    borderRadius: 25, // Pill shape
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#2E7D32',
    borderWidth: 1.5,
    backgroundColor: 'rgba(255,255,255,0.7)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    color: '#2E7D32',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 8,
  },

  // Form actions
  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#2E7D32',
    padding: 14,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#607D8B',
    padding: 14,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
  },

  // List container
  listContainer: {
    paddingBottom: 25,
  },

  // Additional decorative elements
  divider: {
    height: 1,
    backgroundColor: '#B0BEC5',
    marginVertical: 20,
    opacity: 0.5,
  },
  icon: {
    marginRight: 10,
  },
});