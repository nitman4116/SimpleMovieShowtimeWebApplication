import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(movie)} style={styles.container}>
      <Card containerStyle={styles.card}>
        <View style={styles.content}>
          <Image source={{ uri: movie.poster }} style={styles.poster} />
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={2}>{movie.title}</Text>
            <Text style={styles.genre}>{movie.genre}</Text>
            <View style={styles.metadata}>
              <Text style={styles.rating}>{movie.rating}</Text>
              <Text style={styles.duration}>{movie.duration}</Text>
            </View>
            <Text style={styles.description} numberOfLines={3}>
              {movie.description}
            </Text>
            <View style={styles.showtimesPreview}>
              <Text style={styles.showtimesLabel}>Showtimes available at:</Text>
              <Text style={styles.theaterCount}>
                {movie.showtimes.length} theater{movie.showtimes.length !== 1 ? 's' : ''}
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  card: {
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: 0,
  },
  content: {
    flexDirection: 'row',
    padding: 16,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  genre: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  metadata: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#ff6b35',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  duration: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  description: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
    marginBottom: 12,
  },
  showtimesPreview: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  showtimesLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  theaterCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
});

export default MovieCard;