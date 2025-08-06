export const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    genre: "Sci-Fi, Adventure",
    rating: "PG-13",
    duration: "2h 46m",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    showtimes: [
      { theater: "AMC Empire 25", times: ["12:00 PM", "3:30 PM", "7:00 PM", "10:30 PM"] },
      { theater: "Regal Union Square", times: ["1:15 PM", "4:45 PM", "8:15 PM"] },
      { theater: "Cinemark Downtown", times: ["11:30 AM", "2:45 PM", "6:15 PM", "9:45 PM"] }
    ]
  },
  {
    id: 2,
    title: "Oppenheimer",
    genre: "Biography, Drama",
    rating: "R",
    duration: "3h 0m",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    showtimes: [
      { theater: "AMC Empire 25", times: ["11:00 AM", "3:00 PM", "7:30 PM"] },
      { theater: "Regal Union Square", times: ["12:30 PM", "4:30 PM", "8:30 PM"] },
      { theater: "Cinemark Downtown", times: ["1:00 PM", "5:00 PM", "9:00 PM"] }
    ]
  },
  {
    id: 3,
    title: "Spider-Man: Across the Spider-Verse",
    genre: "Animation, Action",
    rating: "PG",
    duration: "2h 20m",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People.",
    showtimes: [
      { theater: "AMC Empire 25", times: ["10:30 AM", "1:45 PM", "5:00 PM", "8:15 PM"] },
      { theater: "Regal Union Square", times: ["11:45 AM", "3:15 PM", "6:30 PM", "9:45 PM"] },
      { theater: "Cinemark Downtown", times: ["12:15 PM", "4:00 PM", "7:30 PM"] }
    ]
  },
  {
    id: 4,
    title: "The Little Mermaid",
    genre: "Family, Musical",
    rating: "PG",
    duration: "2h 15m",
    poster: "https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    description: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs.",
    showtimes: [
      { theater: "AMC Empire 25", times: ["10:00 AM", "1:30 PM", "4:45 PM", "8:00 PM"] },
      { theater: "Regal Union Square", times: ["11:15 AM", "2:45 PM", "6:00 PM", "9:15 PM"] },
      { theater: "Cinemark Downtown", times: ["9:45 AM", "1:00 PM", "4:15 PM", "7:45 PM"] }
    ]
  },
  {
    id: 5,
    title: "John Wick: Chapter 4",
    genre: "Action, Thriller",
    rating: "R",
    duration: "2h 49m",
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, he must face off against a new enemy.",
    showtimes: [
      { theater: "AMC Empire 25", times: ["2:00 PM", "5:30 PM", "9:00 PM"] },
      { theater: "Regal Union Square", times: ["1:30 PM", "5:00 PM", "8:30 PM"] },
      { theater: "Cinemark Downtown", times: ["2:30 PM", "6:00 PM", "9:30 PM"] }
    ]
  },
  {
    id: 6,
    title: "Guardians of the Galaxy Vol. 3",
    genre: "Action, Adventure",
    rating: "PG-13",
    duration: "2h 30m",
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    description: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and protect one of their own.",
    showtimes: [
      { theater: "AMC Empire 25", times: ["11:45 AM", "3:15 PM", "6:45 PM", "10:15 PM"] },
      { theater: "Regal Union Square", times: ["12:45 PM", "4:15 PM", "7:45 PM"] },
      { theater: "Cinemark Downtown", times: ["10:45 AM", "2:15 PM", "5:45 PM", "9:15 PM"] }
    ]
  }
];

export const theaters = [
  {
    id: 1,
    name: "AMC Empire 25",
    address: "234 W 42nd St, New York, NY 10036",
    phone: "(212) 398-3939"
  },
  {
    id: 2,
    name: "Regal Union Square",
    address: "850 Broadway, New York, NY 10003",
    phone: "(212) 253-6266"
  },
  {
    id: 3,
    name: "Cinemark Downtown",
    address: "123 Cinema Blvd, New York, NY 10001",
    phone: "(212) 555-0123"
  }
];