const shoppingBasket = require('./shoppingBasket')

function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm;
    }
    today = new Date(mm+'/'+dd+'/'+yyyy);
    return today
}

describe('part 1', () => {
    it('should return an object', () => {
        expect(typeof shoppingBasket([])).toBe('object')
    });
    it('should return an object with the given item, the associated cost and the total', () => {
        let bestBy = new Date('01/01/2025')
        let result = {
            chips : 1,
            total : '£1.80'
        }
        let result2 = {
            chips : 10,
            total : '£18.00'
        }
        let result3 = {
            pies : 1,
            total : '£3.20'
        }
        let result4 = {
            pies : 5,
            total : '£16.00'
        }
        expect(shoppingBasket(['chips'])).toEqual(result)
        expect(shoppingBasket(['chips','chips','chips','chips','chips','chips','chips','chips','chips','chips'])).toEqual(result2)
        expect(shoppingBasket(['pies'], bestBy)).toEqual(result3)
        expect(shoppingBasket(['pies','pies','pies','pies','pies'], bestBy)).toEqual(result4)
    });
});

describe('part 2', () => {
    it('should have an expiry date on the pie and can not be sold after expiry date', () => {
        let bestBy = new Date('01/01/2021')
        let result = {
            pies : 'out of date',
            total : '£0.00'
        }
        let result2 = {
            pies : 'out of date',
            chips: 1,
            total : '£1.80'
        }
        expect(shoppingBasket(['pies'], bestBy)).toEqual(result)
        expect(shoppingBasket(['pies', 'chips'], bestBy)).toEqual(result2)
    });
    // it('should apply a 50% discount when current date is same as best by date', () => {
    //     let bestBy = getCurrentDate()
    //     let result = {
    //         pies : 1,
    //         total : '£1.60'
    //     }
    //     expect(shoppingBasket(['pies'], bestBy)).toEqual(result)

    // });
});