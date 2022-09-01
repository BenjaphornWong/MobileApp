import { useState, useEffect } from 'react'
import yelpApi from './yelpApi'

export default () =>{
    const [result, setResult] = useState([])
    const [errMessage,setErrMessage] = useState("")

    const searchFunc = async (searchTerm) =>{
        try {
            const response = await yelpApi.get('/search',{
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: "new york",
                }
            });
            setResult(response.data.businesses);
        } catch (error) {
            setErrMessage("Someting wrong")
        }

    }
    useEffect(() => {
        searchFunc("pizza");
    }, []); //โหลดหน้าแรกครั้งแรก

    return[searchFunc,result,errMessage]
}