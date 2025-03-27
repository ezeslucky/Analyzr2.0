/* eslint-disable @next/next/no-img-element */
'use client';

import { ReactNode, CSSProperties } from 'react';

import { Column } from '@umami/react-zen';
import TextBlock from '@/components/layout/textBlock';
import ImageBlock from '@/components/layout/imageBlock';
import AnimationContainer from '@/components/globals/animation-container';
import SectionBadge from '@/components/ui/section-badge';

export default function WebAnalytics() {
  return (
    <Column gap="6">
      {/* Header Section */}
      <TextBlock size="lg" className="text-center">
        <div className=" flex flex-col items-center text-center gap-4">

        <AnimationContainer animation="fadeUp" delay={0.2}>
              <SectionBadge title="Web Analytics" />
            </AnimationContainer>
          
          
          </div>
        <h2 className="text-2xl font-bold">A complete analytics solution with all the features you need.</h2>
        <p className="text-gray-600">
          Analyzr is packed with amazing features that enable you to better understand your website traffic.
        </p>
      </TextBlock>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Feature title="Traffic analysis" image="/images/feature-stats.png">
          Get insights into your traffic so you optimize for growth. Easily see all your metrics at a glance.
        </Feature>
        <Feature title="Visitor analysis" image="/images/feature-visitors.png" style={{ top: 30 }}>
          Get detailed breakdowns about your visitors including where they are located and what device they used.
        </Feature>
        <Feature title="Custom events" image="/images/feature-events.png" style={{ bottom: 30 }}>
          Track more than just pageviews. Capture any event on your website like button clicks and form entries.
        </Feature>
        <Feature title="Powerful filters" image="/images/feature-filters.png" style={{ left: 70, top: 50 }}>
          Dive deeper into your data using easy-to-apply filters. Segment your users by any metric such as browser, OS, and country.
        </Feature>
        <Feature title="Realtime data" image="/images/feature-realtime.png" style={{ top: 40 }}>
          Get a realtime view of your current website traffic. See the exact pages where your visitors are landing.
        </Feature>
        <Feature title="Trend detection" image="/images/feature-compare.png">
          Compare date periods to discover key trends in your traffic. Easily measure the success of your campaigns.
        </Feature>
      </div>

      
    </Column>
  );
}

/* Feature Component */
const Feature = ({
  title,
  image,
  style,
  children,
}: {
  title: string;
  image: string;
  style?: CSSProperties;
  children: ReactNode;
}) => {
  return (
    <TextBlock className="border-l-4 border-gray-300 p-4 transition-all hover:border-blue-500 cursor-pointer">
      <ImageBlock className="mb-4">
        <img src={image} style={style} alt={title} className="w-full h-48 object-cover rounded-lg shadow-md" />
      </ImageBlock>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500">{children}</p>
    </TextBlock>
  );
};
