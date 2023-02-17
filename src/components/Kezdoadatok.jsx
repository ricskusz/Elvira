
const Kezdoadatok = ({adatok}) => {
  return (
    <div>
        {
            adatok.length > 0 ? adatok.map((adat) => (<p>{adat.starttime}</p>)) : <>JPOJ</>
        }
    </div>
  )
}

export default Kezdoadatok