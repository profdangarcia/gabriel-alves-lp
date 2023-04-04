import { ImBarcode, ImQrcode, ImCreditCard } from 'react-icons/im';
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

const config = {
  brand: 'Team Alves',
  seo: {
    title: 'Gabriel Alves | Treinamento Especializado',
    description: 'Adquira agora o treinamento especializado para você!',
    h1: 'Treinamento especializado para você',
    thumbnail: 'thumbnail.jpeg',
    canonical: 'https://gabriel-alves-lp.vercel.app/',
  },
  cta: {
    videoId: 'TrhmjR5xTc8',
    videoCta: 'Veja o vídeo de apresentação',
    videoTitle: 'Treinamento Online',
    videoCtaClick: 'Adquira agora seu treinamento:',
    videoCtaButton: 'QUERO COMEÇAR!',
    checkoutUrl: 'https://sun.eduzz.com/1610504',
    ctaButton: 'QUERO APROVEITAR!',
  },
  presentation: {
    title: 'O que você irá receber:',
    items: [
      {
        title: 'Suporte via whatsapp',
        info: 'Com o nosso plano, você terá um personal trainer dedicado que irá guiá-lo em sua jornada de fitness e saúde. Além disso, você poderá contar com o suporte via WhatsApp para receber orientação, esclarecer dúvidas e receber feedbacks instantâneos.',
        image: '/presentations/presentation1.webp',
      },
      {
        title: 'App de treino com vídeos',
        info: 'Você terá acesso a um app de treinos com vídeos exclusivos! Agora você pode ter um personal trainer virtual em seu bolso e fazer seus treinos onde quer que esteja.',
        image: '/presentations/presentation2.png',
      },
      {
        title: 'Treino específico com avaliação corporal online',
        info: 'Você receberá um plano de treinos específico para seus objetivos, além de uma avaliação corporal online. O plano de treinos será personalizado de acordo com suas necessidades, objetivos e limitações, e a avaliação corporal ajudará a entender melhor seu corpo e suas necessidades.',
        image: '/presentations/presentation3.jpg',
      },
    ],
  },
  payments: [
    {
      text: 'Cartão',
      icon: <ImCreditCard />,
    },
    {
      text: 'Boleto',
      icon: <ImBarcode />,
    },
    {
      text: 'PIX',
      icon: <ImQrcode />,
    },
  ],
  about: {
    image: '/self.jpeg',
    title: 'QUEM SOU EU',
    description: [
      'Olá! Meu nome é Gabriel Alves e sou Personal Trainer Profissional de educação física, formado pela UNISEP, especialista em Ciência do Treinamento de Força (UFScar), diversos cursos na área do emagrecimento e hipertrofia muscular, professor em sala de musculação há mais de 8 ano.',
      'Gosto de entender o que o aluno gosta de treinar, pois a constância é o que traz o resultado.',
      'Então tá esperando o que para ter o melhor treino da sua vida e atingir o resultado que sempre quis? Estou aqui para lhe atender da melhor forma possível!',
      'Bora começar a fazer a diferença, quero ver você dar o seu melhor nos treinos e ter saúde e estética como brinde.',
    ],
  },
  logo: '/logo.png',
  palette: {
    900: '#202020',
    800: '#009B9D',
    700: '#00CACA',
    600: '#F9F9F9',
    plan1: '#009B9D',
    plan2: '#009B9D',
    plan3: '#009B9D',
    success: '#458A62',
    error: '#FF1800',
  },
  socials: [
    {
      name: 'Visite meu instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/gabriels_alves/',
    },
    {
      name: 'Visite meu Tiktok',
      icon: <FaTiktok />,
      url: 'https://www.tiktok.com/@gabrielalvespersonalon',
    },
    {
      name: 'Visite meu canal do Youtube',
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/channel/UCFQHTOcC_87ft9WNBj5QOyA',
    },
  ],
  whatsapp: {
    number: '35998489608',
    message: 'Olá, vi seu trabalho pelo site e gostaria de saber mais.',
  },
  plans: {
    title: 'Encontre o plano certo para você:',
    items: [
      {
        title: 'Plano Mensal',
        subtitle: 'Cabe no seu bolso',
        price: '59,90',
        info: '',
        color: 'plan1',
        url: '#',
        highlight: false,
        benefits: [
          {
            text: 'Atendimento 24h via whatsapp',
            available: true,
          },
          {
            text: 'Planilha de treinos exclusiva',
            available: false,
          },
          {
            text: 'Guia de dieta',
            available: false,
          },
        ],
      },
      {
        title: 'Plano Trimestral',
        subtitle: 'Melhor custo benefício',
        price: '49,90',
        info: 'Total de R$ 149,70',
        color: 'plan2',
        url: '#',
        highlight: true,
        benefits: [
          {
            text: 'Atendimento 24h via whatsapp',
            available: true,
          },
          {
            text: 'Planilha de treinos exclusiva',
            available: true,
          },
          {
            text: 'Guia de dieta',
            available: false,
          },
        ],
      },
      {
        title: 'Plano Semestral',
        subtitle: 'A maior economia',
        price: '40,90',
        info: 'Total de R$ 245,40',
        color: 'plan3',
        url: '#',
        highlight: false,
        benefits: [
          {
            text: 'Atendimento 24h via whatsapp',
            available: true,
          },
          {
            text: 'Planilha de treinos exclusiva',
            available: true,
          },
          {
            text: 'Guia de dieta',
            available: true,
          },
        ],
      },
    ],
  },
  guarantee: {
    title: 'RISCO ZERO',
    image: '/guarantee.png',
    message:
      'O RISCO É TODO MEU: Se você cumprir todo o passo a passo que eu proponho no programa e ainda assim não vir resultados em até 03 meses, eu devolvo cada centavo do seu dinheiro!',
  },
  testimonial: {
    title: 'RESULTADOS E FEEDBACKS',
    items: [
      {
        image: '/testimonials/result1.jpeg',
        text: '',
        title: 'Resultado dos treinos',
      },
      {
        image: '/testimonials/feedback1.jpeg',
        text: '',
        title: 'Feedback de cliente',
      },
      {
        image: '/testimonials/result2.jpeg',
        text: '',
        title: 'Resultado dos treinos',
      },
      {
        image: '/testimonials/feedback6.jpeg',
        text: '',
        title: 'Feedback de cliente',
      },
      {
        image: '/testimonials/feedback2.jpeg',
        text: '',
        title: 'Feedback de cliente',
      },
      {
        image: '/testimonials/result3.jpeg',
        text: '',
        title: 'Resultado dos treinos',
      },
      {
        image: '/testimonials/feedback3.jpeg',
        text: '',
        title: 'Feedback de cliente',
      },
      {
        image: '/testimonials/result4.jpeg',
        text: '',
        title: 'Resultado dos treinos',
      },
      {
        image: '/testimonials/feedback4.jpeg',
        text: '',
        title: 'Feedback de cliente',
      },
      {
        image: '/testimonials/feedback5.jpeg',
        text: '',
        title: 'Feedback de cliente',
      },
    ],
  },
};

export default config;
