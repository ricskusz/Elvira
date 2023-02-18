import {useState, createContext} from 'react'

const MenetrendContext = createContext();

export const MenetrendProvider = ({children}) => {

    const [menetrend, setMenetrend] = useState({});
    const [datum, setDatum] = useState("");
    const [route, setRoute] = useState("");

    const getMenetrend = async (vegpontok) => {

        const response = await fetch(`https://apiv2.oroszi.net/elvira?from=${vegpontok.indulas}&to=${vegpontok.celallomas}`);
        const {timetable, date, route} = await response.json();

        setMenetrend(timetable);
        setDatum(date);
        setRoute(route);
    }

    return <MenetrendContext.Provider value = {
        {
            menetrend,
            getMenetrend,
            datum,
            route
        }
    }>{children}</MenetrendContext.Provider>
}

export default MenetrendContext;

