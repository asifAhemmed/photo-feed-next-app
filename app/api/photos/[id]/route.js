import { NextResponse } from "next/server";
import { getPhotoById } from "@/lib/image-data";

export async function GET(request, { params }) {
  const { id: photoId } = await params;
  const photo = await getPhotoById(photoId);
  return NextResponse.json(photo);
}
