import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils'
import Login from './Login';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders App component', () => {
  act(() => {
    render(<Login />, container);
});

expect(container.querySelector('h1').textContent).toBe('Login');
expect(container.querySelector('label[for=\'email\']').textContent).toBe('Email: ');
expect(container.querySelector('label[for=\'password\']').textContent).toBe('Password: ');
expect(container.querySelector('button').textContent).toBe('Login');


});