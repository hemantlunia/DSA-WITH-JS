class HashTable{
    constructor(size=50){
        this.keyMap = new Array(size);
    }

    hash(key,maxValue){
        let total = 0;
        for (let i = 0; i<key.length; i++){
          let asciiCode = key[i].charCodeAt(0);
          total = total+asciiCode;
        }
         return total%maxValue;
      };

    set(key,value){
    const hashCode =  this.hash(key,this.keyMap.length);
    if (!this.keyMap[hashCode]) {
        this.keyMap[hashCode] = [];
    }
    this.keyMap[hashCode].push([key,value]);
    
    }  

    get(key){
    const hashCode =  this.hash(key,this.keyMap.length);
    
    const result = this.keyMap[hashCode];
    console.log("result",result);

    if (!result) {
        return "Not Found";
    }
    
    for (let pair of result){
        if (pair[0]===key) {
            return pair[1]
        }
    }
    return undefined;
    }
}

const hTable = new HashTable();
hTable.set("name","Hemant Kumar")
console.log("Value of name is : ",hTable.get("name"));

hTable.set("Hemant","Kumar")
hTable.set("Hematn","lunia")

console.log("Value of Hemant is : ",hTable.get("Hemant"));
console.log("Value of Hematny is : ",hTable.get("Hematny"));


