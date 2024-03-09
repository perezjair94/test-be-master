import { unstable_noStore as noStore } from 'next/cache';
import { fetcher } from './utils';
import { Category } from './definitions';

export async function fetchCategories(): Promise<Category[] | undefined> {
  noStore();
  try {
    const response = await fetcher('/categories', {
      next: { tags: ['categories'] },
    });
    return response;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch category data.');
  }
}
