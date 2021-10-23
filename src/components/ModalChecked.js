import React from "react";

//компонент чекбоксов с списком ежегодных платежей
export default function ModalChecked(props) {
    

    //пропсы принимаемые из Дефолтного модального окна.
    const { show, taxCheckbox, disabled } = props
    

    //отработка и добавления суфиксов к году.
    const sufix = (index) => {

        switch(index.toString().substring(-1)){
            case '2': return "ой";
            case '3': return "ий";
            case '6': return 'ой'
            case '7': return 'ой'
            case '8': return 'ой'
            default: return "ый"
        }
    }

    return (
        <>
        {show ?
            <div className="tax-checkbox-list">
                <h3 className="tax-checkbox-list__title">Итого можете внести<br/> в качестве досрочных:</h3>
                <ul className="tax-checkbox-list__items">
                    {taxCheckbox? taxCheckbox.map((item, index) => (
                        <li className="tax-checkbox-list__item" key={index}>
                            <input type="checkbox" disabled={disabled} className="tax-checkbox-list__checkbox" id={index} name={index} value={index}/>
                            <label htmlFor={index}> <span className="tax-checkbox-list__price">{item.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} рублей </span><span  className="tax-checkbox-list__prefix">{index == 1 ? " вo " : " в "}{(index+1)}-{sufix(index+1)} год</span>
                            </label>
                            </li>
                    )): null}
                </ul>
            </div> 
                : null}
        </>
    )
}