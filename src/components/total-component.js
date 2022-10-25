export default function TotalComponent({ tipAmount, totalPerson, clickHandlerReset, billValue,numberPeople }) {
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
        <button type="button" disabled={!billValue || numberPeople === 0 || numberPeople === ""} className={`${!billValue && 'disable'} `} onClick={clickHandlerReset}>Reset</button>
        </div>
    )
}