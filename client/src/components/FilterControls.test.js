import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilterControls } from './FilterControls';

test('renders filter controls component', () => {
  const {container} = render(<FilterControls />);
  expect(container).toMatchSnapshot();
});