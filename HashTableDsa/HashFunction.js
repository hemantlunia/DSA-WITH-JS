function hash(key,maxValue){
  console.log(key,maxValue);
  let total = 0;
  for (let i = 0; i<key.length; i++){
    console.log(key[i],key[i].charCodeAt(0));
    let asciiCode = key[i].charCodeAt(0);
    total = total+asciiCode;
  }
  console.log("Total is : ",total);
   return total%maxValue;
};

hash("Hemant",50);

console.log("abcde",hash("abcdef",50));


// hashFunction must be deterministic,fast,uniformdistribution,less-collisions

