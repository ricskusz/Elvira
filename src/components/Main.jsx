import AllomasokInput from "./AllomasokInput"

const Main = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <AllomasokInput />
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Keressen most!</h1>
                    <p className="py-6">Menetrend listázó alkalmazás. Válassza ki honnan hova szeretne eljutni és listázzuk önnek a mai járatokat!</p>
                </div>
            </div>
        </div>
    )
}

export default Main