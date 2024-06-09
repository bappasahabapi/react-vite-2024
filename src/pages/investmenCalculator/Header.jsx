import logo from '../../assets/jsx-ui.png'

export default function Header() {
  return (
    <header id='header'>
        <img src={logo} alt="" />
        <h2>Investment Calculator</h2>
        <p>Implement two <span>data binding</span> + <span>lifting State up</span> concept</p>
    </header>
  )
}
