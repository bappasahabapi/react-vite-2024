
import './App.css';
import Avatar from './components/Avatar';
// import Avatar from './components/Avatar'
import Profile from './components/Profile';
import Profile1 from './components/Profile1';

function App() {

  const name = "Bappa";
  const age = 27;
  const size = 'very big';

  return (
    <>

      <Profile
        name={name}
        age={age}
        size={size}
      />
      <br />
      <Profile1>
        <Avatar />
      </Profile1>
      <br />
      <Profile />
    </>



    // <Avatar
    // person={{
    //   name:'bappa',
    //   imageId: '1bX5QH6'
    // }}
    // size={100}
    // test='bappa'
    // />

  )
}

export default App
