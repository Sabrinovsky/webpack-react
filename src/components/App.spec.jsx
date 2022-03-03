// import '@testing-library/jest-dom'
import App from './App'
import { render, screen } from '@testing-library/react';

describe('App',()=>{
  it('is rendered',()=>{
    render(<App />)

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
