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
    video:
      'https://imdb-video.media-imdb.com/vi2741147929/1434659607842-pgv4ql-1564043871055.mp4?Expires=1710095669&Signature=fdm7USZC6zJwGIHlk1DvJZI8LOHWQaMYyOD01J4olXV1MWwoaO0TcTW4DaLicq5-~ILjbQmFt0m2~hSTSmQxlpBkyuFGVlorblYzdX4XuKTuQHgOb~~L-w43fJl9Lkv1SU25UD6mTnyKidZoDAEA1avphiQjlr7-o2zit8EeUp0Ds2Ef0pjkEmW4H~cmw2iuRmGQLa~XcgHSDBPqgVKS~8lC0jnSmW6G8ziRZ72OqsXp3e-SC8jjKXGv1YjooekR7~9u2vV3POwC2PgzYI0ep8Ab8OmNRntwvbQWGAfoYWaMJ5Qn7Bel9dOKcVzp56kI34MWlKu20TDoMu1jAqohgw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi168926489/1434659607842-pgv4ql-1616202966736.mp4?Expires=1710099360&Signature=U4-sfZdrdiubkBUuT-3pXEsk~r~62MEvpBcezgTB1C3KrX4SeNWLByIV1Z5LE4sxK8f2b~jAj8cEkhK9Fvgq8LNJ-4Q9WcCff0S5EwaHl1lIVSd~WCFhAUkJfDU8t3mjBucMY9r0mdu5RFPZZWa-NF-kSgBLxztEzlE5AoQQhJ6R9N7BLAoU-6AQJ~P-Iwo0WgJefiu~uQ05qEccdOQAUeOblutQHfq1v0tgG9ckRsv2b4Sr5tO1alBJ5lrC7O~8ckqfLTsMFS2q73uAqEGnKApRc4f0rk~ZX3DMDkDmPJ9XZe90F9UTqaNgw1vnq~W0FIp9fS~yjdvs-r4lku0L9g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi1178778905/1434659607842-pgv4ql-1555510176746.mp4?Expires=1710099897&Signature=uQc-EwY6QF6qWfWrKxElIgSTFYv69lT3VnzL04dQ1DbTlEz030iAcA5AKiDGLmDFqxZK0Ee4K5sHR2A9Zq6wqnDxbAKFmS6Rg1KoV4dnsE3LsaFcId8q0KA7Jd8f-AhRfB16D0GhLQJ43r7AO-4MizJll2NKwpVYZGIJMxg826-TNxTDeQ6lTahnM18RvB38ZkcAZ439SZwdu4bcGSbob-zaEW0c8XdzjxGRIUu4eNruWkUGnB7R6TvQ5a4ScXhfJkcP1fW-~1mrRgytN~7dgyyFWA8kLBKDh5abVvqqAkLQF20dO6xnRUk3tpMUYPAnORl1tnu90aq-yh9li8ofOQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi2506201369/1434659607842-pgv4ql-1564485116936.mp4?Expires=1710109480&Signature=miA7BhqARoQZEPJ-tyk4JfgF3E3Tx7ZIAtKEijQ-X6JjpRhU~x2m0oXseddR~DWZs6nVslv3eS8Yewg1JvOJhEfIwtfxSVViYMCU8HzvNPDlhbmcxy7Mgf84P2380qXStv3Tvm-9cQSeiJ3Y4zpsYpkuTaqEH6sDRvY9dUjTyItoQLJ8iG1Eh05hPQLS7BQKC2M6TVIrts1aH7a46iXvtMxiqXeneSLnKOJpPk8IuuHMeuRxzoD1UalXPNiQ7jIAqTCMO1VcWRQ3XaJ1-M90SQiyHPGuoCDqucFyPf8HM6cmkMeUdDP36T1wejL4h23iQIuvChg9EDd3jVX0NGdKxA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi2678456601/1434659607842-pgv4ql-1563468729093.mp4?Expires=1710109880&Signature=odYyXQuZjQL1fPCP~mnvXEHAUG5r6Z9t7fimsOiiyZ7glNXHCs3WXjzV4V~dCSrLV-H8LH5fEoqzzl2n11zwzZvvLcODkISxd~35F9vFrLaIXe3hsgzJE9ARDDg8jeiwHEYVHFUXZ6KVp7pKwy~imGdDKt18Cyg1tomBgvDMAZpS8a5NziobuxbjN~uLvcRRm4ycvDnca42ML0WOlCzTGGjaKiP64KYMLQs6NVLxdhhdedOs3PSNaWm3BY49spol0HCiDxAZezPOde1wFbWcp2hX212PQw00CVYjewso31sZxRNQZUPGXKDEwCOep7OEPxb0DELladbYloBJXQ7Mkw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi1891149081/1434659607842-pgv4ql-1616202397016.mp4?Expires=1710110240&Signature=pAtFeIfZB9SPQfPd3kPU0LdsKrKusCgQpK2pwsj62Pr3H8mrHjvb9m50zIDHn0KqRw4ayAOXMbm4Ubqy-H8GjP8a30Fi3ktUVq8b3OlV9av0viheywT-zUt7Sv8VUHXsFqwX3pjdao5bvDjRMdoFsCKZIVCMvhmuAxljMm38duqQmy3EiMOlkKkQ5BMcgLCB5icoYUbKEPQ~BaCgw2dJGKoR5Sf6miijCxeIJzwEz8LmBFawBbYYVlWZL2WIxpTRR3GYpdVmX1FavSJu0RkgnKXEII77LmCYDbThr-ccgoKNZ4kuuA3Xn92mruH6eS2KsjvSJlev2khoe7tHq--VUw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi2821566745/1434659607842-pgv4ql-1612218463733.mp4?Expires=1710110391&Signature=GiB6QcWjCme7PO8EjZxYye281z~ycx2Z7pfC2rCMF75E2B1-GlSawLkZN5Ul5hlQDu4GzKoszgH8rjLcJAszeMv4n~TK5SjVJp72raTIgagq3QhtGjZq3VLxvjbRbYKcyjDkYyYrgJXv8lAhm~WIC4Cy2n1vgEzwSAOD3gNbizpLAmLf8qQQ0ntU2fG7aFA2lR9zahEFL4fm1En5-HdqUXBVcHJgQqYx29yqRbar1XN6aLaQTaNGDFc-NbAuvVGmL3HhQQbz8kl4w5V7eQhMoNSXHqqS7vE9KD-UgPtH-0lzxtK~ckwqosq-faXURV-BHc-bfe7UATijDnG4UvXahA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi528070681/1434659607842-pgv4ql-1523121356094.mp4?Expires=1710110566&Signature=pFx-YccatEr7rL-hlQEDVLgzZskkOJIP76s1nR0IYqoBt5zO8U1Cf44~UnmMTPGnTZ~NwofPdx5PRKlfPnLrSIatcAI5ACP8Pa0PsHMyzYMevcYFacK-WznbHNjeBTyaDaFIeXjFIf-vOqNKzmjxSL8~1jpfGSY3ECCKpm18GVPQB8zJlTAtTyYSYMl4~jQA8YszIaaWV0BUj3l52siFlJieXd8cWeSbMx~1JfrVw4L2rnHXwyUZGrVh2dRHJ4WP-5KP3hlZVKCkWHEwoRMitANi7V-Q5b6b07MVjXX9idFDN2k2wFvwIfaEYXnBAjZ9RIVbIzEtiHOLRFuWkZmI3w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi1441049625/1434659607842-pgv4ql-1440784693231.mp4?Expires=1710110857&Signature=swG9a5k-UcWBukZOkkhUSwBnIhiYAo2sJviN7T5aC5W5Ve5IGaxCf0UDUM1xt2JkAItyBgj87MWklwd7rATv4ShM5NZku9eGGc4jL90v6Bck~4MrxRPvkNWOM9XFRzlx2WT9n9C02xRiQv4l30dfJQhbR6-BaRu2MbzQyN565x3bGpF75SGxVjnn9u5dTBcu8Q77QHUFQxJdYOEJg~M6jUzKewMjIVpTQP8XcVmgeJxWnDmCwNWD1carMdQbA53S6CKSG771OLDmcY7py1Flv7kjCn3h6P3rXaEmAvFoBiZuuHvUUhMcF~Y-ytUORUb-ZyxQL6nIxLE4kzA-5ONrGw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi3076896281/1434659607842-pgv4ql-1488345605332.mp4?Expires=1710111072&Signature=iZmidWqrmckh7sgzo574ox9tT5epMT11zOlzZ7umkzdKFQyxaoOs4GvtpdRWyyAW5FSjXZeDDSe-vyu4f~3B5TD7M73SomV~0RPMrruHYgH9rSrgIgUYma-f3SEU6hv0vtqsAlZTfeDgcKfnLlKGbre1Qxb-~fHyHdtZyvZ07dzkmdqhC5s-Dg8xPpmQDBqM4i0KFlYNBqcNqWNeqmEXCHPe6sTmRmPltiCEhIKslThZeKfrUXP-ZITvnsueSzvHgwZGwPTj2J7korQuOhrRdee1zKpn0MkSBmHZ2fqmQvbMyF~Qigz6oG41MLZU4BjQPdSUDCoO9IBP0dB9GpNa2A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi447873305/1434659607842-pgv4ql-1616202365476.mp4?Expires=1710111211&Signature=TqjCZeS5uHQofAN4LfkdXbJnZ3EItOumtD1AyhF9oeH~wEEzvW7gEcKyulvN8uvxqbMXFK~0~surbPkeq91Hdba7ytf8Jgd7r23TJcLCRCN7GJ8Ay1IY1LyZ~A8tFL8f21fhBXEH3z21gTedf2OeszYWrIL7kc4Rk~lCGaMEVle7FIh6Wfxj1xZwig6vNK4R6Kj1i1NfN-J45Y~iLate0nIZFJROEKmwqzKNPEXq~z0Qn75NBY4TFr8yaweBbvfC1A4Z0O-AYoZzQc~mXA36C8uhzXh4ZbUuLIXqXmtNlxyhr~lIV1LoS4ZHb4sw67kNPNKENB7HolrGHRpqDXX~jA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi2256077849/1434659607842-pgv4ql-1616202755997.mp4?Expires=1710111333&Signature=dvbVO421CA3URzqzplDgbiwHBAJhYvHovToEbcK3YVsQriKumxrLtEOF0udhU3A3P1IQzck6kMua7ZeaZ3oTz79Q8YMlUuq~4ZzLqF9vD377RBxTmcetBOnsaP3-LqJHQYltqBRwoirfn8dbHAVkGM24ItxghcoTUDSWB4L1168m4D2ZEquWpMHRjmK5ASZcmjbcBalztY248b~3BQIGE7N85tIqmBJdl6pAHIYawXGfi14JnrJoV0bp2xWtlCBvUN2IslFqYrBEHBzfLwRDF5H8nT-TasXEZ3eCb7Ro7iRqGO2p0CujR-xiaYsaTmrCUI7uALeonvYFku-FDOn-nQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
    video:
      'https://imdb-video.media-imdb.com/vi2830738969/1434659607842-pgv4ql-1616202784498.mp4?Expires=1710111512&Signature=jvnyvcUOvGD3Sk8LJkZWEmo2KFob2KRPselFOOKwj3ob2cc4f1yEHaQog8lX80UfIer61gxHXWG~OD5WFDAF~aWWktJZjUjHht-MGrWTl3LqS-gHX-Q9MVOM1v6pcGjfHRmVHQBsrcS4uynuKUWA54jAREKuoRswTEInLmQUpc~dsdYrhtTkVvJh7nxCE5NJHw7F7F3BBZ82gFSfJC0Rl2Y5ChFa8zB35NFIm3yA2sxNa943FnMI2DdkFuKMpJMZKv~NnZ66liavxP3F-HFIckiuYkERRvbeYi6jFh8WmcjNlx8xH0~GbkS1LcjkFlILhbiDu6g4T1oGuDPkOo~oxw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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

module.exports = { users, categories, movies, favouriteMovies };
