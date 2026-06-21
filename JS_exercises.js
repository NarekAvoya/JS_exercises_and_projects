// // // // //29.05.26

// // // // function createCounter() {
// // // //   let count = 0;

// // // //   function counter() {
// // // //     count = count + 1;
// // // //     return count;
// // // //   }

// // // //   return counter;
// // // // }

// // // // function makeGreeter(greeting) {
// // // //   function greeter(name) {
// // // //     return greeting + " " + name;
// // // //   }

// // // //   return greeter;
// // // // }

// // // // function createVault(secretKey) {
// // // //   let key = secretKey;

// // // //   function getSecret() {
// // // //     return key;
// // // //   }

// // // //   function setSecret(newKey) {
// // // //     key = newKey;
// // // //   }

// // // //   return {
// // // //     getSecret: getSecret,
// // // //     setSecret: setSecret
// // // //   };
// // // // }

// // // // function limitCalls(fn, n) {
// // // //   let count = 0;

// // // //   function limitedFunction() {
// // // //     if (count >= n) {
// // // //       return "Call limit reached";
// // // //     }

// // // //     count = count + 1;

// // // //     return fn.apply(null, arguments);
// // // //   }

// // // //   return limitedFunction;
// // // // }

// // // // function createMultiplier(x) {
// // // //   function multiplier(num) {
// // // //     return num * x;
// // // //   }

// // // //   return multiplier;
// // // // }


// // // //11.05.26

// // // function identifyType(value) {
// // //   if (value === null) {
// // //     return "null";
// // //   }

// // //   if (Array.isArray(value)) {
// // //     return "array";
// // //   }

// // //   if (typeof value === "number") {
// // //     if (Number.isNaN(value)) {
// // //       return "NaN";
// // //     }
// // //     return "number";
// // //   }

// // //   return typeof value;
// // // }

// // // function createSecretCounter(startValue) {
// // //   let value = startValue;

// // //   function increment() {
// // //     value = value + 1;
// // //   }

// // //   function decrement() {
// // //     value = value - 1;
// // //   }

// // //   function getValue() {
// // //     return value;
// // //   }

// // //   return {
// // //     increment: increment,
// // //     decrement: decrement,
// // //     getValue: getValue
// // //   };
// // // }

// // // function Person(name) {
// // //   this.name = name;
// // // }

// // // Person.prototype.greet = function () {
// // //   console.log("Hello, my name is " + this.name);
// // // };

// // // function Student(name, grade) {
// // //   Person.call(this, name);
// // //   this.grade = grade;
// // // }

// // // Student.prototype = Object.create(Person.prototype);
// // // Student.prototype.constructor = Student;

// // // const user = {
// // //   name: "Arman",
// // //   printName: function () {
// // //     console.log(this.name);
// // //   }
// // // };

// // // function callPrinter(callback) {
// // //   callback();
// // // }

// // // callPrinter(user.printName.bind(user));

// // // class Device {
// // //   constructor(name, status = false) {
// // //     this.name = name;
// // //     this.status = status;
// // //   }

// // //   turnOn() {
// // //     this.status = true;
// // //   }

// // //   turnOff() {
// // //     this.status = false;
// // //   }
// // // }

// // // class SmartLamp extends Device {
// // //   #brightness;

// // //   constructor(name, status = false, brightness = 0) {
// // //     super(name, status);
// // //     this.#brightness = brightness;
// // //   }

// // //   set brightness(value) {
// // //     if (value > 100) {
// // //       this.#brightness = 100;
// // //     } else if (value < 0) {
// // //       this.#brightness = 0;
// // //     } else {
// // //       this.#brightness = value;
// // //     }
// // //   }

// // //   get brightness() {
// // //     return this.#brightness;
// // //   }
// // // }

// // // function memoize(fn) {
// // //   const cache = new Map();

// // //   return function (...args) {
// // //     const key = JSON.stringify(args);

// // //     if (cache.has(key)) {
// // //       return cache.get(key);
// // //     }

// // //     const result = fn.apply(this, args);
// // //     cache.set(key, result);

// // //     return result;
// // //   };
// // // }

// // // class Shape {
// // //   getArea() {
// // //     throw new Error("Method getArea() must be implemented");
// // //   }
// // // }

// // // class Circle extends Shape {
// // //   constructor(radius) {
// // //     super();
// // //     this.radius = radius;
// // //   }

// // //   getArea() {
// // //     return Math.PI * this.radius * this.radius;
// // //   }
// // // }

// // // class Square extends Shape {
// // //   constructor(side) {
// // //     super();
// // //     this.side = side;
// // //   }

// // //   getArea() {
// // //     return this.side * this.side;
// // //   }
// // // }

// // // class Wallet {
// // //   #balance;
// // //   #transactions;

// // //   constructor() {
// // //     this.#balance = 0;
// // //     this.#transactions = [];
// // //   }

// // //   deposit(amount) {
// // //     this.#balance += amount;

// // //     this.#transactions.push({
// // //       type: "deposit",
// // //       amount: amount,
// // //       date: new Date()
// // //     });
// // //   }

// // //   withdraw(amount) {
// // //     this.#balance -= amount;

// // //     this.#transactions.push({
// // //       type: "withdraw",
// // //       amount: amount,
// // //       date: new Date()
// // //     });
// // //   }

// // //   getTotalWithdrawals() {
// // //     return this.#transactions
// // //       .filter(t => t.type === "withdraw")
// // //       .reduce((sum, t) => sum + t.amount, 0);
// // //   }
// // // }

// // // function once(fn) {
// // //   let hasBeenCalled = false;
// // //   let result;

// // //   return function (...args) {
// // //     if (hasBeenCalled) {
// // //       return undefined;
// // //     }

// // //     hasBeenCalled = true;
// // //     result = fn.apply(this, args);
// // //     return result;
// // //   };
// // // }


// // //07.06.26

// // function fetchUserFromDB(userId) {
// //   return new Promise((resolve, reject) => {
// //     if (userId <= 0) {
// //       reject("Invalid User ID");
// //       return;
// //     }

// //     setTimeout(() => {
// //       resolve({ id: userId, username: "admin_user" });
// //     }, 1500);
// //   });
// // }

// // Promise.resolve(10)
// //   .then((num) => {
// //     return num * 3;
// //   })
// //   .then((num) => {
// //     return num + 20;
// //   })
// //   .then((num) => {
// //     return "Final result: " + num;
// //   })
// //   .then((text) => {
// //     console.log(text);
// //   });

// // function withTimeout(promise, ms) {
// //   const timeoutPromise = new Promise((_, reject) => {
// //     setTimeout(() => {
// //       reject("Request Timeouted!");
// //     }, ms);
// //   });

// //   return Promise.race([promise, timeoutPromise]);
// // }

// // function fetchFromServerA() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => resolve("A data"), 1000);
// //   });
// // }

// // function fetchFromServerB() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => reject("B failed"), 500);
// //   });
// // }

// // function fetchFromServerC() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => resolve("C data"), 700);
// //   });
// // }

// // Promise.any([
// //   fetchFromServerA(),
// //   fetchFromServerB(),
// //   fetchFromServerC()
// // ]).then((result) => {
// //   console.log(result);
// // });

// // function runSequentially(tasks) {
// //   return tasks.reduce((prev, task) => {
// //     return prev.then(() => task());
// //   }, Promise.resolve());
// // }

// // function customAll(promisesArray) {
// //   return new Promise((resolve, reject) => {
// //     const results = [];
// //     let completed = 0;

// //     if (promisesArray.length === 0) {
// //       resolve([]);
// //       return;
// //     }

// //     promisesArray.forEach((p, index) => {
// //       Promise.resolve(p)
// //         .then((value) => {
// //           results[index] = value;
// //           completed++;

// //           if (completed === promisesArray.length) {
// //             resolve(results);
// //           }
// //         })
// //         .catch((err) => {
// //           reject(err);
// //         });
// //     });
// //   });
// // }

// // function retryRequest(fn, retries, delay) {
// //   return new Promise((resolve, reject) => {
// //     function attempt(remaining) {
// //       fn()
// //         .then(resolve)
// //         .catch((err) => {
// //           if (remaining === 0) {
// //             reject(err);
// //           } else {
// //             setTimeout(() => {
// //               attempt(remaining - 1);
// //             }, delay);
// //           }
// //         });
// //     }

// //     attempt(retries);
// //   });
// // }

// // class DatabaseCache {
// //   constructor() {
// //     this.cache = {};
// //   }

// //   getData(key) {
// //     if (this.cache[key]) {
// //       return Promise.resolve(this.cache[key]);
// //     }

// //     return new Promise((resolve) => {
// //       setTimeout(() => {
// //         const data = "data_for_" + key;
// //         this.cache[key] = data;
// //         resolve(data);
// //       }, 2000);
// //     });
// //   }
// // }

// // function promisePool(functions, n) {
// //   return new Promise((resolve, reject) => {
// //     let i = 0;
// //     let active = 0;
// //     const results = [];

// //     function next() {
// //       if (i === functions.length && active === 0) {
// //         resolve(results);
// //         return;
// //       }

// //       while (active < n && i < functions.length) {
// //         const index = i;
// //         const fn = functions[i];
// //         i++;
// //         active++;

// //         fn()
// //           .then((res) => {
// //             results[index] = res;
// //           })
// //           .catch(reject)
// //           .finally(() => {
// //             active--;
// //             next();
// //           });
// //       }
// //     }

// //     next();
// //   });
// // }







// //14.06.26


// async function updateProfile(data) {
//   try {
//     const user = await verifyToken(data.token);
//     const result = await updateDB(user.id, data);
//     console.log("Profile updated:", result);
//   } catch (err) {
//     console.error("Error updating profile:", err.message);
//   }
// }

// async function getAuthorLastPost(authorId) {
//   try {
//     const author = await fetchAuthor(authorId);
//     const posts = await fetchPosts(author.id);
//     return posts[posts.length - 1];
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function fetchAllCategoriesDetails() {
//   const categories = await getCategories();

//   const details = await Promise.all(
//     categories.map(cat => fetchCategoryDetail(cat.id))
//   );

//   console.log("All details:", details);
// }

// function fetchConfig() {
//   return readConfigFile()
//     .then(config => {
//       return config.port;
//     })
//     .catch(err => {
//       console.log("Using default port 3000");
//       return 3000;
//     });
// }

// function initializeServer() {
//   return connectToDatabase()
//     .then(dbConnection => {
//       console.log("DB connected");
//       return loadParams(dbConnection);
//     });
// }

// function processFilesSequentially(files) {
//   return files
//     .reduce((promiseChain, file) => {
//       return promiseChain.then(() => {
//         return uploadFile(file).then(() => {
//           console.log(`${file} uploaded`);
//         });
//       });
//     }, Promise.resolve())
//     .then(() => {
//       console.log("All done!");
//     });
// }
