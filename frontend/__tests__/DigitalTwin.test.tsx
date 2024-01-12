import React from 'react'
import { render, screen } from '@testing-library/react'
import DigitalTwin from '@/app/components/digitalTwin'

describe('DigitalTwin', () => {
  test('renders DigitalTwin component without crashing', () => {
    const mockAsset = {
      uid: '1',
      currentStatus: 'Good',
      predictiveStatus: {
        status: 'Good',
        predictedTime: 1,
      },
      location: {
        floor: 1,
        section: 'A',
        area: 'Test',
      },
    }

    const mockDigitalTwin = {
      timestamp: '2022-01-01T00:00:00Z',
      assetId: '1',
      illuminance: {
        maintainedAverage: 1,
        uniformityRatio: 1,
      },
      glare: {
        UGR: 1,
      },
      colorRendering: {
        CRI: 1,
      },
      colorTemperature: {
        CCT: 1,
        Duv: 1,
      },
      flicker: {
        SVM: 1,
      },
      colorPreference: {
        PVF: 1,
      },
      photobiologicalSafety: {
        UV: 1,
      },
    }

    render(<DigitalTwin asset={mockAsset} digitalTwin={mockDigitalTwin} />)
  })

  test('displays the correct values', () => {
    const mockAsset = {
      uid: '1',
      currentStatus: 'Good',
      predictiveStatus: {
        status: 'Good',
        predictedTime: 1,
      },
      location: {
        floor: 1,
        section: 'A',
        area: 'Test',
      },
    }

    const mockDigitalTwin = {
      timestamp: '2022-01-01T00:00:00Z',
      assetId: '1',
      illuminance: {
        maintainedAverage: 1,
        uniformityRatio: 1,
      },
      glare: {
        UGR: 1,
      },
      colorRendering: {
        CRI: 1,
      },
      colorTemperature: {
        CCT: 1,
        Duv: 1,
      },
      flicker: {
        SVM: 1,
      },
      colorPreference: {
        PVF: 1,
      },
      photobiologicalSafety: {
        UV: 1,
      },
    }

    render(<DigitalTwin asset={mockAsset} digitalTwin={mockDigitalTwin} />)

    expect(screen.getByText('Test Area - A')).toBeInTheDocument()
    expect(screen.getByText('1 Floor')).toBeInTheDocument()
    expect(screen.getAllByText('1').length).toBe(7) // Adjust this number based on how many '1's you expect to be in the document
  })
})
