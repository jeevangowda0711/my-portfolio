'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge
} from './ui-components';

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CardSlider = ({ items, type }) => {
  const isExperience = type === 'experience';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="p-4"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="pb-12">
            <Card className="h-[400px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gray-800/50 border-gray-700 flex flex-col">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-neonGreen">
                    {item.title}
                  </CardTitle>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neonGreen transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <CardDescription className="text-gray-400">
                  {isExperience ? `${item.company} | ${item.dates}` : item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto">
                {isExperience ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="text-sm">{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">{detail}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.badges.map((badge, idx) => (
                        <Badge 
                          key={idx}
                          className="bg-gray-700 text-neonGreen border-gray-600"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default CardSlider;
