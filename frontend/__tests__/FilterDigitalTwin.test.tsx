import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import FilterDigitalTwin from '../src/app/components/FilterDigitalTwin'

describe('FilterDigitalTwin Component Tests', () => {
  test('renders FilterDigitalTwin component', () => {
    render(<FilterDigitalTwin />)
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })

  test('renders select component with label Floor', () => {
    render(<FilterDigitalTwin />)
    expect(screen.getByTestId('floor-select')).toBeInTheDocument()
  })

  test('renders select item Floor 0', () => {
    render(<FilterDigitalTwin />)
    fireEvent.click(screen.getByTestId('floor-select')) // Open the select dropdown
    expect(screen.getByText('Floor 0')).toBeInTheDocument()
  })
})
