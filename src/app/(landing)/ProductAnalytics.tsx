/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Column, Row } from '@umami/react-zen';
import Image from 'next/image';
import ImageBlock from '@/components/layout/imageBlock';
import TextBlock from '@/components/layout/textBlock';



const items = [
  { name: 'User journeys', description: 'Understand how users navigate through your product.' },
  { name: 'User retention', description: 'Measure how often users return to your website.' },
  { name: 'Funnels', description: 'Analyze conversion and drop-off rates.' },
];


const images = [
  "/images/feature-user-journeys.png",
  "/images/feature-user-retention.png",
  "/images/feature-funnels.png",
];
export default function ProductAnalytics() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Row gap="6" className="items-center">
      {/* Image Block */}
      <ImageBlock className="relative w-full hidden sm:block h-[400px]">
        {images.map((src, index) => (
          <div
            key={src}
            className={classNames(
              'absolute inset-0 opacity-0 transform translate-y-5 transition-all duration-500 ease-in-out',
              num === index && 'opacity-100 translate-y-0'
            )}
          >
            <Image
              src={src}
              alt="screenshot"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </ImageBlock>

      {/* Text and Selection Items */}
      <Column gap="6">
        <TextBlock align="center" size="lg">
          <header className="text-blue-600 font-bold">Product Analytics</header>
          <h2 className="font-bold">Turn User Behavior into Insights</h2>
          <p className="text-gray-600">
            Analyzr helps you understand why users do what they do, so you can optimize your conversion paths.
          </p>
        </TextBlock>

        {/* Feature List */}
        <Column gap="3">
          {items.map(({ name, description }, index) => (
            <TextBlock
              key={name}
              className={classNames(
                'group cursor-pointer border-l-2 pl-5 transition-all duration-500',
                num === index ? 'border-blue-500 text-blue-600' : 'border-gray-300'
              )}
              onClick={() => setNum(index)}
            >
              <h3 className="font-semibold">{name}</h3>
              <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                {description}
              </p>
            </TextBlock>
          ))}
        </Column>
      </Column>
    </Row>
  );
}
