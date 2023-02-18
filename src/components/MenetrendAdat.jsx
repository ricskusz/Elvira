
const MenetrendAdat = ({rekord}) => {
  return (
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
  )
}

export default MenetrendAdat