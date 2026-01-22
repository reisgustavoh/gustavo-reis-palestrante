import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  Lightbulb,
  Users,
  TrendingUp,
  ShieldCheck,
  Target,
  Sparkles,
  Mail,
  Linkedin,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
  Zap,
  Building2,
  BookOpen
} from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";


export default function Home() {

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    cargo: "",
    mensagem: "",
    botcheck: ""
  });


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const target = params.get("scrollTo");

    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // espera o DOM estabilizar
      }
    }
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        access_key: "2cef7097-3af5-4652-9934-b5abf321d9b0",
        subject: `Novo contato (Palestras) - ${formData.empresa}`,
        nome: formData.nome,
        email: formData.email,
        empresa: formData.empresa,
        cargo: formData.cargo,
        mensagem: formData.mensagem,
        botcheck: formData.botcheck || ""
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Erro ao enviar formulário");
      }

      toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");

      setFormData({
        nome: "",
        email: "",
        empresa: "",
        cargo: "",
        mensagem: "",
        botcheck: ""
      });
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar. Tente novamente ou use o email.");
    }
  };


  const blocoFundamentos = [
  {
    icon: <BookOpen className="h-10 w-10" />,
    titulo: "IA de Verdade: do Hype à Operação",
    subtitulo: "O Que Líderes Precisam Entender para Agir com Critério",
    beneficio:
      "Um mapa claro do que é IA hoje, onde ela realmente cria valor e o que precisa existir para funcionar no mundo real — sem jargão e sem promessa vazia.",
    topicos: [
      "O que muda quando IA precisa funcionar na operação",
      "IA tradicional, ML, IA generativa e agentes (sem confusão)",
      "Onde IA costuma gerar impacto — e onde costuma falhar",
      "Como começar com critério, segurança e expectativas realistas",
    ],
    destaque: true,
  },

  // MIGRADO DO BLOCO 5
  {
    icon: <Sparkles className="h-10 w-10" />,
    titulo: "IA Generativa no Mundo Real",
    subtitulo: "Conhecimento, Produtividade e Qualidade de Execução",
    beneficio:
      "Entenda como IA generativa pode melhorar trabalho do conhecimento e operações — e o que separa pilotos empolgantes de soluções úteis e seguras.",
    topicos: [
      "Onde IA generativa cria valor (e onde vira ruído)",
      "Assistentes, busca de conhecimento e automação com governança",
      "Como desenhar casos de uso que sobrevivem ao dia a dia",
      "Riscos práticos: vazamento, alucinação e dependência de processo",
    ],
    destaque: true,
  },
];

const blocoEstrategia = [
  {
    icon: <Target className="h-10 w-10" />,
    titulo: "Por que a IA Falha nas Empresas",
    subtitulo: "(e Como Corrigir o Sistema, Não o Modelo)",
    beneficio:
      "Os motivos reais por trás de projetos que não escalam — e como criar as condições para IA virar capacidade operacional, não experimento.",
    topicos: [
      "Falhas sistêmicas: dados, processo, dono, incentivo e confiança",
      "A diferença entre piloto bonito e operação sustentável",
      "Como escolher problemas e priorizar portfólio com critério",
      "Roteiro de maturidade: do primeiro caso ao uso recorrente",
    ],
    destaque: true,
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    titulo: "IA como Infraestrutura Operacional",
    subtitulo: "Como Sair do Piloto e Entrar na Rotina",
    beneficio:
      "Transforme IA em parte do jeito de operar: integrada a processos, governada, monitorada e usada por quem decide e por quem executa.",
    topicos: [
      "IA como capacidade: dados, produto, operação e governança",
      "Integração com processos (S&OP, planejamento, execução)",
      "Arquitetura mínima para escalar com segurança",
      "Roadmap prático: valor rápido sem comprometer o futuro",
    ],
    destaque: true,
  },
];

const blocoLideranca = [
  {
    icon: <Users className="h-8 w-8" />,
    titulo: "Liderando com IA na Prática",
    subtitulo: "Confiança, Cultura e Execução em Ambientes Reais",
    beneficio:
      "Como conduzir a transformação com IA sem cair em modismo: alinhando expectativas, reduzindo resistência e fazendo a organização usar o que foi construído.",
    topicos: [
      "Como líderes criam confiança em números e modelos",
      "Cultura data-driven que não vira burocracia",
      "Mudança organizacional: adoção, incentivos e responsabilidade",
      "Como transformar insight em rotina operacional",
    ],
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    titulo: "Governança de IA que Funciona",
    subtitulo: "Segurança e Confiança sem Travar a Execução",
    beneficio:
      "Governança como acelerador: regras claras, riscos controlados e decisões rápidas para IA operar com segurança — especialmente em contextos industriais.",
    topicos: [
      "Princípios práticos: risco, dados, uso e responsabilidade",
      "Controles essenciais (sem virar compliance performático)",
      "Avaliação, auditoria e monitoramento em produção",
      "Como governar IA generativa e dados sensíveis na prática",
    ],
  },
];

const blocoValor = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    titulo: "Do Modelo ao Impacto",
    subtitulo: "Como Medir Valor sem se Perder em Métricas Técnicas",
    beneficio:
      "Aprenda a medir e comunicar valor de IA de forma que a empresa entenda — conectando métricas, custo, risco e impacto operacional.",
    topicos: [
      "Métricas que importam: serviço, custo, capital e risco",
      "ROI sem ficção: hipóteses, baseline e atribuição",
      "Indicadores executivos e cadência de acompanhamento",
      "Quando desligar, ajustar ou escalar um caso de IA",
    ],
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    titulo: "Previsão que a Operação Confia",
    subtitulo: "O Eixo do Planejamento em Operações Industriais",
    beneficio:
      "Por que previsão é a coluna vertebral do planejamento — e como transformar forecast em algo utilizável no S&OP, no estoque e na execução.",
    topicos: [
      "Acurácia não basta: utilidade, confiança e decisão",
      "Como previsões quebram (e como evitar)",
      "Integração com planejamento, estoques e nível de serviço",
      "Operação contínua: monitoramento, ajuste e governança",
    ],
  },
];



  return (
    <div className="min-h-screen">
      <Navigation />



      {/********************************* */}

      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-16 sm:py-20 md:py-28 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>

        <div className="container relative z-10 w-full">

          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

            {/* COLUNA DE TEXTO */}
            <div className="order-2 lg:order-1 text-white text-center lg:text-left space-y-5 min-w-0 w-full">

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight break-words">
                Inteligência artificial{" "}
                <span className="text-accent">de verdade.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Palestras que orientam líderes e equipes a usar a <strong>IA em operações industriais</strong> com critério, segurança e impacto real.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Mais de <strong>100+ modelos implementados</strong>, gerando
                <strong> R$750 milhões</strong> em impacto para empresas como Azul,
                DR Aromas e Vallourec.
              </p>

              {/* BOTÕES */}
              <div
                className="
            flex flex-col sm:flex-row 
            gap-3 md:gap-4 
            w-full 
            justify-center 
            items-center 
            text-center
          "
              >
                <Button
                  className="
              bg-secondary text-secondary-foreground shadow-xl font-semibold
              text-sm sm:text-base md:text-lg
              px-4 py-2 sm:px-6 sm:py-3
              w-full sm:w-auto max-w-[280px]
              whitespace-normal leading-snug
            "
                  onClick={() =>
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Agendar uma conversa
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>

                <Button
                  variant="outline"
                  className="
              bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur
              text-sm sm:text-base md:text-lg
              px-4 py-2 sm:px-6 sm:py-3
              w-full sm:w-auto max-w-[280px]
              whitespace-normal leading-snug
            "
                  onClick={() =>
                    document.getElementById('palestras')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Ver Temas de Palestras
                </Button>
              </div>

              {/* SOCIAL PROOF */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-6 w-full">

                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20 text-center w-full">
                  <p className="text-2xl md:text-3xl font-bold text-accent">100+</p>
                  <p className="text-xs md:text-sm text-white/80">Modelos Implementados</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20 text-center w-full">
                  <p className="text-2xl md:text-3xl font-bold text-accent">R$750M</p>
                  <p className="text-xs md:text-sm text-white/80">Impacto Gerado</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20 text-center w-full">
                  <p className="text-2xl md:text-3xl font-bold text-accent">20 anos</p>
                  <p className="text-xs md:text-sm text-white/80">Experiência</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20 text-center w-full">
                  <p className="text-2xl md:text-3xl font-bold text-accent">2.500%</p>
                  <p className="text-xs md:text-sm text-white/80">Produtividade aumentada em clientes</p>
                </div>

              </div>
            </div>

            {/* COLUNA DA IMAGEM + BADGE */}
            <div className="order-1 lg:order-2 flex flex-col justify-center items-center lg:items-end min-w-0 w-full space-y-4">

              {/* IMAGEM */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-2xl"></div>

                <img
                  src="/gustavo-reis-profile.png"
                  alt="Gustavo Reis - Palestrante especialista em IA"
                  className="
              relative
              w-48 h-48
              sm:w-64 sm:h-64
              md:w-80 md:h-80
              lg:w-[420px] lg:h-[420px]
              object-cover rounded-full
              border-4 border-white/20 shadow-2xl
              max-w-full
            "
                />
              </div>

              {/* BADGE — MOBILE MAIOR AINDA */}
              <Badge
                className="
            bg-accent text-accent-foreground border-none 
            text-[10px] sm:text-xs md:text-sm 
            px-4 py-3 font-semibold 
            whitespace-normal break-words leading-snug text-center

            w-80         /* mobile: AINDA maior */
            sm:w-64      /* sm: acompanha a imagem */
            md:w-80      /* md: acompanha a imagem */
            lg:w-[420px] /* lg: acompanha a imagem */
          "
              >
                Especialista em Machine Learning e IA Generativa <br />
                Diretor de IA na HopAI • Professor FDC
              </Badge>

            </div>

          </div>
        </div>
      </section>

      {/********************************* */}


      {/* Por Que Me Contratar Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Por que contratar Gustavo Reis?
            </h2>
            <p className="text-xl text-muted-foreground">
              Porque Inteligência Artificial só gera valor quando funciona na operação real —
              e é isso que eu faço todos os dias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Experiência aplicada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Atuação prática em Inteligência Artificial aplicada a operações industriais,
                  liderando projetos que saem do piloto e entram no dia a dia da operação,
                  com impacto mensurável.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Mais de R$750M em impacto real</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Casos reais em ambientes industriais complexos</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Building2 className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">Foco na operação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Não falo de IA como tendência ou promessa. Trago a visão de quem está
                  na linha de frente aplicando IA em operações industriais complexas,
                  onde erro custa caro, previsões precisam se sustentar e impacto é mensurável.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Conexão entre dados, planejamento e execução</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>IA como meio, não como fim</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Autoridade construída na prática</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Diretor de IA e cofundador da HopAI e professor da disciplina
                  <strong> Operações e Logística alavancadas por IA</strong> na
                  Fundação Dom Cabral. Atuação que combina execução em campo,
                  formação técnica sólida e educação executiva.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Experiência real levada para o palco</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Professor em programas executivos de referência</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Galeria de Palestras */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Palestrando para Grandes Organizações
            </h2>
            <p className="text-xl text-muted-foreground">
              De startups a corporações, de Belo Horizonte a Las Vegas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/palestra5.jpg"
                alt="Gustavo Reis palestrando no IBM Interconnect em Las Vegas sobre inteligência artificial e transformação digital"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">IBM Interconnect - Las Vegas</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/sebrae.jpeg"
                alt="Gustavo Reis palestrando no SEBRAE sobre empreendedorismo e IA"
                className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">SEBRAE - Micro e Pequena Empresa</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/palestra4.jpg"
                alt="Gustavo Reis em workshop no IEL FIEMG sobre governança de IA para indústria"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">IEL FIEMG - Indústria</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/palestra2.jpg"
                alt="Gustavo Reis conduzindo workshop corporativo sobre liderança em organizações impulsionadas por IA"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Workshop Corporativo</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/palestra1.jpg"
                alt="Gustavo Reis apresentando estratégias de IA para diretoria executiva"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">SICOOB CREDICOM</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <div className="text-center text-white p-6">
                <p className="text-4xl font-bold mb-2">+10.000</p>
                <p className="text-lg">Pessoas Impactadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formatos de palestra */}
      <section
        id="formatos"
        className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
      >
        {/* elementos decorativos (mesmo estilo do site) */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Formatos de palestra</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o formato ideal para o seu público, contexto e objetivo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group border-2 bg-background/70 backdrop-blur hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl p-3 bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Star className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">
                      Keynote / Abertura de evento (45–60 min)
                    </CardTitle>
                    <CardDescription className="text-base mt-1">
                      Inspiração e visão crítica sobre IA para grandes públicos.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="group border-2 bg-background/70 backdrop-blur hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl p-3 bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Target className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">
                      Palestra de orientação (60–90 min)
                    </CardTitle>
                    <CardDescription className="text-base mt-1">
                      Clareza e critério para líderes e equipes tomarem decisões melhores sobre IA.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="group border-2 bg-background/70 backdrop-blur hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl p-3 bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Award className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">
                      Masterclass Executiva (90–120 min)
                    </CardTitle>
                    <CardDescription className="text-base mt-1">
                      Aprofundamento conceitual para diretorias e lideranças seniores.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="group border-2 bg-background/70 backdrop-blur hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl p-3 bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Users className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Painel, Q&amp;A ou moderação</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Participação especializada em debates e discussões sobre IA.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Para quem é / Para quem não é */}
      <section
        id="publico"
        className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Para quem é</h2>
            <p className="text-xl text-muted-foreground">
              Um guia rápido para entender se esta palestra faz sentido para o seu contexto operacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Para quem é */}
            <Card className="border-2 bg-background/70 backdrop-blur hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl p-3 bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Users className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Para quem é</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Quando esta palestra tende a gerar mais valor.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Líderes e equipes de operações, planejamento, S&OP, supply chain e áreas industriais
                      que precisam transformar IA em impacto real no dia a dia.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Organizações que já experimentaram IA, mas enfrentam previsões frágeis,
                      planejamentos que não se sustentam ou decisões excessivamente negociadas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Executivos, gestores e coordenadores que buscam reduzir incerteza operacional
                      e alinhar áreas antes de avançar em novas iniciativas de IA.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Para quem não é */}
            <Card className="border-2 bg-background/70 backdrop-blur hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl p-3 bg-destructive/10 text-destructive ring-1 ring-destructive/15">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Para quem não é</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Perfis que normalmente buscam outro tipo de solução.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Pessoas ou equipes que procuram treinamento técnico em ferramentas,
                      linguagens, plataformas ou modelos específicos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Profissionais interessados em cursos operacionais, certificações
                      ou capacitação prática hands-on.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Organizações que esperam implementação, desenvolvimento ou
                      consultoria contínua em IA como parte da palestra.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Palestras Section - Benefit Focused */}
      <section id="palestras" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Temas de Palestras e Workshops
            </h2>
            <p className="text-xl text-muted-foreground">
              Conteúdo prático e acionável, adaptado às necessidades da sua organização
            </p>
          </div>

          {/* Bloco 1: Fundamentos e Introdução */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <Badge className="bg-accent text-accent-foreground mb-3 font-semibold">Bloco 1</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Fundamentos e Introdução</h3>
              <p className="text-muted-foreground">
                Base conceitual para compreender e iniciar a jornada em IA
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {blocoFundamentos.map((palestra, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-2xl transition-all ${palestra.destaque
                    ? "border-4 border-primary bg-gradient-to-br from-primary/5 to-accent/5"
                    : "border-2 hover:border-primary"
                    }`}
                >
                  <CardHeader>
                    <div className="mb-4 text-primary">{palestra.icon}</div>
                    <CardTitle className="text-xl">{palestra.titulo}</CardTitle>
                    <CardDescription className="font-semibold text-accent text-base">
                      {palestra.subtitulo}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-accent/10 border-l-4 border-accent p-4 mb-4 rounded">
                      <p className="text-sm font-semibold text-foreground leading-relaxed">
                        {palestra.beneficio}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {palestra.topicos.map((topico, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{topico}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bloco 2: Estratégia e Estrutura */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <Badge className="bg-accent text-accent-foreground mb-3 font-semibold">Bloco 2</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Estratégia e Estrutura</h3>
              <p className="text-muted-foreground">Visão sistêmica, adoção e maturidade organizacional</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {blocoEstrategia.map((palestra, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-2xl transition-all ${palestra.destaque
                    ? "border-4 border-primary bg-gradient-to-br from-primary/5 to-accent/5"
                    : "border-2 hover:border-primary"
                    }`}
                >
                  <CardHeader>
                    <div className="mb-4 text-primary">{palestra.icon}</div>
                    <CardTitle className="text-xl">{palestra.titulo}</CardTitle>
                    <CardDescription className="font-semibold text-accent text-base">
                      {palestra.subtitulo}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-accent/10 border-l-4 border-accent p-4 mb-4 rounded">
                      <p className="text-sm font-semibold text-foreground leading-relaxed">
                        {palestra.beneficio}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {palestra.topicos.map((topico, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{topico}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bloco 3: Liderança e Governança */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <Badge className="bg-accent text-accent-foreground mb-3 font-semibold">Bloco 3</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Liderança e Governança</h3>
              <p className="text-muted-foreground">Confiança, cultura e liderança na era da IA</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {blocoLideranca.map((palestra, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all border-2 hover:border-accent"
                >
                  <CardHeader>
                    <div className="mb-3 text-accent">{palestra.icon}</div>
                    <CardTitle className="text-lg">{palestra.titulo}</CardTitle>
                    <CardDescription className="font-semibold text-primary">
                      {palestra.subtitulo}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-primary/10 border-l-4 border-primary p-3 mb-4 rounded">
                      <p className="text-sm font-semibold text-foreground">{palestra.beneficio}</p>
                    </div>
                    <ul className="space-y-2">
                      {palestra.topicos.map((topico, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{topico}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bloco 4: Valor e Execução */}
          <div>
            <div className="text-center mb-8">
              <Badge className="bg-accent text-accent-foreground mb-3 font-semibold">Bloco 4</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Valor e Execução</h3>
              <p className="text-muted-foreground">
                Medição de impacto e aprendizado técnico-estratégico
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {blocoValor.map((palestra, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all border-2 hover:border-primary"
                >
                  <CardHeader>
                    <div className="mb-3 text-primary">{palestra.icon}</div>
                    <CardTitle className="text-lg">{palestra.titulo}</CardTitle>
                    <CardDescription className="font-semibold text-accent">
                      {palestra.subtitulo}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-accent/10 border-l-4 border-accent p-3 mb-4 rounded">
                      <p className="text-sm font-semibold text-foreground">{palestra.beneficio}</p>
                    </div>
                    <ul className="space-y-2">
                      {palestra.topicos.map((topico, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{topico}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Todos os temas podem ser adaptados para o contexto e desafios específicos da sua empresa
            </p>
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("contato");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Agendar uma conversa <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>



      {/* Resultados Section - Impact Focused */}
      <section id="resultados" className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Impacto Real em Números</h2>
            <p className="text-xl text-muted-foreground">
              Resultados que falam por si. Não é promessa, é histórico.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Indústria: Previsão de Demanda Inteligente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-accent">R$ 35M/ano</p>
                        <p className="text-xs md:text-sm text-white/80">em economia gerada</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xl font-bold">10% de redução</p>
                        <p className="text-xs md:text-sm text-white/80">no estoque</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xl font-bold">17% de aumento</p>
                        <p className="text-xs md:text-sm text-white/80">no faturamento</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent to-accent/80 text-white border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Serviços: Automação Inteligente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-primary-foreground">2.500%</p>
                        <p className="text-xs md:text-sm text-white/80">aumento de produtividade</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xl font-bold">75% de redução</p>
                        <p className="text-xs md:text-sm text-white/80">nos custos operacionais</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xl font-bold">ROI em 6 meses</p>
                        <p className="text-xs md:text-sm text-white/80">retorno do investimento</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>


          </div>
        </div>
      </section>

      {/* Credenciais Section - Compact */}
      <section id="experiencia" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Credenciais</h2>
            <p className="text-xl text-muted-foreground">
              Experiência, formação e reconhecimento que garantem qualidade
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img src="/hopai.png" alt="HopAI" className="h-12 w-12 object-contain" />
                    <div>
                      <CardTitle className="text-lg">HopAI</CardTitle>
                      <CardDescription>Cofundador e Diretor de Operações</CardDescription>
                    </div>
                  </div>

                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  100+ modelos de IA implementados, R$750M em resultados para grandes empresas
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img src="/fdc.png" alt="Fundação Dom Cabral" className="h-12 w-auto object-contain" />
                    <div>
                      <CardTitle className="text-lg">Fundação Dom Cabral</CardTitle>
                      <CardDescription>Professor</CardDescription>
                    </div>
                  </div>

                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Operações e Logísticas alavancadas por IA - Pós-Graduação em Gestão Empresarial
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img src="/alura.jpg" alt="Alura" className="h-12 w-auto object-contain" />
                    <div>
                      <CardTitle className="text-lg">Alura + FIAP Para Empresas</CardTitle>
                      <CardDescription>Professor Convidado</CardDescription>
                    </div>
                  </div>

                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Programa de Imersão Executiva em IA (parceria FIAP e Alura+)
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img src="/Estuate_IBM-Champion_Logo.png" alt="IBM Champion" className="h-12 w-auto object-contain" />
                    <div>
                      <CardTitle className="text-lg">IBM Champion</CardTitle>
                      <CardDescription>Reconhecimento Global</CardDescription>
                    </div>
                  </div>

                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Título concedido pela IBM a seleto grupo de especialistas por contribuição
                  técnica global
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Formação Acadêmica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <img src="/USP.jpg" alt="USP" className="h-10 w-auto object-contain mt-1" />
                    <div>
                      <p className="font-semibold">MBA em IA e Big Data</p>
                      <p className="text-sm text-muted-foreground">
                        Universidade de São Paulo (USP)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="/ufmg-social.jpg" alt="UFMG" className="h-14 w-auto object-contain mt-1" />
                    <div>
                      <p className="font-semibold">Bacharel em Sistemas de Informação</p>
                      <p className="text-sm text-muted-foreground">
                        Universidade Federal de Minas Gerais (UFMG)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para Transformar sua Organização?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Agende uma conversa e descubra como levar conteúdo de alto impacto sobre IA para sua equipe
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-semibold"
              onClick={() => {
                const element = document.getElementById("contato");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Agendar uma conversa<ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Vamos Conversar</h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário abaixo e entrarei em contato em até 24 horas
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input
                        id="nome"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Corporativo *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa *</Label>
                      <Input
                        id="empresa"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Nome da empresa"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo *</Label>
                      <Input
                        id="cargo"
                        required
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                        placeholder="Seu cargo"

                      />

                      <input
                        type="text"
                        name="botcheck"
                        value={formData.botcheck}
                        onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />


                    </div>
                  </div>



                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Como posso ajudar sua organização? *</Label>
                    <Textarea
                      id="mensagem"
                      required
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Conte-me sobre seus desafios e objetivos com IA..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Solicitação <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t">
                  <p className="font-semibold text-center mb-4">Outras formas de contato:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:gustavo@gustavoreis.ia.br"
                      className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      gustavo@gustavoreis.ia.br
                    </a>
                    <a
                      href="https://linkedin.com/in/gustavoreis-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      /in/gustavoreis-ai
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted border-t">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2025 Gustavo Reis. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Transformando organizações através da Inteligência Artificial
          </p>
        </div>
      </footer>
    </div>
  );
}
