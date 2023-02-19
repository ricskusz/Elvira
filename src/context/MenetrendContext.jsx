import {useState, createContext} from 'react'

const MenetrendContext = createContext();

export const MenetrendProvider = ({children}) => {

    const [menetrend, setMenetrend] = useState(null);
    const [datum, setDatum] = useState("");
    const [route, setRoute] = useState("");
    const [loading, setLoading] = useState(false);

    const getMenetrend = async (vegpontok) => {

        if(vegpontok.indulas == vegpontok.celallomas) return "Nem lehet ugyan az a kiindulási pont mint a célállomás!";

        setLoading(prev => !prev);
        const response = await fetch(`https://apiv2.oroszi.net/elvira?from=${vegpontok.indulas}&to=${vegpontok.celallomas}`);
        const {timetable, date, route} = await response.json();

        if(!timetable){
            setMenetrend(null);
        } else {
            setMenetrend(timetable);
        }

        if(timetable.length == 0) return "Ezen a napon nem közlekedik ilyen vonat!";



        setDatum(date);
        setRoute(route);
        setLoading(prev => !prev);
    }

    return <MenetrendContext.Provider value = {
        {
            menetrend,
            getMenetrend,
            datum,
            route,
            loading,
        }
    }>{children}</MenetrendContext.Provider>
}

export default MenetrendContext;

