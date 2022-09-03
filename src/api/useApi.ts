import {useEffect, useState} from "react";
import { URL_API } from "../constants/index";


function useApi() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<string>('')

    useEffect(()=>{
        setIsLoading(true)

        fetch(URL_API)
            .then(response => response.json() )
            .then(data => setData(data) )
            .catch(err => setError(err.message) )
        setIsLoading(false)
    },[])

    return {
        isLoading,
        data,
        error
    }
}


export default useApi;