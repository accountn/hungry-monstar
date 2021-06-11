
function getFoodInfo(inputValue) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputValue}`)
        .then(res => res.json())
        .then(data => getData(data))

}


document.getElementById("search_button").addEventListener("click",  () => {
    const inputValue = document.getElementById("searchProduct").value;
    getFoodInfo(inputValue);
});


const getData = data => {
    const item = data.meals;
    // console.log(item);
    const divInfo = document.getElementById("productInfo");
    item.forEach(element => {
        // console.log(element.strCategory);
        const div = document.createElement('div');
        div.className = 'imgSize';
        const divDetail = `
            <div onclick="getFood('${element.idMeal}')">
                <img src="${element.strMealThumb}">
                <h4>${element.strMeal}</h4>
            </div>          
        `;
        div.innerHTML = divDetail;
        divInfo.appendChild(div);

    });
}



const getFood = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        foodInfo(data);
    })
}

const foodInfo= data => {
    const item = data.meals;
    item.forEach(element => {
        const newFoodInfo = document.getElementById("foodDetails");
        newFoodInfo.className = 'foodMake';

        newFoodInfo.innerHTML = `
            <img src="${element.strMealThumb}">
            <h1>${element.strMeal}</h1>      
                <ol>
                    <li>${element.strIngredient1}</li>
                    <li>${element.strIngredient2}</li>
                    <li>${element.strIngredient3}</li>
                    <li>${element.strIngredient4}</li>
                    <li>${element.strIngredient5}</li>
                    <li>${element.strIngredient6}</li>
                </ol>
        `;
        //newFoodInfo.appendChild(newFoodInfo);
    });
}





