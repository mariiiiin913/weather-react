import React, {useState} from "react";

export default function Search(){
    const[city, setCity]=useState("");

    function handleSubmit(event){
        event.preventDefault();
        if (city.length > 0){
            alert(city);
        }else{
            alert("Enter a city!");
        }
    }

    function updateCity(event){
     setCity(event.target.value);
    }
    
    return (
        <form className="mb-3" onSubmit={handleSubmit}>
        <input type="search" placeholder="  Enter a city..." className="form-control"
                autoComplete="off" onChange={updateCity} />             
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </form>
    )
}