const categoriesAndItems = () => {
  const categories = document.querySelectorAll('.item');

  // кол-во категорий
  console.log(`В списке ${categories.length} категории`);

  categories.forEach(i => {
    // название категорий
    console.log(`Категория: ${i.querySelector('h2').textContent}`);

    // количество элементов в каждой категории
    console.log(`Количество элементов: ${i.querySelectorAll('li').length}`);
  });
};

categoriesAndItems();
