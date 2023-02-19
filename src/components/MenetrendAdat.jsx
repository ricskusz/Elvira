import BovitettMenetrendAdat from "./BovitettMenetrendAdat"

const MenetrendAdat = ({ rekord, details, index }) => {
  return (
    <div className="collapse">
    <input type="checkbox" />
    <div className="collapse-title text-xl font-medium">
    <div className="flex flex-row justify-between items-center card bg-base-100 shadow-xl m-3 p-4">
        <div>
          <h3 className="text-xl font-bold">{rekord.starttime}</h3>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{rekord.change > 0 ? rekord.change : 0}</h3>
        </div>
        <div>
          <h3 className="text-xl font-bold">{rekord.destinationtime}</h3>
        </div>
      </div>
    </div>
    <div className="collapse-content text-left">
    <div className="font-bold">Teljes menetidő: {rekord.totaltime}</div>
    <div className="font-bold">Átszállások: </div>
    <p>{details.map((adat, index) => (<BovitettMenetrendAdat jaratadat={adat} atszallas={details[index + 1]}/>))}</p> 
    </div>
  </div>
  )
}

export default MenetrendAdat