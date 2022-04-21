console.log("working");

//Q1.Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using     parents prototype

const StudentPrototype = {
    calcAge(){
        console.log(2022 - this.birthYear);
    },
    initialise(fname,lname,birthYear){
        this.fname = fname;
        this.lname = lname;
        this.birthYear = birthYear;
    },
}

const student1 = Object.create(StudentPrototype);
const student2 = Object.create(StudentPrototype);

student1.initialise("Praveen","Soreng",1997);
student1.calcAge();
console.log(student1);

student2.initialise("Anurag","Singh",1998);
student2.calcAge();
console.log(student2);
//---------------------------------------------------------------

//Q2.Write code to explain prototype chaining

const obj1 = {
    name : "Praveen Soreng",
    getName : function(){
      return this.name;
    },
    getRoll : function(){
        return this.roll_no;
    }
}
const  obj2 = {
    roll_no : 1002,
}
obj2.__proto__ = obj1;
console.log(obj2);
const obj3 = {
    class : "12th"
}
obj3.__proto__ = obj1;
console.log(obj3);

//Q3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

Array.prototype.sum = function(){
    return this.reduce((accu,curr) => accu+curr);
}


const arr1 = [1,2,3,4,5];
console.log(arr1.sum()); 

const arr2 = [12,13,45,34,23,56,78];
console.log(arr2.sum()); 

const arr3 = [20,34,67,45,32,70];
console.log(arr3.sum()); 

const arr4 = [2,90,34,4,56,78];
console.log(arr4.sum()); 

const arr5 = [2,4,5,6,7];
console.log(arr5.sum()); 


//Q4.Write a JavaScript function to retrieve all the names of object's own and inherited properties.


const obj4 = {
    name : "Praveen Soreng"
}

const obj5 ={
    location : "Delhi",
    __proto__ : obj4
}
const keys = Object.keys(obj5);
console.log(keys);








