import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import WorkorderTable, {
  capitalize,
} from '../src/app/components/WorkorderTable'

describe('WorkorderTable Component Tests', () => {
  test('capitalize function works correctly', () => {
    expect(capitalize('test')).toBe('Test')
    expect(capitalize('workorder')).toBe('Workorder')
  })

  test('filterValue state updates correctly on input change', () => {
    render(<WorkorderTable />)
    const filterInput = screen.getByTestId('search-input')
    fireEvent.change(filterInput, { target: { value: 'Test filter' } })
    expect(screen.getByDisplayValue('Test filter')).toBeInTheDocument()
  })

  // Add more tests as needed for other state updates and interactions
})
