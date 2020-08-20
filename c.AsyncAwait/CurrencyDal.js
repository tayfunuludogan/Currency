class CurrencyDal {

    constructor() {
    }

    static async GetCurrencyValues(moneyType) {

        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${moneyType}`);
        const jsonData = await response.json();
        
        return jsonData.rates;

    }

    static async Calculate(moneyType2, moneyAmount,callback) {

        let values;
        this.GetCurrencyValues(moneyType2)
        .then((result)=>{
                values = {
                    TRY:(result.TRY*moneyAmount).toFixed(3),
                    EUR:(result.EUR*moneyAmount).toFixed(3),
                    USD:(result.USD*moneyAmount).toFixed(3),
                    GBP:(result.GBP*moneyAmount).toFixed(3)
                }
                callback(0,values)
            })
        .catch((error)=>{callback(-1,error)})
    }


}