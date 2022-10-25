import { useState } from 'react';
import ButtonCommon from './common/button';
import InputText from "./common/input";
import TotalComponent from './total-component';

export default function MainComponent(){
    const [billValue, setBillValue] = useState("");
    const [numberPeople, setNumberPeople] = useState("")

    const billValueHandler = (e) => {
        setBillValue(e.target.value);
    }

    const numberPeopleHandler = (e) => {
        setNumberPeople(e.target.value);
    }
    return (
        <div className="main-bg">
            <div className="box">
                <h3 className="bill">Bill</h3>
                <i className="fa fa-dollar icon" />
                <InputText type="text" value={billValue} onChange={billValueHandler} />
                <h4 className="select">Select Tip %</h4>
                <ButtonCommon value="5%" className="btn space" />
                <ButtonCommon value="10%" className="btn" />
                <ButtonCommon value="15%" className="btn space" />
                <ButtonCommon value="25%" className="btn" />
                <ButtonCommon value="50%" className="btn space" />
                <ButtonCommon value="Custom" className="custom" />
                <h4 className="number">Number of People</h4>
                <i className="fa fa-user icon" />
                <InputText type="text" value={numberPeople} onChange={numberPeopleHandler} />
                <TotalComponent />
            </div>
        </div>
    )
}