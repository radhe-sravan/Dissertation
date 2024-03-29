import { useState, useEffect } from "react";

function DynamicPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all?fields=name,flags')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    return <div>{data != null && data.map(item => {
        return <div key={item.name.common}>
            <img src={item.flags.svg} alt={item.flags.alt} width={200} height={200}/>
            <p>{item.name.common}</p>
        </div>
    })}</div>
}

export default DynamicPage;