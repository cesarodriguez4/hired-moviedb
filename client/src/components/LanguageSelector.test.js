import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { LanguageSelector } from './LanguageSelector'

test('renders language selector', () => {
  const {container} = render(<LanguageSelector />)
  expect(container).toHaveTextContent('Language:')
});