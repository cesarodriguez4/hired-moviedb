import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { LanguageSelector } from './LanguageSelector'

test('renders movie gallery', () => {
  const {container} = render(<LanguageSelector />)
  expect(container).toMatchSnapshot();
});