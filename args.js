// console.log(process.argv);

// process.argv.forEach((val) => {
//     console.log(`${val}`);
//   });

let addition = 0;
  for (var i = 2; i < process.argv.length; i++){
    addition += Number(process.argv[i]);
}

console.log(addition);