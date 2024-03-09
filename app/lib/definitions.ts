export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Category = {
  id: string;
  name: string;
  image: string;
};

export type Movie = {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  genres: string[];
  stars: string[];
};
