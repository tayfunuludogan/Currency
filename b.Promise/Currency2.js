class APICurrency{

    constructor(moneyType="USD",moneyAmount=1){
        this.moneyType = moneyType;
        this.moneyAmount = moneyAmount;
    }

    ChangeValues(moneyType,moneyAmount){
        this.moneyType = moneyType;
        this.moneyAmount = moneyAmount;
    }

    GetCurrencyValues(){

            const url = `https://api.exchangeratesapi.io/latest?base=${this.moneyType}`
            // console.log(url)
        
            return new Promise((resolve,reject)=>{

                fetch(url)
                .then(response => response.json())
                .then(jsonData => {resolve(jsonData.rates)})
                .catch(err => {reject(err)})
            })
    }

    Calculate(callback){

        this.GetCurrencyValues()
        .then((result)=>{
                const values = {
                    TRY:(result.TRY*this.moneyAmount).toFixed(3),
                    EUR:(result.EUR*this.moneyAmount).toFixed(3),
                    USD:(result.USD*this.moneyAmount).toFixed(3),
                    GBP:(result.GBP*this.moneyAmount).toFixed(3)
                }
                callback(values,0)
        })
        .catch((err)=>callback(err,-1))
    }
    
}