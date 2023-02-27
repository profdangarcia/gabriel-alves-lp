import { ImBarcode, ImQrcode, ImCreditCard } from 'react-icons/im';
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

const config = {
  brand: 'Team Alves',
  seo: {
    title: 'Gabriel Alves | Treinamento Especializado',
    description: 'Adquira agora o treinamento especializado para você!',
    h1: 'Treinamento especializado para você',
    thumbnail: 'https://gabriel-alves-lp.vercel.app/thumbnail.jpeg',
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
    plan1: '#009B9D',
    plan2: '#C23DF3',
    plan3: '#FCB353',
    success: '#458A62',
    error: '#FF1800',
  },
  socials: [
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/gabriels_alves/',
    },
    {
      name: 'Tiktok',
      icon: <FaTiktok />,
      url: 'https://www.tiktok.com/@gabrielalvespersonalon',
    },
    {
      name: 'Youtube',
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
      },
      {
        title: 'Plano Trimestral',
        subtitle: 'Melhor custo benefício',
        price: '49,90',
        info: 'Total de R$ 149,70',
        color: 'plan2',
        url: '#',
        highlight: true,
      },
      {
        title: 'Plano Semestral',
        subtitle: 'A maior economia',
        price: '40,90',
        info: 'Total de R$ 245,40',
        color: 'plan3',
        url: '#',
        highlight: false,
      },
    ],
  },
};

export default config;
