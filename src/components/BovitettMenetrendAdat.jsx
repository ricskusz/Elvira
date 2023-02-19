
const BovitettMenetrendAdat = ({ jaratadat }) => {
    return (
        <div>
            <div className="flex justify-between">
                <div>{jaratadat.dep}</div>
                <div>{jaratadat.train_info ? jaratadat.train_info.info : ""}</div>
                <div>{jaratadat.from}</div>
            </div>
        </div>
    )
}

export default BovitettMenetrendAdat