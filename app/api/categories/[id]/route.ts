import { categories } from '@/app/lib/placeholder-data';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const category =
    categories.find((category) => category.id === params.id) || {};
  return Response.json(category);
}
