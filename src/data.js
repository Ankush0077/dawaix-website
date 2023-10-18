// import icons
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
// import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
// import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
// import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'Home',
    href: 'https://dawaix.com',
  },
  {
    name: 'How To Order?',
    href: 'https://dawaix.com/#/how-to-order',
  },
  {
    name: 'Refer Your Friends!',
    href: 'https://dawaix.com/#/refer-your-friends',
  },
];

export const heroData = {
  title: ` The Fastest Pharmacy`,
  subtitle:
    'Order your medicines at any time, and we will deliver them to you in the shortest amount of time (approximately 30 minutes).',
  btnText: 'Get Started',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Find Out A Little More About Us',
  subtitle:
    'DawaiX is an online pharmacy that offers medicines of the highest possible quality at the lowest prices and delivers them in the shortest amount of time. After the order confirmation process is done, it usually takes 30 minutes for us to deliver. We are committed to offering the highest-quality services to our customers in the most time- and cost-effective manner we can.',
};

export const featuresData = {
  title: 'How To Order Medicines From Us',
  subtitle:
    'The ordering process is currently done on Whatsapp. So, you need to have WhatsApp to order medicines from us. Start by clicking the "Order Now" button on the website.',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Specify The Address',
      description:
        'After clicking on the "Order Now" button, you are redirected to Whatsapp, where you have to specify the address where the product has to be delivered.',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Type The Required Medicine',
      description:
        'After you have specified the address, you should type the names of the medicines you want to order. Also, send the prescriptions (if required).',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Confirm The Products',
      description:
        'After you have sent the medicines you require, we will see which medicines are available to us and of which brand. Also, if some medicines require prescriptions that you have not provided, we will sort them out with you. After that, you will get the final list of products with their prices, which you have to confirm.',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Recieve The Medicines',
      description:
        'After confirming the products, your order has been confirmed and is being dispatched. Within 30 minutes of confirming the order, you will receive your products. You will have to pay now. Please treat the delivery boy with respect and dignity.',
      linkText: 'Learn more',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    // image: Avatar1Img,
    name: 'Aaradhya',
    // web: 'rena.com',
    message:
    "It really saves me time, money, and effort. DawaiX is exactly what we have been lacking. You guys rock!",
    delay: '300',
  },
  {
    // image: Avatar2Img,
    name: 'Dhruv',
    // web: 'nataliya.com',
    message:
      'Would definitely recommend DawaiX and will definitely be ordering again.',
    delay: '600',
  },
  {
    // image: Avatar3Img,
    name: 'Ishaan',
    // web: 'vebin.com',
    message:
      "I can't understand how we've been living without DawaiX.",
    delay: '900',
  },
  {
    // image: Avatar3Img,
    name: 'Nikhil',
    // web: 'vebin.com',
    message:
      "Nice work on your DawaiX. DawaiX impressed me on multiple levels.",
    delay: '900',
  },
  {
    // image: Avatar3Img,
    name: 'Ajay',
    // web: 'vebin.com',
    message:
      "I don't know what else to say. I don't always clap, but I have to now, it's because of DawaiX. I will refer everyone I know.",
    delay: '900',
  },
  {
    // image: Avatar3Img,
    name: 'Prachi',
    // web: 'vebin.com',
    message:
      "I will let my mum know about this, she could really make use of DawaiX! I'd be lost without DawaiX.",
    delay: '900',
  },
];

export const ctaData = {
  title: 'Medicine Delivery in 30 Minutes',
  subtitle: 'Get 10% off, order Anytime',
  btnText1: 'Learn more',
  btnText2: 'Order Now',
};

export const footerData = {
  logo: LogoV2,
  address: 'DawaiX, New Delhi',
  email: 'info@dawaix.com',
  phone: '1-232-7778 (Main)',
  list1: [
    {
      name: 'Invest In Us',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
        name: 'Our Team',
        href: 'https://dawaix.com/#/our-team',
      },
    {
      name: 'News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Register',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
    {
      name: 'Terms & Conditions',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaFacebook />,
      href: '#',
    },
    {
      icon: <FaTwitter />,
      href: '#',
    },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/company/91008342/',
    }
  ],
};

export const copyrightData = {
  text: '© DawaiX, 2023. All rights reserved.',
  icon: <BsChatDotsFill />,
};