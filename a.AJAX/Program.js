const cbxmoneyType = document.getElementById("cbxmoneyType");
const tbxAmount = document.getElementById("tbxAmount");
const btnTranslate = document.getElementById("btnTranslate");
const tblMoney = document.getElementById("tblMoney");

//AJAX
const _currency = new Currency();
btnTranslate.addEventListener("click",function(e){
    _currency.ChangeValues(cbxmoneyType.value,Number(tbxAmount.value))
    _currency.Calculate((result)=>{AddToUI(result); console.log(result)})
    e.preventDefault();
})

function AddToUI(value){
    tblMoney.innerHTML = `
        <tr>
            <td>${value.TRY.toFixed(3)}</td>
            <td>${value.EUR.toFixed(3)}</td>
            <td>${value.USD.toFixed(3)}</td>
            <td>${value.GBP.toFixed(3)}</td>
        </tr>
    `;
}