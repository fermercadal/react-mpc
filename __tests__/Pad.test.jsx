import { render, screen } from '@testing-library/react'
import Pad from '../components/Pad'
import '@testing-library/jest-dom'

describe('Pad', () => {
  it('works', () => {
    render(<Pad />);
  })
})
