import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
  Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const MovieDetailsModal = ({ movie, visible, onClose }) => {
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  const handleBookTicket = (theater, time) => {
    setSelectedShowtime({ theater, time });
    Alert.alert(
      'Booking Confirmation',
      `Would you like to book tickets for "${movie?.title}" at ${theater} for ${time}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Book Now',
          onPress: () => {
            Alert.alert('Success!', 'Your tickets have been booked successfully!');
            onClose();
          },
        },
      ]
    );
  };

  if (!movie) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Movie Details</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.movieHeader}>
            <Image source={{ uri: movie.poster }} style={styles.poster} />
            <View style={styles.movieInfo}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.genre}>{movie.genre}</Text>
              <View style={styles.metadata}>
                <Text style={styles.rating}>{movie.rating}</Text>
                <Text style={styles.duration}>{movie.duration}</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Synopsis</Text>
            <Text style={styles.description}>{movie.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Showtimes</Text>
            {movie.showtimes.map((showtime, index) => (
              <View key={index} style={styles.theaterSection}>
                <Text style={styles.theaterName}>{showtime.theater}</Text>
                <View style={styles.timesContainer}>
                  {showtime.times.map((time, timeIndex) => (
                    <TouchableOpacity
                      key={timeIndex}
                      style={[
                        styles.timeButton,
                        selectedShowtime?.theater === showtime.theater &&
                        selectedShowtime?.time === time &&
                        styles.selectedTimeButton,
                      ]}
                      onPress={() => handleBookTicket(showtime.theater, time)}
                    >
                      <Text
                        style={[
                          styles.timeText,
                          selectedShowtime?.theater === showtime.theater &&
                          selectedShowtime?.time === time &&
                          styles.selectedTimeText,
                        ]}
                      >
                        {time}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 50, // Account for status bar
  },
  closeButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  movieHeader: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'flex-start',
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 12,
    marginRight: 20,
  },
  movieInfo: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  genre: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  metadata: {
    flexDirection: 'row',
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#ff6b35',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 12,
  },
  duration: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  theaterSection: {
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
  },
  theaterName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  timesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  timeButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginBottom: 8,
  },
  selectedTimeButton: {
    backgroundColor: '#007AFF',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  selectedTimeText: {
    color: '#fff',
  },
});

export default MovieDetailsModal;