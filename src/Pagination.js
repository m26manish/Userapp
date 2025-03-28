// src/components/Pagination.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <View style={styles.pagination}>
      {pages.map((page) => (
        <TouchableOpacity
          key={page}
          
          style={[
            styles.pageButton,
            currentPage === page && styles.activePageButton,
          ]}
          onPress={() => onPageChange(page)}
        >
          <Text
            style={[
              styles.pageButtonText,
              currentPage === page && styles.activePageButtonText,
            ]}
          >
            {page}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Pagination;