let time = 0;
let arr =['|', '/', '-','\\','---']
for(let x = 0; x <arr.length ; x++){
  time = time + 500;
  
  setTimeout(() => {
    process.stdout.write(`\r${arr[x]}  `);
  }, time);
};
