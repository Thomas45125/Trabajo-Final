import { useState, useEffect } from "react";
export function useFetch (url) {

const [data, setData] = useState (null)
    const [load, setLoad] = useState (true)


    useEffect(() => {
        setLoad (true)
        fetch(url)
        .then((response)=> response.json())
        .then ((data) => setData(data))
        .finally (() => setLoad(false)) ;
    }, [])

    return { data, load}

}