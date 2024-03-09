import { movies } from '@/app/lib/placeholder-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const data = movies || [];
  if (category) {
    const filterData = data.filter((item) => item.category === category);
    return Response.json(filterData);
  }
  return Response.json(data);
}
