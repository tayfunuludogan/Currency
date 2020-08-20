function Currency(moneyType="TRY",moneyAmount=1){

    this.moneyType = moneyType;
    this.moneyAmount = moneyAmount;
    this.xhr = new XMLHttpRequest();

}

Currency.prototype.ChangeValues=function(moneyType,moneyAmount){
    this.moneyType = moneyType;
    this.moneyAmount = moneyAmount;
}

Currency.prototype.GetCurrencyInfo = function(callback){

    this.xhr.open("GET",`https://api.exchangeratesapi.io/latest?base=${this.moneyType}`);

    this.xhr.send();

    this.xhr.onload = ()=>{
        if(this.xhr.status === 200){
            callback(JSON.parse(this.xhr.responseText).rates)
        }else{
            callback(-1)
        }
    }
}
Currency.prototype.Calculate = function(callback){

    this.GetCurrencyInfo((result)=>{
        if(result !=-1){

            const values = {
                TRY:result.TRY*this.moneyAmount,
                EUR:result.EUR*this.moneyAmount,
                USD:result.USD*this.moneyAmount,
                GBP:result.GBP*this.moneyAmount
            }
            callback(values)
            // console.log(values)
        }
        else{
            console.error(new Error("Somethings wrong. Please retry..."))
            callback(null)
        }


    })
}