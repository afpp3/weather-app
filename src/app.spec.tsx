// import { App } from '@/app'
import { render, screen } from '@testing-library/react'
import App from '@/App'

it('Test', () => {
  render(<App />)

  const button = screen.getByRole('button')
  expect(button).toBeEnabled()
  expect(button).toHaveTextContent(/cout is/i)
})
