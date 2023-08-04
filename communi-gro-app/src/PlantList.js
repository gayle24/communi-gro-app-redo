import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlantList({plants}) {
    // const[plantimage, setPlantImage] = useState("")
    // console.log(plants)
    
    const navigate = useNavigate();
    const disp = plants.map(plant=>{

        // console.log(Object.keys(plant) );
            if(plant.default_image){
                // console.log("No image")
                // console.log(plant.default_image.small_url)
                // plantImage = (plant.default_image.small_url)
                plant.plantImage = plant.default_image.small_url
            }
            else{
                plant.plantImage = "https://mendocinomaples.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-04-at-8.48.08-PM-247x371.png"
            }
            // console.log(plant)
        
    })

    function handleClick(){
        navigate("/buyplant");
    }

  return (
    <div className='mainlist'>
        {plants.map(plant=>(
            <div className="innerlist" key={plant.id}>
                <h4>{plant.common_name}</h4>
                <img src={plant.plantImage} alt={plant.common_name}/>
                <p>Scientific name: {plant.scientific_name}</p>
                <p>Other name: {plant.other_name} 
                </p>
                <p>Cycle: {plant.cycle}</p>
                <p>Watering: {plant.watering}</p>
                <p>Sunlight: {plant.sunlight} </p>
                <button onClick={handleClick}>Order Seedlings</button>
            </div>
        ))}
    </div>
  )
}

export default PlantList;