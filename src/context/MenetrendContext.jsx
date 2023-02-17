import {useState, createContext} from 'react'

const MenetrendContext = createContext();

export const MenetrendProvider = ({children}) => {

    const [menetrend, setMenetrend] = useState({});

    const getMenetrend=async (from, to)=>{
        const response=await fetch('https://apiv2.oroszi.net/elvira?from=B%C3%A9k%C3%A9scsaba&to=Gyula');

        const valasz=await response.json();
        setMenetrend(valasz);

    }
    return <MenetrendContext.Provider value={
        {
            menetrend
        }
    }>{children}</MenetrendContext.Provider>
}

export default MenetrendContext;

