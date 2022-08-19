//  console.log("js file aded")

function getValueById(valueId){
   const  valueInput = parseFloat(document.getElementById(valueId).value);
   return valueInput;
};
function getInnerTextById(textId){
   const  textInput = parseFloat(document.getElementById(textId).innerText);
   return textInput ;
};



document.getElementById('calculate-btn').addEventListener('click', function(){


    const foodCost= getValueById('food-cost');
const rentCost =  getValueById ('rent-cost');
const clothCost = getValueById ('cloth-cost')
const income= getValueById('income');
const newTotalExpenses= foodCost + rentCost + clothCost;
    const balance= income-newTotalExpenses;

   document.getElementById('total-expenses').innerText= newTotalExpenses;
    document.getElementById('balance').innerText= balance;

})

document.getElementById('saving-btn').addEventListener('click', function(){


    const foodCost= getValueById('food-cost');
const rentCost =  getValueById ('rent-cost');
const clothCost = getValueById ('cloth-cost')
const income= getValueById('income');
const newTotalExpenses= foodCost + rentCost + clothCost;
    const balance= income-newTotalExpenses;


    const savingParcent= getValueById('saving-parcent');
    const savingTotal= (balance*savingParcent)/100;
    document.getElementById('saving-total').innerText= savingTotal;

    const remaingBalance=  balance-savingTotal;
    document.getElementById('remaing-balance').innerText= remaingBalance;
})
