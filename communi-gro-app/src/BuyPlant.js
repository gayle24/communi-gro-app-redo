import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BuyPlant({ plants }) {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    function handleGoBack(){
        navigate("/");
    }

    function handleSubmit(){
        if(input.length > 1){
           window.alert("Order made!");
           
        } else {
            window.alert("Kindly Specify your Address")
        }
    }

    const background = {
        backgroundImage: `url('https://assets.bluethumb.com.au/media/image/thumbnail/5000/415/eyJpZCI6InVwbG9hZHMvbGlzdGluZy82ODczMzcvY2hyaXN0aW5lLWJlYXJkLWh1c3RsZS1hbmQtYnVzdGxlLWR1cGxpY2F0ZS1ibHVldGh1bWItNjEzZS5qcGciLCJzdG9yYWdlIjoic3RvcmUiLCJtZXRhZGF0YSI6eyJmaWxlbmFtZSI6ImNocmlzdGluZS1iZWFyZC1odXN0bGUtYW5kLWJ1c3RsZS1kdXBsaWNhdGUtYmx1ZXRodW1iLTYxM2UuanBnIiwibWltZV90eXBlIjpudWxsfX0?signature=c014057e5a5c945d5c029e717ecb4c38322b0a9617df185e1ad9229f1838ed19')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

  return (
    <div className='buyplant' style={background}>
      <form>
        <h2>Order For your Favourite Plant</h2>
        <label htmlFor='plant_names'>Select a Plant</label>
        <br/>
        <select name='plant_names' id='plant_names'>
        <option value='' disabled>Select a plant...</option>
          {plants.map((plant) => (
            <option key={plant.id} id={plant.id} value={plant.common_name}>
              {plant.common_name}
            </option>
          ))}
        </select>
        <p></p>
        <label htmlFor='plant_quantity'>Quantity</label><br/>
        <input name="plant_quantity" type='number' placeholder='1'/>
        <p></p>
        <label htmlFor='plant_address'>Address</label><br/>
        <input name="plant_adress" type='text' placeholder="Address" onChange={(e) => setInput(e.target.value)}/>
        <p></p>
        {/* <input type='submit' value="Place Order" /> */}
        <button onClick={handleSubmit}>PLace Order</button>
        <button onClick={handleGoBack}>Return to Home Page</button>
      </form>
    </div>
  );
}

export default BuyPlant;