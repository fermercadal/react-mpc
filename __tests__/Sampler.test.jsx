import { render, screen } from '@testing-library/react'
import Sampler from '../components/Sampler'
import '@testing-library/jest-dom'

describe('Sampler', () => {
  it('works', () => {
    render(<Sampler />);
  })
})
