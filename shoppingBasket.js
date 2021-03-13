
function numToPrice(num) {
    let stringPrice = parseFloat(num).toFixed(2);
    return '£' + stringPrice
}

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

function getDiscount(chips, pies) {
    let discount = 1
    if (chips < pies){
        discount *= chips
    }else{
        discount *= pies
    }

    return discount
}

function shoppingBasket(items, bestByDate){

    let today = getCurrentDate().getTime()
    let chipsQuantity = 0
    let piesQuantity = 0
    let total = 0
    let basket = {}

    for(i = 0; i < items.length; i++){
        if (items[i] === "chips"){
            chipsQuantity++
            basket["chips"] = chipsQuantity
            total += 1.80
        }else{
            let bestByMilliseconds = bestByDate.getTime()
            if (getCurrentDate() > bestByDate){
               basket['pies'] = 'out of date'
            }else if(today === bestByMilliseconds){
                piesQuantity++
                basket["pies"] = piesQuantity
                total += 1.60
            }else{
                piesQuantity++
                basket["pies"] = piesQuantity
                total += 3.20
            }
        }
    }
  
    if (piesQuantity > 0 && chipsQuantity > 0){

        let bestByMilliseconds = bestByDate.getTime()

        if (today != bestByMilliseconds){
            total -= getDiscount(chipsQuantity, piesQuantity)
        }
    }
    
    basket['total'] = numToPrice(total)
    return basket
}

module.exports = shoppingBasket