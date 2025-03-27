/* eslint-disable react/display-name */
import { Metadata } from 'next';
import FeaturesPage from './FeaturesPage';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <article>
      <FeaturesPage />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Features',
};
