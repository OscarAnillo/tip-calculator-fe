export default function TotalComponent() {
    return (
        <div className="total-container">
            <div className="total-box">
                <div>
                    <p>Tip Amount<br /><span>/ person</span></p>
                </div>
                <div>
                    <h1>4.27</h1>
                </div>
            </div>
            <div className="total-box">
            <div>
                    <p>Total<br /><span>/ person</span></p>
                </div>
                <div>
                    <h1>32.79</h1>
                </div>
        </div>
        <button>Reset</button>
        </div>
    )
}