import MenetrendAdat from "./MenetrendAdat"

const Menetrend = ({adatok}) => {
  return (
    <div>
        {
            adatok.length > 0 ? adatok.map((adat, index) => (<MenetrendAdat key={index} rekord={adat}/>)) : <></>
        }
    </div>
  )
}

export default Menetrend