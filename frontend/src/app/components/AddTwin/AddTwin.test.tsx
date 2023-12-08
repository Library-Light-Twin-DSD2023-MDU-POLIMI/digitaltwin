import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddTwin from './AddTwin'

describe('AddTwin Component Tests', () => {
  test('renders AddTwin component', () => {
    render(<AddTwin />)
    expect(screen.getByText('Add a new digital twin')).toBeInTheDocument()
  })

  test('hides card when close button is clicked', () => {
    render(<AddTwin />)
    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)
    expect(screen.queryByText('Add a new digital twin')).toBeNull()
  })

  // Additional tests can be written for form interactions, state changes, etc.
})
