import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/owl.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js')
  }, [])

  return (
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col px-0 pb-5 mb-5">
          <main className="main">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </main>
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  )
}

export default MyApp;
