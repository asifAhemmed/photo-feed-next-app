import PhotoDetails from "@/components/PhotoDetails";

export default async function PhotoDetailsPage({params}) {
    const { photoId, lang } = await params;
    return (
        <PhotoDetails id={photoId} lang={lang} />
    );
}