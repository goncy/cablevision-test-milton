import React, {Component} from "react";

import weather from "./services/weather";
import BigWeather from "./components/BigWeather";

import "./App.css";

class App extends Component {
  state = {
    data: null,
    loading: true,
    error: null,
    criteria: "Buenos Aires",
    format: "farenheit",
  };

  componentDidMount() {
    this.getForecast(this.state.criteria);
  }

  async getForecast(city) {
    this.setState({
      data: [],
      loading: true,
    });

    const {data} = await weather.byCity.forecast(city);

    this.setState({
      data,
      loading: false,
    });
  }

  render() {
    const {data, loading, criteria, format} = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    const [main, ...forecast] = data.list;

    return (
      <div>
        <h1>Hoy</h1>
        <BigWeather name={data.city.name} temp={main.deg} date={main.dt} />
        <h2>Proximos 6 dias</h2>
        {forecast.map((day, index) => (
          <BigWeather
            key={index}
            name={data.city.name}
            temp={day.deg}
            date={day.dt}
            format={format}
          />
        ))}
        <input
          onChange={e => this.setState({criteria: e.target.value})}
          value={criteria}
          type="text"
        />
        <button onClick={() => this.getForecast(criteria)}>Buscar Clima</button>
        <button onClick={() => this.setState({format: "farenheit"})}>
          Farenheit
        </button>
        <button onClick={() => this.setState({format: "celsius"})}>
          Celsius
        </button>
      </div>
    );
  }
}

export default App;
