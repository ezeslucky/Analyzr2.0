'use client';

import { Column, Row,  } from '@umami/react-zen';


import ContactForm from './ContactForm';
import PageHeader from '@/components/globals/PageHeader';
import SocialMedia from '@/components/globals/SocialMedia';

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" description="We would love to hear from you!" />
      <Row wrap="wrap">
        <ContactForm />
        <Row alignItems="center" justifyContent="center">
          <Column alignItems="center" gap="12" style={{ marginTop: '3rem' }}>
            <Column alignItems="center" gap="6">
              <h3>Interested in learning more?</h3>
              {/* <Button variant="primary" asChild>
                {/* <Link href="https://calendly.com/mikecao/umami-demo" target="_blank">
                  Book a demo meeting
                </Link> */}
              {/* </Button> */} 
            </Column>
            <Column alignItems="center" gap="6">
              <h3>Connect with us</h3>
              <SocialMedia size="lg" />
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
}
