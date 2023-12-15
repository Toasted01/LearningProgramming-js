/**
 * Common types:
 * number
 * string
 * boolean
 */

/**
 * Variables with types
 * Variables can be assigned types so that the variable can only take in data of the specified type
 */
//Basic string var
let varString:string = 'hi';

//Array
let array:[] = [];

//Fixed array using types
let arrayString:[string, number] = ['hi', 1];

//Tuple array with types
let arrayTuple:[string, number][] = [['hello', 1]]

/**
 * Functions
 * functions with a type not void or any require you to return with that type
 * functions with type void/any dont require you to return anything
 */
//Return string
function stringFunction():string{
    return varString;
}

//Return void
function voidFunction():void{
    console.log('void')
}

/**
 * Enum
 * Enums can be used to create custom types where you want an input to only be 1 of some options
 * In this cas you can only return one of the types in Pet
 */
enum Pet{
    Dog,
    Cat,
    Hamster
}
function getPetDog():Pet{
    return Pet.Dog
}

/**
 * Objects
 * Objects can be created the same as in js but you can assign types to them.
 */
let aCompany: {
    companyName: string, 
    boss: {name: string, age: number}, 
    employees: {name: string, age: number}[], 
    employeeOfTheMonth: {name: string, age: number},  
    moneyEarned: number
  };

/**
 * Aliases
 * Aliases can be used to change the declaration of a type
 * In this example 'MyString' can be used as type 'string' instead 
 */
type MyString = string;
let myVar: MyString = 'Hi';