import { useEffect, useState } from "react";
import { URL_API } from "../constants/index";


function useApi(
    URL: string,
    method: string,
    params: Object,
    headers: Object = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        setIsLoading(true)
        fetch(URL, {
            method,
            body: JSON.stringify(params),
            headers,
        })
            .then(response => response.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
    }, [])

    return {
        isLoading,
        data,
        error
    }
}


export default useApi;