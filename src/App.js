import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
import MyOrders from './screens/MyOrders';

function App() {
  return (
 <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/createUser" element={<SignUp/>}/>
          <Route exact path="/Cart" element={<Cart/>}/>
          <Route exact path="/orderData" element={<MyOrders/>}/>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
