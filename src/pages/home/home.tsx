import React from 'react';
import { MainLayout } from '../../layouts/main/main-layout';
import { AdvertisementPoster } from '../../poster/advertisement/advertisement-poster';
import { Section } from '../../sections/components/section';

export const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <AdvertisementPoster />
        <Section title='New Products' seeAllPath='#' query='new' />
        <Section title='Best Sellers' seeAllPath='#' query='best' />
        <Section title='Discount' seeAllPath='#' query='discount' />
      </MainLayout>
    </div>
  );
};
