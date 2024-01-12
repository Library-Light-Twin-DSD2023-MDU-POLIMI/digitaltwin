// FILEPATH: /Users/sanke1/Git/digitaltwin/frontend/__tests__/ReportWorkorder.test.tsx

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ReportWorkorder from '@/app/components/ReportWorkorder'

describe('ReportWorkorder Component Tests', () => {
  test('Ensure users can create and send work orders directly from the system', async () => {
    render(<ReportWorkorder />)

    const openModalButton = screen.getByRole('button')
    fireEvent.click(openModalButton)

    const issueDescriptionInput = await screen.findByTestId('issue-description')
    fireEvent.change(issueDescriptionInput, {
      target: { value: 'Test issue' },
    })

    const commentsInput = screen.getByTestId('comments')
    fireEvent.change(commentsInput, { target: { value: 'Test comment' } })

    const maintenanceDateInput = screen.getByLabelText('Maintenance Date')
    fireEvent.change(maintenanceDateInput, {
      target: { value: '2023-01-01' },
    })

    // Submit the work order
    const submitButton = screen.getByTestId('send-workorder-button')
    fireEvent.click(submitButton)

    // Check for confirmation of sending
    const confirmationMessage = await screen.findByText(
      'Work order sent successfully'
    )
    expect(confirmationMessage).toBeInTheDocument()
  })
})
