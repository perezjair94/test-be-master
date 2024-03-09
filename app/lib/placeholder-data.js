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
    name: '4 FANTASTICOS',
    image:
      'https://m.media-amazon.com/images/M/MV5BYWNlMzlmZTctMDlhNi00MWYzLThkZGMtNGI3YWViMTIxNjRkXkEyXkFqcGdeQXVyOTkwMTc4ODQ@._V1_FMjpg_UX500_.jpg',
  },
  {
    id: 'e3984b4b-63d7-4f29-b415-8d05b6f4d56e',
    name: 'AVENGERS',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UY2048_.jpg',
  },
  {
    id: 'a6825a9f-91d3-42c8-b82e-8fe95a3a0bf1',
    name: 'GUARDIANES DE LA GALEXIA',
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
    title: 'X-Men 97',
    description:
      'En el universo de Marvel Comics, los mutantes, gente con superpoderes genéticamente dotados, son perseguidos por un populacho odioso y temeroso. Su refugio es la Academia del profesor Xavier para niños superdotados.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UY2069_.jpg',
    video:
      'https://imdb-video.media-imdb.com/vi2741147929/1434659607842-pgv4ql-1564043871055.mp4?Expires=1710095669&Signature=fdm7USZC6zJwGIHlk1DvJZI8LOHWQaMYyOD01J4olXV1MWwoaO0TcTW4DaLicq5-~ILjbQmFt0m2~hSTSmQxlpBkyuFGVlorblYzdX4XuKTuQHgOb~~L-w43fJl9Lkv1SU25UD6mTnyKidZoDAEA1avphiQjlr7-o2zit8EeUp0Ds2Ef0pjkEmW4H~cmw2iuRmGQLa~XcgHSDBPqgVKS~8lC0jnSmW6G8ziRZ72OqsXp3e-SC8jjKXGv1YjooekR7~9u2vV3POwC2PgzYI0ep8Ab8OmNRntwvbQWGAfoYWaMJ5Qn7Bel9dOKcVzp56kI34MWlKu20TDoMu1jAqohgw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[0].id,
  },
  {
    id: '8a3f6b21-2e78-4c9a-afbd-1e5d8e876543',
    title: 'X-Men Primera Generación',
    description:
      'En la década de 1960, los humanos con superpoderes Charles Xavier y Erik Lensherr trabajan juntos para encontrar otros como ellos, pero la búsqueda vengativa de Erik de un mutante ambicioso que arruinó su vida provoca un cisma que los divide.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_FMjpg_UX620_.jpg',
    video:
      'https://imdb-video.media-imdb.com/vi168926489/1434659607842-pgv4ql-1616202966736.mp4?Expires=1710099360&Signature=U4-sfZdrdiubkBUuT-3pXEsk~r~62MEvpBcezgTB1C3KrX4SeNWLByIV1Z5LE4sxK8f2b~jAj8cEkhK9Fvgq8LNJ-4Q9WcCff0S5EwaHl1lIVSd~WCFhAUkJfDU8t3mjBucMY9r0mdu5RFPZZWa-NF-kSgBLxztEzlE5AoQQhJ6R9N7BLAoU-6AQJ~P-Iwo0WgJefiu~uQ05qEccdOQAUeOblutQHfq1v0tgG9ckRsv2b4Sr5tO1alBJ5lrC7O~8ckqfLTsMFS2q73uAqEGnKApRc4f0rk~ZX3DMDkDmPJ9XZe90F9UTqaNgw1vnq~W0FIp9fS~yjdvs-r4lku0L9g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[0].id,
  },
  {
    id: 'b9c0a8d4-6f32-45e7-8921-3a7f0f987654',
    title: 'X-Men Dark Phoenix',
    description:
      'Jean Grey comienza a desarrollar increíbles poderes que la corrompen y la convierten en un Fénix Oscuro, haciendo que los X-Men decidan si su vida vale más que la de toda la humanidad.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_FMjpg_UY2047_.jpg',
    video:
      'https://imdb-video.media-imdb.com/vi1178778905/1434659607842-pgv4ql-1555510176746.mp4?Expires=1710099897&Signature=uQc-EwY6QF6qWfWrKxElIgSTFYv69lT3VnzL04dQ1DbTlEz030iAcA5AKiDGLmDFqxZK0Ee4K5sHR2A9Zq6wqnDxbAKFmS6Rg1KoV4dnsE3LsaFcId8q0KA7Jd8f-AhRfB16D0GhLQJ43r7AO-4MizJll2NKwpVYZGIJMxg826-TNxTDeQ6lTahnM18RvB38ZkcAZ439SZwdu4bcGSbob-zaEW0c8XdzjxGRIUu4eNruWkUGnB7R6TvQ5a4ScXhfJkcP1fW-~1mrRgytN~7dgyyFWA8kLBKDh5abVvqqAkLQF20dO6xnRUk3tpMUYPAnORl1tnu90aq-yh9li8ofOQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    genres: ['Ciencia ficción', 'Infantil', 'Animación', 'Acción y aventura'],
    stars: ['Cedric Smith', 'Cal Dodd', 'Lenore Zann'],
    category: categories[0].id,
  },
];

module.exports = { users, categories, movies };
