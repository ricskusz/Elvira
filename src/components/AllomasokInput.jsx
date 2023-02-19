import { useContext, useState } from "react";
import TelepulesekContext from "../context/TelepulesekContext";
import MenetrendContext from "../context/MenetrendContext";

const AllomasokInput = () => {

    const [formData, setFormData] = useState({
        indulas: "",
        celallomas: ""
    });

    const { getMenetrend, menetrend} = useContext(MenetrendContext);
    const { telepulesek } = useContext(TelepulesekContext);

    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        getMenetrend(formData);
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Indulás</span>
                        </label>
                        <select
                            className="select select-bordered w-full max-w-xs"
                            id="indulas"
                            onChange={writeData}
                            value={formData.indulas}>
                            <option disabled selected>Válasszon kiinduló pontot</option>
                            {telepulesek.map((telepules, index) => (
                                <option key={index} value={telepules}>
                                    {telepules}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Célállomás</span>
                        </label>
                        <select
                            className="select select-bordered w-full max-w-xs"
                            id="celallomas"
                            onChange={writeData}
                            value={formData.celallomas}
                        >
                            <option disabled selected>Válasszon célállomás</option>
                            {telepulesek.map((telepules, index) => (
                                <option key={index} value={telepules}>
                                    {telepules}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">Keresés</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AllomasokInput;
