import { unstable_noStore as noStore } from 'next/cache';
import { fetcher } from './utils';
import { Category, Movie } from './definitions';

export async function fetchCategories(): Promise<Category[] | undefined> {
  noStore();
  try {
    const response = await fetcher('/categories', {
      next: { tags: ['categories'] },
    });
    return response;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch category data.');
  }
}

export async function fetchCategory(category: Category['id']) {
  noStore();
  try {
    const response = await fetcher(`/categories/${category}`, {
      next: { tags: ['category'] },
    });
    return response;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch category data.');
  }
}

export async function fetchMovies(
  category: Category['id'],
): Promise<Movie[] | undefined> {
  noStore();
  try {
    const response = await fetcher(`/movies?category=${category}`, {
      next: { tags: ['movies'] },
    });
    return response;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch movies data.');
  }
}

export async function fetchHomeData(category: Category['id']) {
  noStore();
  try {
    const data = await Promise.all([
      fetchCategory(category),
      fetchMovies(category),
    ]);
    return {
      category: data[0],
      movies: data[1],
    };
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch homde data.');
  }
}
