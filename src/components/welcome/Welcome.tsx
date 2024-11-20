import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { WelcomeLayout } from './WelcomeLayout';
import { Header } from '../common/Header';

export const Welcome: React.FC = () => {
  return (
    <WelcomeLayout>
      <Header title="Welcome" />
      <div className="flex-grow"></div>
      <ButtonGroup />
    </WelcomeLayout>
  );
};