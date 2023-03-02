import React from 'react';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Provider store={store}>
          <Header />
          <Homepage />
          <Footer />
        </Provider>
      </React.StrictMode>
    </div>
  );
}

export default App;
