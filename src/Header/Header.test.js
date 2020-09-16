import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from './Header'

test ('renders the header', () => {
  render(<Header />)
  const text = screen.getByText('Add your notes here')
  expect(text).toBeInTheDocument()
})