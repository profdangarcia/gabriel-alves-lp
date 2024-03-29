import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import About from '../components/About';
import CtaSection from '../components/CtaSection';
import FloatingWhatsapp from '../components/FloatingWhatsapp';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import PlanSection from '../components/PlanSection';
import PresentationSection from '../components/PresentationSection';
import SatisfactionSection from '../components/SatisfactionSection';
import Seo from '../components/Seo';
import TestimonialSection from '../components/TestimonialSection';
import VideoSection from '../components/VideoSection';
import Wrapper from '../components/Wrapper';
import config from '../helpers/config';

const Home: React.FC = () => {
  const [introAnswers, setIntroAnswers] = useState({
    genero: '',
    objetivo: '',
  });

  const handleIntroAnswers = (genero: string, objetivo: string): void => {
    setIntroAnswers({
      genero,
      objetivo,
    });
  };

  return (
    <>
      <Seo />

      {introAnswers.genero ? (
        <>
          <Wrapper>
            <Flex
              as="main"
              direction="column"
              align="center"
              minH="100vh"
              py={8}
            >
              <Image
                src={config.logo}
                alt={config.seo.title}
                width={200}
                height={118}
              />
              <Heading
                as="h1"
                mb={16}
                mt={4}
                color="brand.700"
                textAlign="center"
              >
                {config.seo.h1}
              </Heading>

              <VideoSection />
            </Flex>
          </Wrapper>
          <PresentationSection />
          <TestimonialSection />
          <CtaSection />
          <SatisfactionSection />
          <PlanSection />
          <About />
          <CtaSection />
          <Footer />
          <FloatingWhatsapp />
        </>
      ) : (
        <Introduction setAnswers={handleIntroAnswers} />
      )}
    </>
  );
};

export default Home;
