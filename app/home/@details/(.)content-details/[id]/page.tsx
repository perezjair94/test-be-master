import ContentDetails from '@/app/ui/home/content-details';
import Modal from '@/app/ui/modal';

export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  return (
    <Modal>
      <ContentDetails movie={params.id as string} />
    </Modal>
  );
}
