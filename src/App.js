import React from "react";
import { useHistory } from "react-router";

export default function App() {

const history = useHistory()
const handleGoTaxDeduction = () => {
  history.push('tax-deduction')
}

let disabled = false;
const handleDisabled = (e) => {
  e.target.disabled = true;
}


  return (
    <div className="main-modal-popap">
      <span className='tax-button-gradient'><button disabled={disabled} onClick={handleDisabled} onClick={handleGoTaxDeduction} className='tax-button'>Налоговый вычет</button></span>
    </div>
  );
}


