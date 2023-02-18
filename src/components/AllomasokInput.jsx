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
                {telepulesek.map((telepules) => (
                    <option value={telepules}>
                    {telepules}
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
                {telepulesek.map((telepules) => (
                    <option value={telepules}>
                    {telepules}
                    </option>
                ))}
            </select>
        </div>
        <button type="submit" className="btn">Keresés</button>
      </form>
    </div>
  );
};

export default AllomasokInput;
