
// function checkStorage(available, ordered) {

//  if (available < ordered) {
//     console.log("Not enough goods in stock!")
//   }
//   else {
//     console.log("Order is processed, our manager will contact you")
//   }
// }


// function checkStorage(available, ordered) {

// if (ordered <= 0) {
//     console.log("There are no products in the order!");
// }
// else if (ordered > available) {
//     console.log("Not enough goods in stock!");
// }
// else {
//   console.log("The order is accepted, our manager will contact you");
// }
// }

// checkStorage(100, 50) //"Order is processed, our manager will contact you"
// checkStorage(100, 130) //"Not enough goods in stock!"
// checkStorage(200, 20) //"Order is processed, our manager will contact you"
// checkStorage(200, 150) //"Order is processed, our manager will contact you"
// checkStorage(150, 180) //"Not enough goods in stoc

// const age = 10;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//  return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
// }

// console.log(checkPassword("jqueryismyjam")) // "Access granted"
// console.log(checkPassword("angul4r1sl1f3")); //"Access denied, wrong password!"

// function getSubscriptionPrice(type) {
// const paket = type;
  
//   switch(paket) {
//   case "starter":
//   console.log(0);
//   break;
//    case "professional":
//   console.log(20);
//   break;
//    case "organization":
//       console.log(250);
//   break;
//   default:
//   console.log("Invalid subscription type!");
// }
// }


//  getSubscriptionPrice("professional")
//  getSubscriptionPrice("organization")
//  getSubscriptionPrice("starter")
//  getSubscriptionPrice("random")
//  getSubscriptionPrice("premium")

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if(screenWidth <= sm) {
// 	console.log("Mobile screen");
// } else if(screenWidth > sm && screenWidth <= md) {
// 	console.log("Tablet screen");
// } else if(screenWidth > md && screenWidth <= lg) {
// 	console.log("Desktop screen");
// } else {
// 	console.log("Godzilla screen");
// }

// function isNumberInRange(start, end, number) {

// if(number >= start && number <= end) {
//   return `true`;
// } else {
//   return `false`;
// }
// }

// console.log(isNumberInRange(10, 30, 17))
// console.log(isNumberInRange(10, 30, 5))
// console.log(isNumberInRange(20, 50, 24))
// console.log(isNumberInRange(20, 50, 76))

// НЕ РЕШЕНО

// function checkAccess(subType) {
//   const type = subType;

//   if (type === "pro" || type === "vip"); {
//     return `true`;
// } else {
//     return `false`;
// }
// }

// console.log(checkAccess("pr"));
// checkAccess("starter")
// checkAccess("vip")
// checkAccess("free")

// function toggleModalVisibility(isVisible) {

//   const chat = !isVisible;

// if(chat) {
// 	return `true`;
// } else {
// 	return `false`;
// }
  
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// function normalizeInput(input, to) {

//   if (to === "upper") {
//   return input.toUpperCase();
//   }
//   else if (to === "lower") {
//   return input.toLowerCase();
//   }
//   else {
    
//   }

// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));

// function checkForName(fullName, firstName) {

// const name = fullName;
// const hasSpam = name.includes(firstName);

// if (hasSpam) {
//   return true;
// } else {
//   return false;
// }
  
  
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Neis"));
// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Caty Stars", "Stars"));
// console.log(checkForName("Caty Stars", "Andromeda"));


// function checkFileExtension(fileName, ext) {

//   const hasSpam = (fileName.endsWith(ext));
  
//   if (hasSpam) {
//   return "File extension matches";
// } else {
//   return "File extension does not match";
// }
  
// }


// console.log(checkFileExtension("styles.css", ".css")); //повертає "File extension matches"
// console.log(checkFileExtension("styles.css", ".js")); //повертає "File extension does not match"
// console.log(checkFileExtension("app.js", ".js")); //повертає "File extension matches"
// console.log(checkFileExtension("app.js", ".html")); //повертає "File extension does not match"
// console.log(checkFileExtension("index.html", ".html")); //повертає "File extension matches"
// console.log(checkFileExtension("index.html", ".css")); //повертає "File extension does not match"
// console.log(checkFileExtension("index.html", ".js")); //повертає "File extension does not match"

// function getFileName(file) {

//     const message = file.indexOf('.');

//     if (message === -1) {
//         return file.slice(0);
//     }
//     else {
//         return file.slice(0, message);
//     }
// }

// console.log(getFileName("app.js")); // повертає "app"
// console.log(getFileName("app")); // повертає "app"
// console.log(getFileName("styles.css")); // повертає "styles"
// console.log(getFileName("index.js")); // повертає "index"
// console.log(getFileName("index.html")); // повертає "index"
// console.log(getFileName("index.css")); // повертає "index"
// console.log(getFileName("index")); // повертає "index"

// function createFileName(name, ext) {

//     const trimName = name.trim();
//     const trimExt = ext.trim();

//     return `${trimName}.${trimExt}`;
  
  
// }

// console.log(createFileName(" order ", "txt")); // повертає "order.txt"
// console.log(createFileName("report ", "csv")); // повертає "report.csv"
// console.log(createFileName(" presentation", "xml")); // повертає "presentation.xml"

// function calculateTotal(number) {
//     let sum = 0;
//     let i = 1;
//     while (i <= number) {
//         sum += i; //sum = sum + i;
//         i += 1; // i = i + 1;
//     }
//     return sum;
// }

// console.log(calculateTotal(1)); // повертає 1
// console.log(calculateTotal(3)); // повертає 6
// console.log(calculateTotal(0)); // повертає 0
// console.log(calculateTotal(18)); // повертає 171
// console.log(calculateTotal(24)); // повертає 300

// function calculateTotal(number) {
//     let sum = 0;
//     for (let i = 1; i<= number; i++) {
//         if (i % 2 === 0) {
//         sum += i;
//         }
//     }
//     return sum;
// }

// console.log(calculateTotal(1)); // повертає 0
// console.log(calculateTotal(3)); // повертає 2
// console.log(calculateTotal(7)); // повертає 12
// console.log(calculateTotal(18)); // повертає 90
// console.log(calculateTotal(27)); // повертає 182

// function calculateTotal(number) {
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//        sum += i; //sum = sum + i;
//     }
//     return sum;
// }


// console.log(calculateTotal(1)); // повертає 1
// console.log(calculateTotal(0)); // повертає 0
// console.log(calculateTotal(7)); // повертає 28
// console.log(calculateTotal(18)); // повертає 171
// console.log(calculateTotal(24)); // повертає 300

// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку
// від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//       number = i;
//       break;
//     }
// }

// console.log(number);

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
// Доповни код функції таким чином, щоб вона:
// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
 
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//         return i;
//       }
//     }
// }

// console.log(findNumber(2, 6, 5)); // повертає 5
// console.log(findNumber(8, 17, 3)); // повертає 9
// console.log(findNumber(16, 35, 7)); // повертає 21
// console.log(findNumber(6, 9, 4)); // повертає 8

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]))
// console.log(getOrderQuantity(["apple", "banana"]))
// console.log(getOrderQuantity(["apple", "banana", "pear"]))
// console.log(getOrderQuantity([]))

// function getLastElementMeta(array) {

//   const newMas = [array.length-1, array[array.length-1]];
//   return newMas;
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])) // повертає [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"])) // повертає [2, "pear"]
// console.log(getLastElementMeta(["apple", "peach"])) // повертає [1, "peach"]
// console.log(getLastElementMeta(["apple"])) // повертає [0, "apple"]

// function getLength(array) {

//     const line = array.join("");
//     return line.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"])) // повертає 22
// console.log(getLength(["M", "a", "n", "g", "o"])) //повертає 5
// console.log(getLength(["top", "picks", "for", "you"])) // повертає 14

// function calculateEngravingPrice(message, pricePerWord) {

//     const first = message.split(" ");
//     const second = first.length;
//     const third = second * pricePerWord;
//     return third;

// }


// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)) //повертає 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)) // повертає 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)) // повертає 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)) // повертає 80

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls); // - це масив ["apple", "plum"]
// console.log(nonExtremeEls);// - це масив ["plum", "pear", "orange"]
// console.log(lastThreeEls);// - це масив ["pear", "orange", "banana"]

// function getSlice(array, value) {
//     const index = array.indexOf(value);
    
//     if (index === -1) {
//         return [];
//     }
//     else {
//         return array.slice(0, index+1);
//     }

// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")) // повертає ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")) // повертає ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")) // повертає ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")) // повертає []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")) // повертає []



// function createArrayOfNumbers(min, max) {
//     let first = [];
//     for (let i = min; i <= max; i++) {
//         first.push(i)
//     }
//     return (first);
// }

// console.log(createArrayOfNumbers(1, 3)) // повертає [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)) // повертає [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)) // повертає [29, 30, 31, 32, 33, 34]

// Функція calculateTotalPrice(order) приймає один параметр
// order - масив чисел.Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {

//   let sum = 0;
//   for (const valueOrder of order) {
//     sum += valueOrder;
//   } return sum;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4])) // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])) // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) // повертає 1116

// function getEvenNumbers(start, end) {

//     let value = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             value.push(i);
//         }
//     }
//      return value;
// }


// console.log(getEvenNumbers(2, 5)) // повертає [2, 4]
// console.log(getEvenNumbers(3, 11)) // повертає [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)) // повертає [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)) // повертає [8]
// console.log(getEvenNumbers(7, 7)) // повертає []

// function checkStorage(storage, item) {

//     const reg = item.toLowerCase();

//     if (storage.includes(reg)) {
//         return `${reg} is available to order!`;
//     }
//     else {
//         return "Sorry! We are out of stock!";
//     }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum")) // повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM")) // повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear")) // повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr")) // повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange")) // повертає "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot")) // повертає "Sorry! We are out of stock!"

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
// оскільки вони присутні в обох вхідних масивах.
// А числа 0, 1 і 8 присутні тільки в одному з масивів.

// function getCommonElements(array1, array2) {

//     const newArray = [];
    
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             newArray.push(array1[i]);
//         }
//     }
// return newArray;
//     }


// console.log(getCommonElements([1, 2, 3], [2, 4])) // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])) // повертає []function createReversedArray() {

// function createReversedArray() {

//     const args = Array.from(arguments);
// 	return args.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4)) //повертає [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)) //повертає [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)) //повертає [176, 63, 94, 371, 412]
// console.log(createReversedArray()) // повертає []

// function calculateTax(amount, taxRate = 0.2) {

//   const total = amount * taxRate;
//   return total;
// }

// console.log(calculateTax(100, 0.2)) // повертає 20
// console.log(calculateTax(200, 0.2)) // повертає 40
// console.log(calculateTax(100, 0.3)) // повертає 30
// console.log(calculateTax(200, 0.3)) // повертає 60
// console.log(calculateTax(200, 0.1)) // повертає 20
// console.log(calculateTax(100)) //повертає 20
// console.log(calculateTax(100, 0.1)) // повертає 10
// console.log(calculateTax(200)) //повертає 40
