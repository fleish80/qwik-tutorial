import { App } from './components/app/app';

import './global.css';

export default () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Tutorial</title>
      </head>
      <body>
        <App />
      </body>
    </html>
  );
};
