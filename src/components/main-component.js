import { useState } from 'react';
import ButtonCommon from './common/button';
import InputText from "./common/input";
import TotalComponent from './total-component';

export default function MainComponent(){
    const [billValue, setBillValue] = useState("");
    const [numberPeople, setNumberPeople] = useState("");
    const [tipAmount, setTipAmount] = useState('0.00');
    const [totalPerson, setTotalPerson] = useState('0.00');

    const billValueHandler = (e) => {
        setBillValue(e.target.value);
    }

    const numberPeopleHandler = (e) => {
        setNumberPeople(e.target.value);
    }
    
    const clickHandler = (e) => {
        let tipGross = (billValue * e.target.value) / numberPeople;
        let totalTip =(billValue / numberPeople) + tipGross;

        tipGross = Math.round(tipGross * 100) / 100;
        tipGross = tipGross.toFixed(2);
        totalTip = totalTip.toFixed(2);
        setTipAmount(tipGross);
        setTotalPerson(totalTip);
        return totalPerson;
    }

    const clickHandlerReset = () => {
        setBillValue("");
        setNumberPeople("");
        setTipAmount('0.00');
        setTotalPerson('0.00')
    }

    return (
        <div className="main-bg">
            <div className="box">
                <div>
                    <h3 className="bill">Bill</h3>
                    <i className="fa fa-dollar icon" />
                    <InputText type="text" placeholder="0" value={billValue} onChange={billValueHandler} />
                    <h4 className="select">Select Tip %</h4>
                    <ButtonCommon value={0.05} text="5" className="btn space" onClick={clickHandler} />
                    <ButtonCommon value={0.10} text="10" className="btn" onClick={clickHandler} />
                    <ButtonCommon value={0.15} text="15" className="btn space" onClick={clickHandler} />
                    <ButtonCommon value={.25} text="25" className="btn" onClick={clickHandler} />
                    <ButtonCommon value={.5} text="50" className="btn space" onClick={clickHandler} />
                    <InputText className="custom" placeholder="Custom"/>
                    <h4 className="number">Number of People</h4>
                    <i className="fa fa-user icon" />
                    <InputText type="text" placeholder="0" value={numberPeople} onChange={numberPeopleHandler} />
                </div>
                <div>
                    <TotalComponent tipAmount={tipAmount} totalPerson={totalPerson} clickHandlerReset={clickHandlerReset}/>
                </div>
            </div>
        </div>
    )
}