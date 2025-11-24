import getConfig from 'next/config';
import type { Metadata } from 'next';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig?.basePath || '';

export default function generateMetadata({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const metadata: Metadata = {
    title,
    description,
  };

  if (image) {
    metadata.openGraph = {
      images: [`${basePath}/${image}`],
    };
  }

  return metadata;
}
