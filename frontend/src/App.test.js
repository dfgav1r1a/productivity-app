import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils'
import App from './App';

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
    render(<App />, container);
});

expect(container.querySelector('h1').textContent).toBe('Productivity Tracker');
expect(container.querySelector('label[for=\'activity\']').textContent).toBe('Activity:');
expect(container.querySelector('label[for=\'time\']').textContent).toBe('Time Taken:');
expect(container.querySelector('button').textContent).toBe('Add');
});

