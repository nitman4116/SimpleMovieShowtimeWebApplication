# 🎬 Movie Showtime App

A beautiful and modern movie showtime application built with React Native and Expo. Browse current movies, view detailed information, and book tickets for showtimes at various theaters.

## Features

- **Movie Listings**: Browse a curated list of current movies with posters, ratings, and descriptions
- **Search Functionality**: Search movies by title, genre, or rating
- **Detailed Movie View**: View comprehensive movie information including synopsis and showtimes
- **Theater Showtimes**: See available showtimes across multiple theaters
- **Ticket Booking**: Select and book tickets for specific showtimes
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Cross-Platform**: Works on iOS, Android, and web

## Screenshots

The app features:
- Clean, modern card-based movie listings
- Interactive search with real-time filtering
- Detailed movie modals with booking functionality
- Professional theater and showtime displays

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on your preferred platform:
   - **iOS**: Press `i` in the terminal or scan QR code with Camera app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app
   - **Web**: Press `w` in the terminal

## Project Structure

```
├── App.js                           # Main app entry point
├── movieData.js                     # Sample movie and theater data
├── components/
│   ├── MovieShowtimeApp.js         # Main app component with search
│   ├── MovieCard.js                # Individual movie card component
│   └── MovieDetailsModal.js        # Movie details and booking modal
└── README.md                       # This file
```

## Sample Data

The app comes with 6 sample movies including:
- Dune: Part Two
- Oppenheimer
- Spider-Man: Across the Spider-Verse
- The Little Mermaid
- John Wick: Chapter 4
- Guardians of the Galaxy Vol. 3

Each movie includes multiple showtimes across 3 different theaters.

## Customization

### Adding New Movies

Edit `movieData.js` to add new movies:

```javascript
{
  id: 7,
  title: "Your Movie Title",
  genre: "Action, Adventure",
  rating: "PG-13",
  duration: "2h 30m",
  poster: "https://your-poster-url.jpg",
  description: "Your movie description...",
  showtimes: [
    { theater: "Theater Name", times: ["1:00 PM", "4:00 PM", "7:00 PM"] }
  ]
}
```

### Styling

Each component has its own StyleSheet. Modify the styles in the respective component files to customize the appearance.

## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **React Native Elements**: UI component library
- **Expo Vector Icons**: Icon library for beautiful icons

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For support or questions, please open an issue in the repository.

---

Enjoy browsing movies and booking your next cinema experience! 🍿
