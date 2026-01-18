import { useEffect, useState } from "react";
import { createClient } from "@/lib/prismic";
import { PrismicRichText } from "@prismicio/react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { Calendar, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react";

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const client = createClient();
        const doc = await client.getByUID("post", slug);
        setPost(doc);
      } catch (error) {
        console.error("Erro ao carregar post:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container py-32 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[oklch(0.25_0.05_240)] border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <Link href="/blog" className="text-[oklch(0.65_0.15_195)] hover:underline">← Voltar para o blog</Link>
        </div>
      </div>
    );
  }

  const data = (post as any).data;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = data.title?.[0]?.text || '';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* BREADCRUMBS */}
      <div className="bg-[oklch(0.96_0.01_240)] border-b border-gray-200/50 pt-20">
        <div className="container py-4 px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-[oklch(0.65_0.15_195)] transition-colors">Home</Link>
            <span>/</span>
          <Link href="/blog" className="hover:text-[oklch(0.65_0.15_195)] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground font-medium line-clamp-1">{data.title?.[0]?.text}</span>
          </div>
        </div>
      </div>

      {/* ARTICLE HEADER */}
      <article className="bg-white">
        <div className="container max-w-4xl px-4 py-12">
          
          {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[oklch(0.65_0.15_195)] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o blog
        </Link>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(data.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
                })}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[oklch(0.25_0.05_240)]">
            {data.title?.[0]?.text}
          </h1>

          {/* Subtitle */}
          {data.subtitle?.[0]?.text && (
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {data.subtitle?.[0]?.text}
            </p>
          )}

          {/* Share Buttons */}
          <div className="flex items-center gap-3 pb-8 border-b border-gray-200/50">
            <span className="text-sm text-muted-foreground font-medium">Compartilhar:</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[oklch(0.96_0.01_240)] hover:bg-[oklch(0.65_0.15_195)] hover:text-white transition-all"
              title="Compartilhar no LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[oklch(0.96_0.01_240)] hover:bg-[oklch(0.65_0.15_195)] hover:text-white transition-all"
              title="Compartilhar no Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Cover Image */}
        {data.cover_image?.url && (
          <div className="w-full max-w-5xl mx-auto px-4 mb-12">
            <img
              src={data.cover_image.url}
              alt={data.title?.[0]?.text || ""}
              className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        )}

        {/* Content */}
        <div className="container max-w-4xl px-4 pb-16">
          <div className="
            prose prose-lg max-w-none
            prose-headings:text-[oklch(0.25_0.05_240)] prose-headings:font-bold
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-[oklch(0.65_0.15_195)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[oklch(0.25_0.05_240)] prose-strong:font-semibold
            prose-img:rounded-xl prose-img:shadow-lg
            prose-blockquote:border-l-4 prose-blockquote:border-[oklch(0.65_0.15_195)] prose-blockquote:bg-[oklch(0.96_0.01_240)] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
            prose-code:text-[oklch(0.65_0.15_195)] prose-code:bg-[oklch(0.96_0.01_240)] prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-[oklch(0.15_0.03_240)] prose-pre:text-white
          ">
            <PrismicRichText field={data.content} />
          </div>
        </div>
      </article>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.25_0.05_240)] to-[oklch(0.20_0.04_240)] text-white">
        <div className="container max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gostou do conteúdo?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Leve insights estratégicos de IA para sua organização. Agende uma palestra personalizada para seu time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/?scrollTo=contato"
              className="inline-block px-8 py-4 bg-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.70_0.12_75)] text-[oklch(0.15_0.03_240)] font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              Contratar Palestra
            </a>
          <Link href="/blog" className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-all">
            Ver Mais Artigos
          </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[oklch(0.15_0.03_240)] text-white/60 py-8">
        <div className="container text-center text-sm">
          <p>© {new Date().getFullYear()} Gustavo Reis. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
