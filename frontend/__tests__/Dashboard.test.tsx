import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '@/app/page'

// Mock the external JSON data before any imports that might use it
jest.mock('../src/app/digitalTwin.json', () => ({
  DigitalTwins: [
    {
      timestamp: '2023-11-20T00:00:00Z',
      assetId: 'mock_id1',
      illuminance: {
        maintainedAverage: 55,
        uniformityRatio: 8,
      },
      glare: {
        UGR: 3,
      },
      colorRendering: {
        CRI: 100,
      },
      colorTemperature: {
        CCT: 5000,
        Duv: 45,
      },
      flicker: {
        SVM: 0.15,
      },
      colorPreference: {
        PVF: 85,
      },
      photobiologicalSafety: {
        UV: 1.5,
      },
    },
    {
      timestamp: '2023-11-21T00:00:00Z',
      assetId: 'mock_id2',
      illuminance: {
        maintainedAverage: 60,
        uniformityRatio: 6,
      },
      glare: {
        UGR: 5,
      },
      colorRendering: {
        CRI: 110,
      },
      colorTemperature: {
        CCT: 5500,
        Duv: 10,
      },
      flicker: {
        SVM: 0.25,
      },
      colorPreference: {
        PVF: 75,
      },
      photobiologicalSafety: {
        UV: 2.5,
      },
    },
    {
      timestamp: '2023-11-22T00:00:00Z',
      assetId: 'mock_id3',
      illuminance: {
        maintainedAverage: 65,
        uniformityRatio: 7,
      },
      glare: {
        UGR: 4,
      },
      colorRendering: {
        CRI: 120,
      },
      colorTemperature: {
        CCT: 5300,
        Duv: 5,
      },
      flicker: {
        SVM: 0.35,
      },
      colorPreference: {
        PVF: 80,
      },
      photobiologicalSafety: {
        UV: 3.5,
      },
    },
  ],
}))

describe('Home Component Tests', () => {
  test('renders without crashing', () => {
    render(<Page />)
    // Add assertions to check if certain parts of your component are rendered
  })

  test('search input changes state', () => {
    render(<Page />)
    const input = screen.getByTestId('search-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
    // Add more assertions if needed
  })

  // Add more tests for other functionalities like toggleAddTwin, filtering logic, etc.
})
