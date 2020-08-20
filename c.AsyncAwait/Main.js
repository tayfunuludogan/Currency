const cbxmoneyType = document.getElementById("cbxmoneyType");
const tbxAmount = document.getElementById("tbxAmount");
const btnTranslate = document.getElementById("btnTranslate");
const tblMoney = document.getElementById("tblMoney");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {

    if (cbxmoneyType.selectedIndex === 0) {
        AddNotificationToUI("danger", "Please select a money type...")

    } else {
        CurrencyDal.Calculate(cbxmoneyType.value, Number(tbxAmount.value), (err, data) => {
            if (err === 0) {
                AddToUI(data);
                AddNotificationToUI("success", "Converting has been successfully...")
            } else if (err === -1) {
                AddNotificationToUI("danger", "Somethings went wrong...")
            }


        })
    }
    e.preventDefault();

})

//UI section
function AddToUI(value) {
    tblMoney.innerHTML = `
        <tr>
            <td>${value.TRY}</td>
            <td>${value.EUR}</td>
            <td>${value.USD}</td>
            <td>${value.GBP}</td>
        </tr>
    `;
}

function AddNotificationToUI(alertType, message) {

    const notification = document.createElement("div");
    notification.className = `mt-2 alert alert-${alertType}`
    notification.textContent = message;
    form.appendChild(notification);
    setTimeout(() => {
        form.removeChild(notification);
    }, 2000)

}

