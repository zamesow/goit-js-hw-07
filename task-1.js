const headCategory = document.querySelector('#categories');
console.log(headCategory);

// кол-во категорий
const allSubCategories = headCategory.children;
console.log(`В списке ${allSubCategories.length} категории`);

// название категорий
const allTitlesEl = headCategory.querySelectorAll('h2').forEach(i => {
  console.log(`Категория: ${i.textContent}`);
  console.log(
    `Количество элементов: ${headCategory.querySelector('ul').children.length}`,
  );
});
