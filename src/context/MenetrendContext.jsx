import {useState, createContext} from 'react'

const MenetrendContext = createContext();

export const MenetrendProvider = ({children}) => {

    const [menetrend, setMenetrend] = useState({});
    const [kiindulopont, setKindulopont] = useState("");
    const [celalomas, setCelallomas] = useState("");

    const getMenetrend = async () => {

        const response = await fetch(`https://apiv2.oroszi.net/elvira?from=${kiindulopont}&to=${celalomas}`);
        const valasz = await response.json();
        setMenetrend(valasz);
    }

    return <MenetrendContext.Provider value={
        {
            menetrend,
            setKindulopont,
            setCelallomas
        }
    }>{children}</MenetrendContext.Provider>
}

export default MenetrendContext;

