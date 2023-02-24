import { ImBarcode, ImQrcode, ImCreditCard } from 'react-icons/im';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const config = {
  brand: 'Team Alves',
  seo: {
    title: 'Gabriel Alves | Treinamento Especializado',
    description: 'Treinamento e acompanhamento especializado!',
    h1: 'Treinamento especializado para você',
    thumbnail: 'https://gabriel-alves-lp.vercel.app/thumbnail.jpeg',
  },
  cta: {
    videoId: 'TrhmjR5xTc8',
    videoCta: 'Veja o vídeo de nossa solução',
    videoTitle: 'Nossa solução',
    videoCtaClick: 'Adquira agora nossa solução:',
    videoCtaButton: 'QUERO COMEÇAR!',
    checkoutUrl: 'https://sun.eduzz.com/1610504',
    ctaButton: 'QUERO APROVEITAR!',
  },
  results: {
    title: 'Métodos que dão resultados como esses:',
    items: [
      {
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        image: '/results/result1.png',
      },
      {
        info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        image: '/results/result2.png',
      },
      {
        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        image: '/results/result3.png',
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
    image: '/about.jpeg',
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
  },
  socials: [
    {
      name: 'Facebook',
      icon: <BsFacebook />,
      url: '#',
    },
    {
      name: 'Instagram',
      icon: <BsInstagram />,
      url: '#',
    },
    {
      name: 'Whatsapp',
      icon: <BsWhatsapp />,
      url: '#',
    },
  ],
  whatsapp: {
    number: '999999999',
    message: 'Olá, vi seu trabalho pelo site MKT Landing Page!',
  },
};

export default config;
