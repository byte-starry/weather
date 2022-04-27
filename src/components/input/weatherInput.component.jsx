import "./weatherInput.style.css";
import React from "react";

class weatherInput extends React.Component {
    constructor(){
        super();
        this.state = {
        input: "",
        name: "",
        country: "",
        temperature: "",
        description: "",
        maxTemperature: "",
        minTemperature: "",
        windSpeed: "",
        };
    }
    inputHandler = (event) => {
        this.setState({
          input: event.target.value,
        });
      };

      submitHandler = (event) => {
        event.preventDefault();
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=058cb8bdade82514fcbf8c1f7bf4b9a4&units=metric"
        )

        .then((response) => response.json())
        .then((data) => {
          this.setState({
            name: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            description: data.weather[0].description,
            maxTemperature: data.main.temp_max,
            minTemperature: data.main.temp_min,
            windSpeed: data.wind.speed,
          });
        });
    };

    render(){
        return (
            <>
              <form onSubmit={this.submitHandler}>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Enter city name"
                    onChange={this.inputHandler}
                  />
                </div>
              </form>
              {this.state.name && this.state.country && this.state.temperature &&(
                <weatherContent
                  name={this.state.name}
                  country={this.state.country}
                  temperature={this.state.temperature}
                  description={this.state.description}
                  maxTemperature={this.state.maxTemperature}
                  minTemperature={this.state.minTemperature}
                  windSpeed={this.state.windSpeed}
                />
              )}
            </>
          );
        }
    }

export default weatherInput;
