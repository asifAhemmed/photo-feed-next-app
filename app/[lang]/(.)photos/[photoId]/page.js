import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

export default async function InterceptingPhotosPage({ params }) {
  const { photoId, lang } = await params;
  return (
    <Modal>
      <PhotoDetails id={photoId} lang={lang} />
    </Modal>
  );
}
