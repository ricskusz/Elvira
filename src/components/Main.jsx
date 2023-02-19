import AllomasokInput from "./AllomasokInput"
import FooldalSzoveg from "./FooldalSzoveg"
import MenetrendAdat from "./MenetrendAdat"
import Menetrend from "./Menetrend"
import { useContext } from "react"
import MenetrendContext from "../context/MenetrendContext"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Main = () => {

    const { menetrend, route, date, loading} = useContext(MenetrendContext);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <AllomasokInput />
                    <div className="text-center lg:text-left">
                        <FooldalSzoveg />
                        {
                            loading ? <button className="btn btn-success loading">Keresés...</button>
                            :
                            <div>
                                <AnchorLink href="#talalatok"><button className="btn btn-active btn-success">Találatok {
                                    menetrend.length ? `(${menetrend.length})` : ""
                                }</button></AnchorLink>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div id="talalatok" className="my-5 text-center">
                <h1 className="text-3xl font-bold">{route} ({menetrend.length} járat)</h1>
                <p className="mb-5">Bővebb információért kattintson a járatra</p>
                <div className="flex flex-row justify-between mt-5">
                    <div>Indulás</div>
                    <div>Átszállás</div>
                    <div>Érkezés</div>
                </div>
                <Menetrend adatok={menetrend}/>
            </div>
        </div>
    )
}

export default Main