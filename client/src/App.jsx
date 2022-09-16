import { useState } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [prediction, setPrediction] = useState()
  const [formValue, setFormValue] = useState({
    airline: '',
    source_city: '',
    departure_time: '',
    stops: '',
    arrival_time: '',
    destination_city: '',
    class: '',
    duration: '',
  })

  const postReq = () => {
    let data = JSON.stringify(
      {
        airline: formValue.airline,
        source_city: formValue.source_city,
        departure_time: formValue.departure_time,
        stops: formValue.stops,
        arrival_time: formValue.arrival_time,
        destination_city: formValue.destination_city,
        class: formValue.class,
        duration: formValue.duration
      }
    )

    axios.post("http://127.0.0.1:8000/predict", data).then((res) => {
      setPrediction(res.data[0])
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    postReq()
  }


  return (
    <div className="App">
      <h1>Flight Price Prediction</h1>

      <div id="main">
        <form action="" onSubmit={handleSubmit}>

          <h2>Features</h2>

          <label htmlFor="airline"> Airline </label>
          <select name="airline" id="airline" onChange={(e) => { setFormValue({ ...formValue, airline: e.target.value }) }}>
            <option value="SpiceJet">SpiceJet</option>
            <option value="AirAsia">AirAsia</option>
            <option value="Vistara">Vistara</option>
            <option value="GO_FIRST">GO_FIRST</option>
            <option value="Indigo">Indigo</option>
            <option value="Air_India">Air_India</option>
          </select>

          <label htmlFor="source_city">Source City</label>
          <select name="source_city" id="source_city" onChange={(e) => { setFormValue({ ...formValue, source_city: e.target.value }) }}>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderbad</option>
            <option value="Chennai">Chennai</option>
          </select>

          <label htmlFor="departure_time">Departure Time</label>
          <select name="departure_time" id="departure_time" onChange={(e) => { setFormValue({ ...formValue, departure_time: e.target.value }) }}>
            <option value="Evening">Evening</option>
            <option value="Early_Morning">Early_Morning</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
            <option value="Late_Night">Late_Night</option>
          </select>

          <label htmlFor="stops">Stops</label>
          <select name="stops" id="stops" onChange={(e) => { setFormValue({ ...formValue, stops: e.target.value }) }}>
            <option value="zero">zero</option>
            <option value="one">one</option>
            <option value="two_or_more">two_or_more</option>
          </select>

          <label htmlFor="arrival_time">Arrival time</label>
          <select name="arrival_time" id="arrival_time" onChange={(e) => { setFormValue({ ...formValue, arrival_time: e.target.value }) }}>
            <option value="Evening">Evening</option>
            <option value="Early_Morning">Early_Morning</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
            <option value="Late_Night">Late_Night</option>
          </select>

          <label htmlFor="destination_city">Destination City</label>
          <select name="destination_city" id="destination_city" onChange={(e) => { setFormValue({ ...formValue, destination_city: e.target.value }) }}>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderbad</option>
            <option value="Chennai">Chennai</option>
          </select>

          <label htmlFor="class">class</label>
          <select name="class" id="class" onChange={(e) => { setFormValue({ ...formValue, class: e.target.value }) }}>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
          </select>

          <label htmlFor="duration">duration (hours)</label>
          <input type="number" name="duration" id="duration" step={0.01} onChange={(e) => { setFormValue({ ...formValue, duration: e.target.value }) }} />

          <h4><button>Predict</button></h4>
        </form>
        <div>
          <h2>Prediction with ridge reg model</h2>
          <h3>{prediction}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
