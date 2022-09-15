import './App.css'

function App() {
  
  return (
    <div className="App">
      <h1>Flight Price Prediction</h1>

      <form action="">

      <label htmlFor="airline"> Airline </label>
      <select name="airline" id="airline">
        <option value="SpiceJet">SpiceJet</option>
        <option value="AirAsia">AirAsia</option>
        <option value="Vistara">Vistara</option>
        <option value="GO_FIRST">GO_FIRST</option>
        <option value="Indigo">Indigo</option>
        <option value="Air_India">Air_India</option>
      </select>

      <label htmlFor="source_city">Source City</label>
      <select name="source_city" id="source_city">
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Hyderabad">Hyderbad</option>
        <option value="Chennai">Chennai</option>
      </select>

      <label htmlFor="stops">Stops</label>
      <select name="stops" id="stops">
        <option value="zero">zero</option>
        <option value="one">one</option>
        <option value="two_or_more">two_or_more</option>
      </select>



      </form>  
        
    </div>
  )
}

export default App
