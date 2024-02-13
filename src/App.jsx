import Header from "./components/header/Header"
import WeatherBoard from "./components/weather/WeatherBoard"

function App() {


  return (
    <div className="grid place-items-center h-screen">
      <Header/>
      <main>
        <section>
          <WeatherBoard/>
        </section>
      </main>
    </div>
  )
}

export default App
