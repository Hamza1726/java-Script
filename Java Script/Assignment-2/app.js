// // Question # 1
function adder(x) {
  return function (y) {
    return x + y;
  }
}

function addFive() {
  const num = document.getElementById("num").value;
  const adderFunc = adder(5);
  const result = adderFunc(parseInt(num));
  document.getElementById("result1").innerHTML = result;
}
// Question # 2

function searchArrayHelper(arr, val, index) {
  if (index >= arr.length) {
    return false;
  }
  if (arr[index] === val) {
    return true;
  }
  return searchArrayHelper(arr, val, index + 1);
}

function searchArray() {
  const arr = [1, 2, 3, 4, 5];
  const val = parseInt(document.getElementById("val").value);
  const result = searchArrayHelper(arr, val, 0);
  document.getElementById("result2").innerHTML = result ? "Value found" : "Value not found";
}








// Question # 3

function addParagraph(text) {
  let newParagarph = document.createElement("p");
  newParagarph.textContent = text
  document.body.appendChild(newParagarph)
}

addParagraph("This is a new paragraph")

// Question # 4

function addListItem(text) {
  const newItem = document.createElement('li');
  newItem.textContent = text;
  const list = document.querySelector('ul');
  list.appendChild(newItem);
}

addListItem('New item');
addListItem('New item');

// Question # 5

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

const div = document.getElementById('myDiv');
changeBackgroundColor(div, 'blue');

// Question # 6

function saveObject(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

function saveObject() {
  const key = "myObject";
  const obj = JSON.parse(document.getElementById("object6").value);
  saveObject(key, obj);
  document.getElementById("result6").innerHTML = "Object saved to local storage";
}

// Question # 7

function getObjectFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Question # 8

function saveAndRetrieveObject(obj) {
  for (let key in obj) {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  }

  let newObj = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    newObj[key] = JSON.parse(localStorage.getItem(key));
  }
  return newObj;
}



