import Form from './components/form/Form'
import mapa from '../public/map.png'
import styles from './App.module.css'
import useWeather from './hooks/useWeather'

function App() {

  const { fetchWeather } = useWeather()

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Aplicación de clima</h1>
          <figure className={styles.figure}>
            <img src={mapa} alt="" />
          </figure>
        </div>
        <Form 
          fetchWeather={fetchWeather}
        />
      </div>
    </>
  )
}

export default App
