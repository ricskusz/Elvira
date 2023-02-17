import { useContext } from "react";
import TelepulesekContext from "../context/TelepulesekContext";
import MenetrendContext from "../context/MenetrendContext";


const AllomasokInput = () => {

    const {setKiindulopont, setCelallomas} = useContext(MenetrendContext);
    const {telepulesek} = useContext(TelepulesekContext);

    const getSubString = (string, char1, char2) => {
        return string.substring(
            string.indexOf(char1) + 1,
            string.lastIndexOf(char2)
          );
    }

  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        Válasszon 
      </option>
      {
        telepulesek.split(',').map((telepules) => (
            <option value={getSubString(telepules, '"', '"')}>{getSubString(telepules, '"', '"')}</option>
        ))
      }
    </select>
  );
};

export default AllomasokInput;
