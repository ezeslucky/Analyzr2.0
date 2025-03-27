import { Column, Heading, Text } from '@umami/react-zen';
import { ReactNode } from 'react';

export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: ReactNode;
}) {
  return (
    <Column 
      gap="4" 
      className="flex flex-col items-center justify-center my-10"
    >
      <Heading size="1" as="h1" className="text-3xl font-bold">
        {title}
      </Heading>
      {description && (
        <Text size="3" color="muted" className="text-gray-500 text-center">
          {description}
        </Text>
      )}
    </Column>
  );
}
