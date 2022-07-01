import { render, screen } from '@testing-library/react'
import SomeComponent from '../components/SomeComponent'
import '@testing-library/jest-dom'

describe('SomeComponent', () => {
  it('renders some component', () => {
    render(<SomeComponent />);

    const heading = screen.getByRole('heading', {
        name: /Some Component/i,
      })
      expect(heading).toBeInTheDocument();
  })
})


