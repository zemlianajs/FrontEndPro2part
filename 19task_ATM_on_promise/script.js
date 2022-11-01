const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = { 
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000, 
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const getMoney = () => {
    return new Promise ((resolve, reject) => {
        let confirmBalance = confirm('Would you like to see your card balance?');
        confirmBalance ? resolve(userData) : reject({userData: userData, bankData: bankData});
    })
}
getMoney()
    .then(
        userData => {
            const currency = Object.keys(userData);
            
            let currencyBalance;
            do {
                currencyBalance = prompt(`Please enter the currency: ${currency.join(`, `)}`);
                if (currencyBalance) currencyBalance = currencyBalance.replaceAll(` `, ``).toUpperCase();
            } while (!currency.find(item => item === currencyBalance))
            
            console.log(`Balance: ${userData[currencyBalance]} ${currencyBalance} `);
        } 
    )
    .catch(
        objData => {
            let availableUser = objData.userData;
            let availableATM = objData.bankData;
            let availableCurrencyInATM = [];
            let currency;

            for (let key in availableUser) {
                for (let currencyATM in availableATM){
                    if (key === currencyATM && availableATM[currencyATM].max > 0) 
                        availableCurrencyInATM.push(currencyATM)           
                }
            }

            do {
                currency = prompt(`Please enter the currency to withdraw.
Available in ATM: ${availableCurrencyInATM.join(`, `)} `);
                if (currency) currency = currency.replaceAll(` `, ``).toUpperCase();
            } while (!availableCurrencyInATM.find(item => item === currency));

            objData.currency = currency;
            objData.bankData = availableATM[currency];
            objData.userData = availableUser[currency];
            
            return Promise.reject(objData);
        })
    .then(
        () => {},
        objData => {
            let availableUser = objData.userData;
            let availableATM = objData.bankData;
            let currency = objData.currency;

            let amount = +prompt(`Please enter the amount to withdraw`);

            if(!amount) return Promise.finally()

            if(amount > availableATM.max || amount > availableUser){
                let maxAmount;
                if(availableATM.max > availableUser) maxAmount = availableUser;
                if(availableUser > availableATM.max) maxAmount = availableATM.max;
                
                console.log(`Entered amount more than available. Maximum withdrawal amount: ${maxAmount} ${currency}`)
            } else if(amount < availableATM.min) {
                console.log(`Entered amount less than available for withdrawal. Minimum amount: ${availableATM.min} ${currency}`)
            } else {
                objData.amount = amount;
            }

            return Promise.reject(objData);
        })
    .then(
        () => {},
        objData => {
            let availableATM = objData.bankData;
            let amount = objData.amount;
            let currency = objData.currency;

            if(amount) console.log(`Take your money ${amount} ${currency} ${availableATM.img}`);
        }
    )
    .finally(
        () => console.log(`Thank you, have a nice day 😊`)
    )