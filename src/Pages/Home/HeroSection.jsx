import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper React components
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Example banner data
const banners = [
    {
        heading: 'Welcome to Our Platform',
        title: 'Complete Tasks and Earn Rewards',
        imageUrl: 'https://i.ibb.co/rx4GxTT/shaking-hands-3641642-1280.jpg',
    },
    {
        heading: 'Create and Manage Tasks',
        title: 'Post Tasks and Get Quality Work Done',
        imageUrl: 'https://i.ibb.co/gd7G6V2/1528858891145.png',
    },
    {
        heading: 'Secure and Fast Payments',
        title: 'Easy Payment System for Your Convenience',
        imageUrl: 'https://i.ibb.co/3FJcL8p/Payment-Security.webp',
    },
];

const HeroSection = () => {
    return (
        <section id="hero" className="relative w-full h-[80vh]">
            <Swiper
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="h-full"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index} className="relative">
                        <img
                            src={banner.imageUrl}
                            alt={banner.heading}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner.heading}</h1>
                            <p className="text-xl md:text-2xl">{banner.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSection;
