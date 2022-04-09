import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Pagination } from './Pagination';

test('renders pagination component', () => {
  const {container} = render(<Pagination />);
  expect(container).toHaveTextContent('Previous');
  expect(container).toHaveTextContent('Next');
});