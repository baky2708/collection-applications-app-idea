import { render } from '@testing-library/react';
import Bin2Dec from '../../collection-applications/Bin2Dec';
import renderWithRouter from '../renderWithRouter';
describe('Header', () => {
it('should have home', () => {
    renderWithRouter(<Bin2Dec />);
  });
});
