import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Books from './Component/Books/Books';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Books />
      </div>
    </Provider>
  );
}

export default App;
