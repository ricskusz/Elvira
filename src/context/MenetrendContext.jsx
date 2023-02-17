import {useState, createContext, useEffect} from 'react'

const MenetrendContext = createContext();

export const MenetrendProvider = ({children}) => {

    const [menetrend, setMenetrend] = useState({});

    const getMenetrend = async (vegpontok) => {
        const response = await fetch(`https://apiv2.oroszi.net/elvira?from=${vegpontok.indulas}&to=${vegpontok.celallomas}`);
        const valasz = await response.json();
        setMenetrend(valasz);
    }

    return <MenetrendContext.Provider value = {
        {
            menetrend,
            getMenetrend,
        }
    }>{children}</MenetrendContext.Provider>
}

export default MenetrendContext;

