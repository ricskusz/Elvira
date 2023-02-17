import {useState, createContext, useEffect} from 'react'

const MenetrendContext = createContext();

export const MenetrendProvider = ({children}) => {

    const [menetrend, setMenetrend] = useState({});
    const [vegpontok, setVegpontok] = useState({});

    const getMenetrend = async () => {
        console.log(vegpontok.indulas)
        const response = await fetch(`https://apiv2.oroszi.net/elvira?from=${vegpontok.indulas}&to=${vegpontok.celallomas}`);
        const valasz = await response.json();
        setMenetrend(valasz);
        console.log(menetrend);
    }

    return <MenetrendContext.Provider value = {
        {
            menetrend,
            setVegpontok,
            getMenetrend,
            vegpontok
        }
    }>{children}</MenetrendContext.Provider>
}

export default MenetrendContext;

