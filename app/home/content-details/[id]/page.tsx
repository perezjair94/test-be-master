import ContentDetails from '@/app/ui/home/content-details';

export default function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  return <ContentDetails movie={params.id as string} />;
}
