import Header from "./components/header/Header"
import WeatherBoard from "./components/weather/WeatherBoard"
import { WeatherProvider } from "./provider"

function App() {


  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>

  )
}

export default App
