import React from "react";
import { useHistory } from "react-router";
import closeButton from "../icons/close-button.svg";
import ModalChecked from "./ModalChecked"

//компонент дефолтного модального окна
export default function ModalDefault() {

    
    const [disabledCheckbox, setDisabledCheckbox] = React.useState(false);

    //переменная атрибут для применения стилей при disabled кнопок и чекбоксов
    let disabled = false;
    //функция для применения disabled от отработовшего элемента
    const handleDisabled = (e) => {
        e.target.disabled = true;
    }
    
    //функция отрабатывающая при нажатии большой красной кнопки "Добавить" (disabled всех чекбокосов)
    const handleDisabledCheckbox = () => {
        setDisabledCheckbox(true)
    }

    //переход по роутингу на модальное окно Налогового вычета с app (с красным фоном)
    const history = useHistory();
    const handleCloseTaxDeduction = () => {
        history.push('/');
    }

    //максимальная сумма налога
    const maxTax = 260000;
    
    
    //состояние отображения показал компонента чекбокосв
    const [showCheckbox, setShowCheckbox] = React.useState(false);
    //состояние изменения инпута "Ваша зарплата в месяц"
    const [inputValue, setInputValue] = React.useState('');
    //массив чекбокос которые пушаться в функции ниже на строке 62
    const [taxCheckbox, setTaxCheckbox] = React.useState([]);

    const handleShowCheckbox = () => {
        let el = document.getElementById('input-check')
        let attention = document.getElementById('attention-block')
        //делаем принимая из инпута зарплату убираем лишнее для проверки валидности формы (чистого числа)
        let newInputValue = inputValue.replace(/\s/g, '').replace('₽', '')
        if(newInputValue !== '' && newInputValue >= 1100) {
            setShowCheckbox(!showCheckbox)
            deductionOfTaxes(newInputValue)
            el.classList.remove('input-error')
            attention.classList.remove('attention-visible')
        } else {
            el.classList.add('input-error')
            attention.classList.add('attention-visible')
        }
            
    }

    //функция делает проверку инпута (валидны только цифры и добавляет пробелы для визуализации и удобство чтения числа)
    const handleChangeInput = (e) => {
        setInputValue(e.target.value.replace(/[^\d]/g,'').replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')+' ₽')
            if(e.target.value == ' ₽' || e.target.value == '₽') {
                console.log('1')
                e.target.value = '';
            } else {
                e.target.focus();
            
            setTimeout(()=>{
                e.target.setSelectionRange(e.target.value.length-2, e.target.value.length-2)
            }, 10)
    
        } 
    }

    //функция делает подсчет ежегодной выплаты и пушит в массив значения для дальнейшей отрисовки.
    const deductionOfTaxes = (inputValue) => {
        if (inputValue >= 1100) {

        let deductionOfYear = (inputValue * 12) * 0.13; //78.000
        deductionOfYear = deductionOfYear.toFixed(0);
        let ost;
        let copyTaxCheckbox = []
        for(ost = maxTax; ost > deductionOfYear; ost -= deductionOfYear){
           copyTaxCheckbox.push(deductionOfYear)
        }
        //остаток ежегодного платежа
        if(ost > 0) {
            ost = ost.toFixed(0);
            copyTaxCheckbox.push(ost)
        }
        
        setTaxCheckbox(copyTaxCheckbox)
        } 
    }
    
   
    return (
        <div className='container-tax'>
           <div className='container-tax__padding'> 
                <div className='tax-modal'>
                    <div className='tax-container'>
                        <button className="tax-modal__button-close" onClick={handleCloseTaxDeduction}><img className="tax-modal__img-close" src={closeButton}/></button>
                        <h2 className='tax-container__title'>Налоговый вычет</h2>
                        <p className='tax-container__sub-text'>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
                        <h3 className='tax-container__title-quest'>Ваша зарплата в месяц</h3>
                        <input  className='tax-container__input-answer' placeholder='Введите данные' id="input-check" required value={inputValue} onChange={handleChangeInput}/>
                        <span  className='input-answer__attention' id="attention-block">Маленькая сумма, введите минимум 1100</span>
                        <button className='tax-container__button-calc' onClick={handleShowCheckbox}>Рассчитать</button>
                        {/* компонент чекбокс, принимающий массив ежегодных для отображения чекбоксов после кнопки рассчитать */}
                        <ModalChecked show={showCheckbox} taxCheckbox={taxCheckbox} disabled={disabledCheckbox}/> 
                        <div className="tax-container-tablet-pc">
                        <h3 className='tax-container__quest'>Что уменьшаем?</h3>
                        <div className='tax-container__buttons container-buttons'>
                            <button disabled={disabled} onClick={handleDisabled} className='container-button-pay' >Платеж</button>
                            <button disabled={disabled} onClick={handleDisabled} className='container-button-time' >Срок</button>
                        </div>
                        </div>
                        <button disabled={disabled} onClick={handleDisabled} onClick={handleDisabledCheckbox} className='tax-container__button-add'>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}