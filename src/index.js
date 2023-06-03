import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss'
import App from './App';

const title = 'React with Webpack and Babel';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App title={title} />);