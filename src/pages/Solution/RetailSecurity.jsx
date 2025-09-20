import React from 'react';
import Banner from '../../components/Banner';
import WhatWeOffer from '../../components/Solution/RetailSolution/WhatWeOffer'
import ImageRightText from '../../components/ImageRightText';
import CarouselCard from '../../components/CarouselCard';
import south_wales_police from '../../assets/images/Solution/new-south-wales-police-logo.png'
import Download from '../../components/Download';

const RetailSecurity = () => {
  const citySurveillanceSlides = [
    {
      id: 1,
      image: "https://pelco-891395695.imgix.net/fresno-airport-image-850x638.jpg?auto=format&fit=clip&q=80&w=900&s=927f54157ce1650ebb64df05303cf532",
      logo: 'https://pelco-566282893.imgix.net/c1_v1_Fresno_Yosemite_Airport_Logo.png?auto=format&fit=clip&q=80&w=328&s=2ed45e331cb291638271f90eaa80d020',
      title: "Istanbul Municipality",
      quote: "The smart city surveillance system has significantly enhanced our ability to monitor and respond to urban security challenges. The AI-powered analytics provide real-time insights that help us maintain public safety across the city.",
      author: "Ahmet Yılmaz, Director of Urban Security, Istanbul Municipality",
      link: "#",
      linkText: "Read this case study",
      logoClass: "w-80 mb-6",
    },
    {
      id: 2,
      image: "https://pelco-891395695.imgix.net/chukchansi-casino-image-850x638.jpg?auto=format&fit=clip&q=80&w=900&s=264b574f4e148c9367d53722c3d8fce3",
      logo: 'https://pelco-566282893.imgix.net/c1_v1_Chukchansi_Logo_2023-01-12-022321_iycj.png?auto=format&fit=clip&q=80&w=328&s=7b23920962b8e96f270824d266b3c2b0',
      title: "Fresno Police Department",
      quote: "Our city surveillance network has revolutionized how we approach public safety. The integrated system allows us to monitor critical areas 24/7 and respond to incidents with unprecedented speed and accuracy.",
      author: "Chief Michael Johnson, Fresno Police Department",
      link: "#",
      linkText: "Read this case study",
      logoClass: "w-80 mb-6",
    },
    {
      id: 3,
      image: "https://pelco-891395695.imgix.net/gosford-city-image-850x638.jpg?auto=format&fit=clip&q=80&w=900&s=939612851ec86a545784eec108db0593",
      logo: south_wales_police,
      title: "Fresno Yosemite International Airport",
      quote: "The comprehensive surveillance solution has transformed our airport security operations. We can now monitor all critical areas simultaneously while maintaining efficient passenger flow and ensuring safety standards.",
      author: "Joe Maskovich, Chief of Public Safety for Fresno Airports",
      link: "#",
      linkText: "Read this case study",
      logoClass: "w-80 mb-6",
    },
    {
      id: 4,
      image: "https://pelco-891395695.imgix.net/fresno-airport-image-850x638.jpg?auto=format&fit=clip&q=80&w=900&s=927f54157ce1650ebb64df05303cf532",
      logo: 'https://pelco-566282893.imgix.net/c1_v1_Fresno_Yosemite_Airport_Logo.png?auto=format&fit=clip&q=80&w=328&s=2ed45e331cb291638271f90eaa80d020',
      title: "Murtala Muhammed Airport",
      quote: "Implementing the smart surveillance system has greatly improved our operational efficiency and security posture. The advanced analytics help us identify potential threats before they become incidents.",
      author: "Sarah Williams, Security Director, Murtala Muhammed Airport",
      link: "#",
      linkText: "Read this case study",
      logoClass: "w-80 mb-6 ",
    },
    {
      id: 5,
      image: "https://pelco-891395695.imgix.net/chukchansi-casino-image-850x638.jpg?auto=format&fit=clip&q=80&w=900&s=264b574f4e148c9367d53722c3d8fce3",
      logo: 'https://pelco-566282893.imgix.net/c1_v1_Chukchansi_Logo_2023-01-12-022321_iycj.png?auto=format&fit=clip&q=80&w=328&s=7b23920962b8e96f270824d266b3c2b0',
      title: "Hard Rock Hotel & Casino",
      quote: "Our integrated surveillance system provides comprehensive coverage of our entire property. The AI-powered features help us maintain a safe environment for our guests while optimizing our security operations.",
      author: "David Rodriguez, Director of Security, Hard Rock Hotel & Casino",
      link: "#",
      linkText: "Read this case study",
      logoClass: "w-80 mb-6",
    },
  ];

  return (
    <div>
      <Banner
        title="Retail Security Solutions"
        description="Advanced loss prevention and security systems designed to protect retail environments with intelligent monitoring and theft detection"
        backgroundImage="https://www.dahuasecurity.com/asset/upload/banner/20171227/solutions.jpg"
        containerClass="top-1/2 transform -translate-y-1/2"
        contentClass="max-w-2xl"
        h2Class="text-5xl md:text-5xl font-bold mb-4 text-white text-left"
        pClass="text-lg md:text-xl opacity-90 text-white text-left"
      />
      <div className="mt-5">
     <WhatWeOffer/>
     <ImageRightText
  title="Connect stores and align management"
  description="Connected stores, powered by Hikvision's Smart Retail Solution..."
  linkText="Explore more"
  linkHref="#"
  imageSrc="/src/assets/images/nexyos/Connect_Stores.png"
  imageAlt="Connect stores and align management"
  reverse={true} 
  imageHeight = "23rem"
/>
<ImageRightText
  title="Protect your customers, staff, and assets"
  description="Hikvision's Smart Retail Solution energizes businesses with cutting-edge technologies and prioritizes the protection of your customers, staff, and assets."
  linkText="Explore more"
   linkHref="#"
  imageSrc="/src/assets/images/nexyos/Protect_your_customers.png"
  imageAlt="Father and daughter in supermarket"
  imageHeight="23rem" 
  reverse={false} 
/>
<div className='mt-10'>
  <h2 className='text-center text-4xl font-bold'>Success Stories</h2>
  <CarouselCard slides={citySurveillanceSlides} />
</div>
<Download/>
      </div>
    </div>
  );
};

export default RetailSecurity;

