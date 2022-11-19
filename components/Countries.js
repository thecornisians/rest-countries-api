import { useState, useEffect } from "react"

export default function getCountries(){
        const [countries, setCountries] = useState([])


    function getCountryData(){
         try {
                const res = fetch('https://restcountries.com/v2/all')
                .then( res =>  res.json())
                setCountries(res)
                } 
        catch (error) {
                console.log(error)
            }
    }


    useEffect(() =>{
        getCountryData()
    }, [])

    return(
        <>
            {countries.length > 0 ? <p>{countries[0].name}</p> : <p>I don't know what I going on</p>}
        </>
    )
}