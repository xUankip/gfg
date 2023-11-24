import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ItemList from './ItemsList/ItemList';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Test from './Product/test-icon';
// import Item from './ItemsList/Item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
{/* <PlanCard /> */}
{/* <ItemList /> */}
{/* <Item /> */}
{/* <Test /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
