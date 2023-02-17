import { useContext, useState} from "react";
import TelepulesekContext from "../context/TelepulesekContext";
import MenetrendContext from "../context/MenetrendContext";

const AllomasokInput = () => {

    const formTemplate = {
        indulas: "",
        celallomas: ""
    }

    const [formData, setFormData] = useState(formTemplate);

    const {setVegpontok, getMenetrend} = useContext(MenetrendContext);
    const { telepulesek } = useContext(TelepulesekContext);

    const getSubString = (string, char1, char2) => {
        return string.substring(
            string.indexOf(char1) + 1,
            string.lastIndexOf(char2)
        );
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
        setVegpontok(formData);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        getMenetrend();
        setFormData(formTemplate);
    }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-col">
            <label htmlFor="indulas">Kiinduló pont</label>
            <select 
                className="select select-bordered w-full max-w-xs"
                id="indulas"
                onChange={handleChange}
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
                onChange={handleChange}
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
    </div>
  );
};

export default AllomasokInput;
