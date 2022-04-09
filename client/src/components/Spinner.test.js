import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Spinner } from './Spinner';

test('renders Spinner successfully', () => {
  const {container} = render(<Spinner />)
  expect(container).toMatchSnapshot();
});