export default function TotalComponent({ tipAmount, totalPerson, clickHandlerReset }) {
    return (
        <div className="total-container">
            <div className="total-box">
                <div>
                    <p>Tip Amount<br /><span>/ person</span></p>
                </div>
                <div>
                    <h1>${tipAmount}</h1>
                </div>
            </div>
            <div className="total-box">
            <div>
                    <p>Total<br /><span>/ person</span></p>
                </div>
                <div>
                    <h1>${totalPerson}</h1>
                </div>
        </div>
        <button onClick={clickHandlerReset}>Reset</button>
        </div>
    )
}