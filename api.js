
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => getData(data))

const getData = data => {
    const item = data.categories;
    for (let i = 0; i < item.length; i++) {
        const element = item[i];
        console.log(element);
        
    }
}

    



    