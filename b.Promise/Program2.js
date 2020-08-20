const cbxmoneyType = document.getElementById("cbxmoneyType");
const tbxAmount = document.getElementById("tbxAmount");
const btnTranslate = document.getElementById("btnTranslate");
const tblMoney = document.getElementById("tblMoney");
const _currency = new APICurrency();


function AddToUI(value){
    tblMoney.innerHTML = `
        <tr>
            <td>${value.TRY}</td>
            <td>${value.EUR}</td>
            <td>${value.USD}</td>
            <td>${value.GBP}</td>
        </tr>
    `;
}

btnTranslate.addEventListener("click",(e)=>{

    _currency.ChangeValues(cbxmoneyType.value,Number(tbxAmount.value))
    _currency.Calculate((data,err)=>{
        if (err===-1) {
            alert("Hata alındı...")
        }else{
            AddToUI(data)
        }
        
    })
    e.preventDefault();
})