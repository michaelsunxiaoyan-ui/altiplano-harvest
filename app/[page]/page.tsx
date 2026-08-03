import { notFound } from "next/navigation";
import { Site, type PageKey } from "../site";

const pages: PageKey[] = ["about", "products", "quality", "packaging", "contact"];

export function generateStaticParams() {
  return pages.map((page) => ({ page }));
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  if (!pages.includes(page as PageKey)) notFound();
  return <Site page={page as PageKey} />;
}
