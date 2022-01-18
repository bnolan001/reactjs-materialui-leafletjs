import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from "react-router-dom";

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
      <HashRouter>
        <App />
      </HashRouter>,
  rootElement
);