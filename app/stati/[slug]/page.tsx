import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleView from "@/components/ArticleView";
import { articles } from "@/lib/articles";

const SITE = "https://www.astanasoapfactory.com";

// только статьи из lib/articles.ts, остальные адреса — 404
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  const url = `/stati/${a.slug}`;
  return {
    title: `${a.title} | ASF`,
    description: a.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      url,
      locale: "ru_RU",
      publishedTime: a.published,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.published,
    inLanguage: "ru",
    mainEntityOfPage: `${SITE}/stati/${a.slug}`,
    author: { "@type": "Organization", name: "Astana Soap Factory", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "Astana Soap Factory",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
  };

  return (
    <>
      <Header base="/" />
      <main>
        <ArticleView
          article={a}
          top={
            <nav aria-label="Навигация" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-muted">
              <a href="/" className="transition-colors hover:text-ink">
                Главная
              </a>
              <span>/</span>
              <a href="/#articles" className="transition-colors hover:text-ink">
                Статьи
              </a>
            </nav>
          }
        />
      </main>
      <Footer base="/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
