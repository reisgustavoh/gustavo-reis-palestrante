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


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    setFormData({ nome: "", email: "", empresa: "", cargo: "", mensagem: "" });
  };

  const blocoFundamentos = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      titulo: "Introdução à Inteligência Artificial",
      subtitulo: "O Que É, Como Funciona e Como Começar com Segurança",
      beneficio:
        "Entenda de forma clara e prática o que é IA hoje, como ela funciona, onde gera valor e como iniciar a adoção com segurança e realismo.",
      topicos: [
        "Fundamentos de IA explicados sem jargão",
        "IA tradicional, machine learning, IA generativa e agentes",
        "Onde IA realmente gera valor nos negócios",
        "Principais casos de uso corporativos.",
      ],
      destaque: true,
    },

    // MIGRADO DO BLOCO 5
    {
      icon: <Sparkles className="h-10 w-10" />,
      titulo: "IA Generativa e o Renascimento do Conhecimento Corporativo",
      subtitulo: "Futuro do Trabalho e Reinvenção Corporativa",
      beneficio:
        "Descubra como IA generativa está redefinindo criação de conhecimento, produtividade e inovação nas organizações",
      topicos: [
        "LLMs e transformação do trabalho do conhecimento",
        "Casos de uso de IA generativa em empresas",
        "Gestão de conhecimento com IA",
        "Preparação para o futuro da IA.",
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
        "Entenda os motivos reais por trás do fracasso de projetos de IA e aprenda a estruturar sistemas organizacionais que garantem sucesso",
      topicos: [
        "Diagnóstico de falhas sistêmicas",
        "Alinhamento estratégico vs. otimização técnica",
        "Governança de portfólio de IA",
        "Framework de maturidade organizacional",
      ],
      destaque: true,
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      titulo: "IA como Infraestrutura de Negócio",
      subtitulo: "Visão Sistêmica e Adoção Organizacional",
      beneficio:
        "Transforme IA de projeto piloto para infraestrutura crítica que sustenta operações e decisões estratégicas",
      topicos: [
        "IA como capacidade organizacional",
        "Arquitetura de dados para escala",
        "Integração com processos de negócio",
        "Roadmap de adoção progressiva",
      ],
      destaque: true,
    },
  ];
  const blocoLideranca = [
    {
      icon: <Users className="h-8 w-8" />,
      titulo: "Liderando Organizações Impulsionadas por IA",
      subtitulo: "Cultura, Confiança e Transformação Executiva",
      beneficio:
        "Desenvolva as competências de liderança necessárias para conduzir transformação digital com IA em grande escala",
      topicos: [
        "Visão estratégica de IA",
        "Construção de cultura data-driven",
        "Gestão de mudança e resistência",
        "Liderança através de insights de IA",
      ],
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      titulo: "Governança de IA",
      subtitulo: "Do Compliance à Confiança Institucional",
      beneficio:
        "Implemente frameworks de governança que vão além da conformidade, construindo confiança e valor de longo prazo",
      topicos: [
        "Frameworks de governança de IA",
        "GDPR, Lei de IA e compliance",
        "Mitigação de viés e riscos éticos",
        "Auditoria e monitoramento contínuo",
      ],
    },
  ];
  const blocoValor = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      titulo: "Do Modelo ao Valor",
      subtitulo: "Medindo o Impacto Real da IA",
      beneficio:
        "Aprenda a medir e comunicar o valor real gerado por IA, desde métricas técnicas até impacto financeiro",
      topicos: [
        "Métricas de negócio vs. métricas técnicas",
        "Cálculo de ROI em projetos de IA",
        "Dashboards executivos de IA",
        "Comunicação de valor para stakeholders",
      ],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      titulo: "Forecasting Inteligente",
      subtitulo: "O Laboratório para Aprender IA de Verdade",
      beneficio:
        "Use previsão de demanda como caso prático para dominar conceitos avançados de IA aplicada a negócios",
      topicos: [
        "Séries temporais e modelos preditivos",
        "Integração de variáveis de negócio",
        "Validação e ajuste de modelos",
        "Implantação e monitoramento em produção",
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
                Transforme sua Organização com{" "}
                <span className="text-accent">Inteligência Artificial</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Do conselho ao chão de fábrica: palestras que capacitam toda a organização para uso, governança e adoção em escala de IA com resultados comprovados e segurança.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Mais de <strong>700 modelos implementados</strong>, gerando
                <strong> R$750 milhões</strong> em impacto para empresas como Azul,
                Hapvida e Vallourec.
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
                  Quero uma Palestra
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
                  <p className="text-2xl md:text-3xl font-bold text-accent">700+</p>
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
                  <p className="text-xs md:text-sm text-white/80">Produtividade</p>
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
              Por Que Contratar Gustavo Reis?
            </h2>
            <p className="text-xl text-muted-foreground">
              Não é teoria. É experiência real de quem está na trincheira implementando IA em
              grandes organizações todos os dias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Experiência Comprovada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Diretor de IA na HopAI há 9 anos, com 700+ modelos implementados gerando R$750M
                  em resultados reais para empresas como Azul, Hapvida e Vallourec.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Cases reais, não teóricos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>ROI comprovado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Building2 className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">Visão de Negócio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Não falo apenas de tecnologia. Trabalho diretamente com líderes e equipes para alinhar IA
                  aos objetivos estratégicos e garantir impacto real no negócio.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Linguagem executiva</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Foco em resultados</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Credenciais de Elite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  IBM Champion, Professor na Fundação Dom Cabral e Alura. Reconhecimento global por
                  contribuições técnicas e disseminação de conhecimento.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Reconhecimento internacional</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Educador corporativo em IA</span>
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
              Solicitar Proposta Personalizada <ArrowRight className="ml-2 h-5 w-5" />
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
                  700+ modelos de IA implementados, R$750M em resultados para grandes empresas
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
              Agende uma conversa e descubra como levar conteúdo de alto impacto sobre IA e
              governança para sua equipe
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-semibold"
              onClick={() => {
                const element = document.getElementById("contato");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicitar Proposta <ArrowRight className="ml-2 h-5 w-5" />
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
