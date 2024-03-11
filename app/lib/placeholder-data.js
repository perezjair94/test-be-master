const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@mail.com',
    password: '123456',
  },
];

const categories = [
  {
    id: 'c1b97fc5-0f0b-4f17-aae8-7e5418a92a3f',
    name: 'X-MEN',
    image:
      'https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UY2069_.jpg',
  },
  {
    id: '9d4a3d2e-aa89-4e1f-bad1-17c8fe36c5d1',
    name: 'Fantastic Four',
    image:
      'https://m.media-amazon.com/images/M/MV5BYWNlMzlmZTctMDlhNi00MWYzLThkZGMtNGI3YWViMTIxNjRkXkEyXkFqcGdeQXVyOTkwMTc4ODQ@._V1_FMjpg_UX500_.jpg',
  },
  {
    id: 'e3984b4b-63d7-4f29-b415-8d05b6f4d56e',
    name: 'Avengers',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UY2048_.jpg',
  },
  {
    id: 'a6825a9f-91d3-42c8-b82e-8fe95a3a0bf1',
    name: 'Guardians of the Galaxy',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_FMjpg_UX1012_.jpg',
  },
  {
    id: '3f8f1fb3-6f1d-4e8a-bc27-0a6d27a4374d',
    name: 'IRO MAN',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDJjMDI0YzQtOWM2OC00NmJhLTk3YWMtYmY5NDBkZmVlM2NjXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UY1882_.jpg',
  },
];

const movies = [
  {
    id: 'f47d9e5a-84c2-4d1b-a9eb-9c3b71234567',
    title: 'X-Men: The Animated Series',
    description:
      'A team of mutant superheroes fight for justice and human acceptance in the Marvel Comics universe.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UY2069_.jpg',
    video: 'https://www.youtube.com/embed/pv3Ss8o9gGQ',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[0].id,
  },
  {
    id: '8a3f6b21-2e78-4c9a-afbd-1e5d8e876543',
    title: 'X-Men: First Class',
    description:
      'In the 1960s, superpowered humans Charles Xavier and Erik Lensherr work together to find others like them, but Erik vengeful pursuit of an ambitious mutant who ruined his life causes a schism to divide them.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_FMjpg_UX620_.jpg',
    video: 'https://www.youtube.com/embed/kyQKi5-k0UU',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[0].id,
  },
  {
    id: 'b9c0a8d4-6f32-45e7-8921-3a7f0f987654',
    title: 'Dark Phoenix',
    description:
      'Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix, causing the X-Men to decide if her life is worth more than all of humanity.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_FMjpg_UY2047_.jpg',
    video: 'https://www.youtube.com/embed/kyQKi5-k0UU',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[0].id,
  },
  {
    id: '7e6b5c9d-18a4-4032-bf8e-6d0f12345678',
    title: 'Fantastic Four: The Animated Series',
    description: 'The adventures of Marvel Comic is greatest superhero team.',
    image:
      'https://m.media-amazon.com/images/M/MV5BYWNlMzlmZTctMDlhNi00MWYzLThkZGMtNGI3YWViMTIxNjRkXkEyXkFqcGdeQXVyOTkwMTc4ODQ@._V1_FMjpg_UX500_.jpg',
    video: 'https://www.youtube.com/embed/qcgkXszlfIE',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[1].id,
  },
  {
    id: '2f1a8d76-9c45-4bfa-b837-85e970987654',
    title: 'Fantastic Four',
    description:
      'A group of astronauts gain superpowers after a cosmic radiation exposure and must use them to oppose the plans of their enemy, Doctor Victor Von Doom.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNWU1ZjFjMTctYjA5ZC00YTBkLTkzZjUtZWEyMjgxY2MxYWM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX800_.jpg',
    video: 'https://www.youtube.com/embed/YP-UetX2qX0',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[1].id,
  },
  {
    id: '5c9e7a1b-3d28-482f-b614-7f0e5d876543',
    title: 'The Avengers',
    description:
      'Earth is mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX800_.jpg',
    video: 'https://www.youtube.com/embed/eOrNdBpGMv8',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[2].id,
  },
  {
    id: '4b8e2d1f-67c3-492a-a18d-f5601c876543',
    title: 'Avengers: Age of Ultron',
    description:
      'Earth is mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX864_.jpg',
    video: 'https://www.youtube.com/embed/tmeOjFno6Do',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[2].id,
  },
  {
    id: 'a792f3c8-1d46-4e9b-8c57-2a0d19876543',
    title: 'Avengers: Infinity War',
    description:
      'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UY2048_.jpg',
    video: 'https://www.youtube.com/embed/6ZfuNTqbHE8',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[2].id,
  },
  {
    id: 'e3a7b6d5-804f-48c1-b29a-c0f9a0123456',
    title: 'Guardians of the Galaxy',
    description:
      'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_FMjpg_UX1012_.jpg',
    video: 'https://www.youtube.com/embed/d96cjJhvlMA',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[3].id,
  },
  {
    id: '1f9c5a2b-6d37-43e8-925f-80436f987654',
    title: 'Guardians of the Galaxy Vol. 2',
    description:
      'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord is encounter with his father, the ambitious celestial being Ego',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_FMjpg_UX509_.jpg',
    video: 'https://www.youtube.com/embed/wUn05hdkhjM',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[3].id,
  },
  {
    id: 'c8d6b2a4-3f9e-4757-ae21-9b1c01876543',
    title: 'Iron Man',
    description:
      'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UY2048_.jpg',
    video: 'https://www.youtube.com/embed/8ugaeA-nMTc',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[4].id,
  },
  {
    id: '9e8a3b47-1c6d-4f82-ae57-0d9c61876543',
    title: 'Iron Man 2',
    description:
      'With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father is legacy.',
    image:
      'https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1200_.jpg',
    video: 'https://www.youtube.com/embed/wKtcmiifycU',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[4].id,
  },
  {
    id: 'b3f84a7d-6521-4c0f-9d8e-175a2e876543',
    title: 'Iron Man 3',
    description:
      'When Tony Stark is world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_FMjpg_UX770_.jpg',
    video: 'https://www.youtube.com/embed/YLorLVa95Xo',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[4].id,
  },
];

const favouriteMovies = [
  'f47d9e5a-84c2-4d1b-a9eb-9c3b71234567',
  '5c9e7a1b-3d28-482f-b614-7f0e5d876543',
  'c8d6b2a4-3f9e-4757-ae21-9b1c01876543',
  '9e8a3b47-1c6d-4f82-ae57-0d9c61876543',
  'b3f84a7d-6521-4c0f-9d8e-175a2e876543',
];

const plans = [
  {
    id: '6a9d8c4b-f257-47e3-bc1a-3d9f6c987654',
    name: 'Premium',
    description:
      'A cinematic experience with the best picture and audio quality.',
    price: 9.94,
  },
  {
    id: '3c1f8e9b-5742-4d86-a501-eb72d0123456',
    name: 'Standard',
    description: 'All the entertainment you love, in Full HD video quality.',
    price: 6.88,
  },
  {
    id: '8b7f1e2d-493c-4a65-831d-6c54a1987654',
    name: 'Basic',
    description:
      'A great way to enjoy all your favorite shows and movies on a budget.',
    price: 4.32,
  },
];

module.exports = { users, categories, movies, favouriteMovies, plans };
