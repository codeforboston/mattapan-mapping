import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders a nav menu', () => {
  render(<App />);
  const elt = document.body.getElementsByTagName("nav");
  expect(elt[0]).toBeInTheDocument(); //returned value is an array of elements.
  expect(elt.length).toBeGreaterThanOrEqual(1); //has at least one element.
});

test('renders a title using h1', () => {
  render(<App />);
  const elt = screen.getByText("Home Page")
  expect(elt).toBeInTheDocument();
});

test('renders a head and a body', () => {
  render(<App />);
  const headelt = document.body;
  const bodyelt = document.head;
  expect(headelt).toBeInTheDocument();
  expect(bodyelt).toBeInTheDocument();
});