// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангуeстин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  fruitsList.innerHTML = "";
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits

  for (let i in fruits) {
    const li = document.createElement("li");
    
    if (fruits[i].color === 'фиолетовый') {
      li.className = "fruit__item fruit_violet";
    } else if (fruits[i].color === 'зеленый') {
      li.className = "fruit__item fruit_green"
    } else if (fruits[i].color === 'розово-красный') {
      li.className = "fruit__item fruit_carmazin"
    } else if (fruits[i].color === 'желтый') {
      li.className = "fruit__item fruit_yellow"
    } else if (fruits[i].color === 'светло-коричневый') {
      li.className = "fruit__item fruit_lightbrown"
    } else {
      li.className = "fruit__item fruit_added"
    };

    const div = document.createElement("div");
    div.className = "fruit__info";

    const divIndex = document.createElement("div");
    divIndex.innerHTML = `Index: ${i}`
    div.appendChild(divIndex);

    const divKind = document.createElement("div");
    divKind.innerHTML = `Kind: ${fruits[i].kind}`
    div.appendChild(divKind);

    const divColor = document.createElement("div");
    divColor.innerHTML = `Color: ${fruits[i].color}`
    div.appendChild(divColor);

    const divWeight = document.createElement("div");
    divWeight.innerHTML = `Weight: ${fruits[i].weight} кг.`
    div.appendChild(divWeight);

    li.appendChild(div);

    list.appendChild(li);
  }
};

display();

/*** ПЕРЕМЕШИВАНИЕ ***/

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];

  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    
    let i = getRandomInt(0, fruits.length);
    let copy = fruits[i];
    result.push(copy);
    fruits.splice(i, 1);
    
    
    // TODO: допишите функцию перемешивания массива
    //
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)
  };

  fruits = result;
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {

  const newFruit = {};

  newFruit.kind = document.querySelector(".kind__input").value;
  newFruit.color = document.querySelector(".color__input").value;
  if (isNaN(document.querySelector(".weight__input").value)) {
    alert('Введите число в поле "Weight"!');
  } else {    
    newFruit.weight = document.querySelector(".weight__input").value;
  }
  console.log(newFruit);
  fruits.push(newFruit);


  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
