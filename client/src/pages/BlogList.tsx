import { useEffect, useState } from "react";
import { createClient } from "@/lib/prismic";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export default function BlogList() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const client = createClient();
                const docs = await client.getAllByType("post", {
                    orderings: [{ field: "my.post.date", direction: "desc" }],
                });
                setPosts(docs);
            } catch (error) {
                console.error("Erro ao carregar posts:", error);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);



    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* HERO SECTION */}
            <section className="relative h-[45vh] flex items-center justify-center bg-gradient-to-br from-[oklch(0.25_0.05_240)] via-[oklch(0.20_0.04_240)] to-[oklch(0.15_0.03_240)] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.03_240)]/80 to-transparent"></div>

                <div className="relative z-10 text-center max-w-4xl px-4 mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Insights de IA
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                        Análises estratégicas, frameworks práticos e perspectivas para levar IA
                        ao centro das decisões do seu negócio com segurança e resultados.
                    </p>
                </div>
            </section>


            {/* LISTAGEM */}
            <section className="py-20 bg-[oklch(0.96_0.01_240)]">
                <div className="container max-w-7xl px-4">

                    {loading ? (
                        <div className="text-center py-20">
                            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[oklch(0.25_0.05_240)] border-r-transparent"></div>
                            <p className="mt-4 text-muted-foreground">Carregando artigos...</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-muted-foreground">Nenhum artigo publicado ainda.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((doc) => {
                                const data = (doc as any).data;
                                const slug = doc.uid;

                                return (
                                    <Link key={slug} href={`/blog/${slug}`}>
                                        <article className="
                      group cursor-pointer bg-white rounded-2xl border border-gray-200/50
                      shadow-sm hover:shadow-2xl hover:border-[oklch(0.75_0.15_195)]/30 
                      transition-all duration-300 overflow-hidden h-full flex flex-col
                    ">

                                            {/* Imagem */}
                                            {data.cover_image?.url && (
                                                <div className="relative overflow-hidden h-56">
                                                    <img
                                                        src={data.cover_image.url}
                                                        alt={data.title?.[0]?.text || ""}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                            )}

                                            {/* Conteúdo */}
                                            <div className="p-6 flex-1 flex flex-col">
                                                <h2 className="text-xl font-bold mb-3 text-[oklch(0.25_0.05_240)] group-hover:text-[oklch(0.65_0.15_195)] transition-colors line-clamp-2">
                                                    {data.title?.[0]?.text}
                                                </h2>

                                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                                                    {data.subtitle?.[0]?.text}
                                                </p>

                                                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-gray-100">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        <span className="font-medium">
                                                            {new Date(data.date).toLocaleDateString("pt-BR", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric"
                                                            })}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center gap-1 text-[oklch(0.75_0.15_195)] group-hover:gap-2 transition-all">
                                                        <span className="font-semibold">Ler artigo</span>
                                                        <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-gradient-to-br from-[oklch(0.25_0.05_240)] to-[oklch(0.20_0.04_240)] text-white">
                <div className="container max-w-4xl text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Pronto para Transformar sua Organização?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Agende uma conversa para discutir como palestras estratégicas sobre IA podem acelerar a transformação do seu negócio.
                    </p>
                    <a
                        href="/?scrollTo=contato"
                        className="inline-block px-8 py-4 bg-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.70_0.12_75)] text-[oklch(0.15_0.03_240)] font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
                    >
                        Falar com Gustavo Reis
                    </a>
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
