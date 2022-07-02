import { render, screen } from '@testing-library/react'
import Display from '../components/Display'
import '@testing-library/jest-dom'

describe('Display', () => {
  it('works', () => {
    render(<Display />);
  })
})
