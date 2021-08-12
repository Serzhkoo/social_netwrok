import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { SocialNetworkApp } from './App';

test('renders without crashing', () => {
  // render(<SocialNetworkApp />);
  // const linkElement = screen.getByText(/Profile/i);
  // expect(linkElement).toBeInTheDocument();
  const div = document.createElement('div');
  ReactDOM.render(<SocialNetworkApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
