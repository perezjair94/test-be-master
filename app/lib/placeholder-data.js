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
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/06/mejores-comics-x-men.jpg?tf=1920x',
  },
  {
    id: '9d4a3d2e-aa89-4e1f-bad1-17c8fe36c5d1',
    name: '4 FANTASTICOS',
    image: 'https://i.blogs.es/03895e/4-fantasticos/1366_2000.webp',
  },
  {
    id: 'e3984b4b-63d7-4f29-b415-8d05b6f4d56e',
    name: 'AVENGERS',
    image:
      'https://www.latercera.com/resizer/9dqTBzKNNKKu48Tw1AHiBXnEZCg=/900x600/filters:focal(415x390:425x380)/cloudfront-us-east-1.images.arcpublishing.com/copesa/YELICM4GFZCPJGQ7GATPQRWDXA.jpg',
  },
  {
    id: 'a6825a9f-91d3-42c8-b82e-8fe95a3a0bf1',
    name: 'GUARDIANES DE LA GALEXIA',
    image: 'https://i.blogs.es/c84032/screenshot_1858/1366_2000.webp',
  },
  {
    id: '3f8f1fb3-6f1d-4e8a-bc27-0a6d27a4374d',
    name: 'IRO MAN',
    image:
      'https://tainthemeat.files.wordpress.com/2016/09/iron-man-126-banner.jpg?w=1024&h=567&crop=1',
  },
];

const movies = [
  {
    id: 'f47d9e5a-84c2-4d1b-a9eb-9c3b71234567',
    title: 'X-MEN 97',
    image:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/06/mejores-comics-x-men.jpg?tf=1920x',
    category: categories[0].id,
  },
  {
    id: '8a3f6b21-2e78-4c9a-afbd-1e5d8e876543',
    title: 'X-MEN Primera Generación',
    image:
      'https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/3976bbac-69a7-4fe6-b4fd-aa1b5df0d483/scale?aspectRatio=1.78&format=webp&width=1440',
    category: categories[0].id,
  },
  {
    id: 'b9c0a8d4-6f32-45e7-8921-3a7f0f987654',
    title: 'X-MEN Dark Phoenix',
    image:
      'https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/e2c85662-bf6f-4aaa-a6e2-cd03470a2a08/scale?aspectRatio=1.78&format=webp&width=1440',
    category: categories[0].id,
  },
];

module.exports = { users, categories, movies };
