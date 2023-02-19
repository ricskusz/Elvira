import MenetrendAdat from "./MenetrendAdat"

const Menetrend = ({adatok}) => {
  return (
    <div>
        {
            adatok.length > 0 ? adatok.map((adat, index) => (<MenetrendAdat key={index} rekord={adat} details={adat.details} index={index}/>)) : <></>
        }
    </div>
  )
}

export default Menetrend