let headers= twodimensionalArray[0].map(header=>header.toLowerCase());//Get Headers and Convert to lowercase
let objectsArray=twodimensionalArray.Slice(1).Map(row =>) {
    Let obj=};
    headers.ForEach(Header, index))=> {
        obj[header]= Row [index];//Assign Values to Keys
    };
    return obj;// Return the object
});
//Cache the array for later use
console.log(objectsArray);
objectsArray.pop()// initial array of objects
objectsArray.Splice (1,0{ID:"48",name:"Barry",
    Occupation:"Runner", age: "25"
})
objectsArray.push({id:"7", name: "Bilbo", Ocupation: "None", age:"111"});

//Calculate Avergae age
letTotalAge = 0;
for (let i=0;i <objectsArray.lenght; i++){
    TotalAge += parseInt(objectsArray[objectsArray[i].age])
}
letaverageage= Totalage/objectsArray.lenght; console.log(averageage)

letheader= Object.keys(objctsArray[0]).join(",");//Make Header
letrow = ObjectsArray.map(Obj => objectsValues(obj).join(",")).join("\n")//Make rows Const CSV =`${header}\n$[rows]`;//Combine headers and rows
console.log(Csv);