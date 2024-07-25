import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import TodoHeader from './components/Todo/TodoHeader';
import Notes from './components/Note/Notes';


function App() {
  const showCart =useSelector(state=>state.ui.cartIsVisible)
  return (
    <Layout>
    {showCart &&<Cart />}
      <Products />
      <hr />
      <div style={{display:'flex',justifyContent:'center', marginTop:'40px'}}>
      <TodoHeader />
      </div>
      <Notes/>
      {/* <h2 style={{textAlign:'center',color:"white", marginTop:'5px'}}>Redux <mark>Toolkit</mark> section</h2>
      <Products /> */}
    </Layout>
  );
}

export default App;
