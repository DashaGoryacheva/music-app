import _ from 'lodash';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './style.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter >
        <App />
    </BrowserRouter>
);