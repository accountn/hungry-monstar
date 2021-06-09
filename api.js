
function getFoodInfo(inputValue) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputValue}`)
        .then(res => res.json())
        .then(data => getData(data))

}


document.getElementById("search_button").addEventListener("click", function () {
    const inputValue = document.getElementById("searchProduct").value;
    getFoodInfo(inputValue);
});


const getData = data => {
    const item = data.meals;
    console.log(item);
    const divInfo = document.getElementById("productInfo");
    item.forEach(element => {
        // console.log(element.strCategory);
        const div = document.createElement('div');
        div.className = 'imgSize';
        const divDetail = `
            <img width: '30' src="${element.strMealThumb}">
            <h4>${element.strMeal}</h4>
            
        `;
        div.innerHTML = divDetail;
        divInfo.appendChild(div);

    });
}





