// 2D array = An array of arrays

let fruits =     ["apples", "oranges", "bananas"];
let vegetables = ["carrot", "onion", "potato"];
let meats =      ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[0][0] = "mangoes";
groceryList[0][2] = "cherries";
groceryList[2][2] = "steak";


for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}