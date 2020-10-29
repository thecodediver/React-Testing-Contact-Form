import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils'

test('renders contact form', () => {
  render(<ContactForm />)
})

test('User can fill out and submit form', async () => {
  render(<ContactForm />)

  const firstNameInput = screen.getByLabelText(/first name/i)
  const lastNameInput = screen.getByLabelText(/last name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const messageInput = screen.getByLabelText(/message/i)
  fireEvent.change(firstNameInput, {target: { value: 'James', name: 'firstName'}})
  fireEvent.change(lastNameInput, {target: { value: 'Lundin', name: 'lastName'}})
  fireEvent.change(emailInput, {target: { value: 'jamesjlundin@gmail.com', name: 'email'}})
  fireEvent.change(messageInput, {target: { value: 'Hey There', name: 'message'}})

  const button = screen.getByRole('button', {name:/submit/i})
  fireEvent.click(button)
  
  const newFirstNameText = await screen.getByText("Message")
  expect(newFirstNameText).toBeTruthy()
})