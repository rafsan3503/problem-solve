/* ১০. সিরিয়াস প্রাকটিস 

হয় মডিউল 34 ভালো করে দেখে ফেলো। বিশেষ করে the meal db রি তারপরে আরো সময় থাকলে এর আরেকটা খালতো ভাই the coktaildb থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে।  */

const loadCocktails = (value, dataInput) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res => res.json())
        .then(data => displayCoktails(data.drinks, dataInput))
}

const displayCoktails = (items,dataInput) => {
    console.log(items)
    const cocktailContainer = document.getElementById('cocktail-container');
    cocktailContainer.innerText = '';
    console.log(items)
    if (items === null) {
        toggle(true, 'error')
        toggle(false, 'spinner')
    }
    else {
        toggle(false, 'error')
    }
    if (dataInput && items.length > 5 && items != null) {
        items = items.slice(0, 5)
        toggle(true, 'show-all')
    }
    else {
        toggle(false, 'show-all')
    }
    items.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
                <div class="card">
                    <img src="${item.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Catagory: ${item.strCategory}</h5>
                        <p class="card-text">Instructions: ${item.strInstructions ? item.strInstructions : "No Instructions"}</p>
                        <button onclick="showDetails(${item.idDrink})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
                    </div>
                </div>
            </div>
        `;
        cocktailContainer.appendChild(div);
    });
    toggle(false, 'spinner')
}


const showDetails = id => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showOnModal(data.drinks[0]))
}


const showOnModal = info => {
    // console.log(info)
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.innerText = info.strCategory;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <p>Date: ${info.dateModified}</p>
    <p>Ingredient: ${info.strIngredient1 ? info.strIngredient1 : 'N/A'}, ${info.strIngredient1 ? info.strIngredient2 : 'N/A'}, ${info.strIngredient1 ? info.strIngredient3 : 'N/A'}</p>
    `;
}
document.getElementById('src-btn').addEventListener('click', function () {
    processSearch(5)
})

document.getElementById('show-btn').addEventListener('click', function () {
    processSearch()
})

const processSearch = dataInput => {
    toggle(true, 'spinner')
    const inputField = document.getElementById('inputField');
    const value = inputField.value;
    
    loadCocktails(value, dataInput)

}

const toggle = (isTrue, Id)=>{
    const element = document.getElementById(Id);
    if (isTrue) {
        element.classList.remove('d-none')
    }
    else {
        element.classList.add('d-none')
    }
}