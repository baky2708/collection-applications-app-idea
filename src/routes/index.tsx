import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import Bin2Dec from '../collection-applications/Bin2Dec';
import ResetCss from '../GlobalStyles/ResetCss';
import GlobalStyles from '../GlobalStyles';

const AppRoutes = () => (
  <BrowserRouter>
    <ResetCss />
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/application/Bin2Dec" element={<Bin2Dec />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
