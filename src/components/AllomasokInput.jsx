import { useContext, useState} from "react";
import TelepulesekContext from "../context/TelepulesekContext";
import MenetrendContext from "../context/MenetrendContext";
import Kezdoadatok from "./Kezdoadatok";

const AllomasokInput = () => {

    const [formData, setFormData] = useState({
        indulas: "",
        celallomas: ""
    });

    const {getMenetrend, menetrend} = useContext(MenetrendContext);
    const { telepulesek } = useContext(TelepulesekContext);

    const getSubString = (string, char1, char2) => {
        return string.substring(
            string.indexOf(char1) + 1,
            string.lastIndexOf(char2)
        );
    };

    const writeData = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.id]:e.target.value}));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        getMenetrend(formData);
        console.log(menetrend);
    }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-col">
            <label htmlFor="indulas">Kiinduló pont</label>
            <select 
                className="select select-bordered w-full max-w-xs"
                id="indulas"
                onChange={writeData}
                value={formData.indulas}>
                <option disabled selected>Válasszon kiinduló pontot</option>
                {telepulesek.split(",").map((telepules) => (
                    <option value={getSubString(telepules, '"', '"')}>
                    {getSubString(telepules, '"', '"')}
                    </option>
                ))}
            </select>
        </div>
        <div className="d-flex flex-col">
            <label htmlFor="celallomas">Célállomás</label>
            <select 
                className="select select-bordered w-full max-w-xs"
                id="celallomas"
                onChange={writeData}
                value={formData.celallomas}
            >
                <option disabled selected>Válasszon célállomás</option>
                {telepulesek.split(",").map((telepules) => (
                    <option value={getSubString(telepules, '"', '"')}>
                    {getSubString(telepules, '"', '"')}
                    </option>
                ))}
            </select>
        </div>
        <button type="submit" className="btn">Keresés</button>
      </form>
      <Kezdoadatok adatok={menetrend} />
    </div>
  );
};

export default AllomasokInput;