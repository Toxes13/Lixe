
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