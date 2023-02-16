import { MainLayout } from '../../layouts/main/main-layout';
import { AdvertisementPoster } from '../../poster/advertisement/advertisement-poster';
import { Section } from '../../sections/components/section';
import { SectionSlider } from '../../sliders/section-sliders/components/section-slider';

export const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <AdvertisementPoster />
        <Section title='New Products' seeAllPath='#' query='new' />
        <SectionSlider />
        <Section title='Best Sellers' seeAllPath='#' query='best' />
        <Section title='Discount' seeAllPath='#' query='discount' />
      </MainLayout>
    </div>
  );
};
