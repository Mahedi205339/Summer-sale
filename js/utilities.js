//function product price convert to string 
function stringToNum(productPrice){
    const productValue =document.getElementById(productPrice)
    const productValueString = productValue.innerText ;
    const value =parseFloat(productValueString)
    return value
}
// set element function 
function setElementValueById(productId ,productPrice){
    const textProduct =document.getElementById(productId)
    textProduct.innerText =productPrice ;

}

// card entry function 
function addToCalculationEntry(product){
    const calculationEntry =document.getElementById('calculation-entry');
    const p = document.createElement('p')
    const count =calculationEntry.childElementCount;
    p.innerHTML =`${count +1}. ${product}` ;
    calculationEntry.appendChild(p)
    
}