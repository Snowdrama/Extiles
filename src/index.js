import React from 'react';
import ReactDOM from 'react-dom';
import createLayout from './component/layout';

((global) => {
    const Layout = createLayout();
  
    const container = global.document.createElement('div');
    global.document.body.appendChild(container);
  
    const render = () => ReactDOM.render(<Layout />, container);
  
    render();
  })(window);
