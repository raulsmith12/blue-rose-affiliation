import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Header from '../components/Header';
import '../styles/owl.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js')
  }, [])

  return (
    <div className="container-fluid pe-0">
      <div className="row">
        <div className="col px-0">
          <main className="main">
            <Header />
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default MyApp;
