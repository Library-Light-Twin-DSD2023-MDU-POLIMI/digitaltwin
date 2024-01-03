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

  test('filters lighting assets correctly', async () => {
    // Render the component
    render(<FilterDigitalTwin />)

    // Simulate user interactions with the filter
    fireEvent.click(screen.getByTestId('floor-select')) // Open the select dropdown
    fireEvent.click(screen.getByText('Floor 0')) // Select 'Floor 0'

    // Check if the displayed results match the expected results
    const results = await screen.findAllByTestId('lighting-asset')
    expect(results).toHaveLength(3) // Check if the correct number of results is displayed
    results.forEach((result, index) => {
      expect(result.textContent).toBe(`Lighting Asset ${index + 1}`) // Check if the correct results are displayed
    })
  })
})
