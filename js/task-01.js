// 1. знайти ul#categories
const numberOfCategories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

// 2. знайти li.item
const liItem = document.querySelectorAll(".item");
console.log(liItem);

// 3. перебрати і вивести в консоль те що треба

const category = function (items) {  
   liItem.forEach(function (items) {
     console.log(`Category: `, items.firstElementChild.textContent);

     console.log(`Elements: `, items.lastElementChild.children.length);
    }
  )
}

category(liItem)










