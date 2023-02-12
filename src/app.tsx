import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import './app.scss';

import { HomePage } from './pages/home/home';
import { pagesConfig } from './pages/pages.config';
import { ProductDetailsPage } from './pages/product-details/product-deatils';
import { PublicRouteGuard } from './pages/_gurads/public-route-guard';
import './theme/global.css';
import { GlobalStyles } from './theme/global.styled';
import { theme } from './theme/theme';

export const App = () => {
  console.log('asdfdsf');
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyles />
        <Suspense fallback={'loading...'}>
          <BrowserRouter>
            <Routes>
              <Route
                path={pagesConfig.home.path}
                caseSensitive
                element={
                  <PublicRouteGuard>
                    <HomePage />
                  </PublicRouteGuard>
                }
              />
              <Route
                path={pagesConfig.productDetails.path}
                element={
                  <PublicRouteGuard>
                    <ProductDetailsPage />
                  </PublicRouteGuard>
                }
              />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </div>
  );
};
