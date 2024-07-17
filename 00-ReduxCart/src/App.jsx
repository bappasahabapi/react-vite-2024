import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart =useSelector(state=>state.ui.cartIsVisible)
  return (
    <Layout>
    {showCart &&<Cart />}
      <Products />
      {/* <hr /> */}
      {/* <h2 style={{textAlign:'center',color:"white", marginTop:'5px'}}>Redux <mark>Toolkit</mark> section</h2>
      <Products /> */}
    </Layout>
  );
}

export default App;
