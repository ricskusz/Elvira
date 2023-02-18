
const Kezdoadatok = ({adatok}) => {
  return (
    <div>
        {
            adatok.length > 0 ? adatok.map((adat) => (<p>{adat.starttime}</p>)) : <>nincs adat</>
        }
    </div>
  )
}

export default Kezdoadatok