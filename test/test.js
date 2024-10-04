// Declaring variables and constant-
// 	1. Const acctID = 12345
// 	2. Let acctName = 'Himadri' ---Preferred
// 	3. acctDept = "Deloittte"                     Not good as per coding standards, VAR doesn't have definite block scope and functional scope                 
// 	4. Var acctDept = "Deloitte"
// Data types 
// 	1. "Use strict" ---this treats whole code as per newer JS coding standard
// 	2. Alert(3 + 3) ---this will give result in pop up screen as 6 in a browser but if writing code under NodeJS, this is not valid, there is different way to write in NodeJS.
// 	Datatype	Comments
// 	Number	Range upto 2 to power 53
// 	String	""
// 	Bigint	Values> Number datatype
// 	Boolean	T/F
// 	Null	Standalone value--can assign to any variable which means assigning empty value
// 	undefined	Value not assigned
// 	Symbol	Unique
// 	object	
	
// 	3. Console.log(typeof va) --this returns data type of that var
// 	4. If you type - console.log(typeof null) ---it returns object----this means null is an object
// Console.log(typeof undefined) --gives undefined

// Conversions
// 	1. Console.log(NULL>= 0) ---this will return true 
// 	2. Console.log(NULL==00-- return false                          == check and > < works differently. < > converts null to number thus treats it as 0.
// 	3. Strict check (===) ---it compares datatype as well as value.
// 4. Data types-
// a. Primitive - String,number,bigint,symbol,null,undefined,boolean
// b. Reference - Array,objects,functions
// 5. JS is a dynamically typed language ad data types are determined during runtime, we don't need to define variables before using it.

// Memory
// 1. All Primitive data types use STACK memory, all non-primitive use HEAP memory
// 2. Stack memory works by creating copy of 1 variable and so any change will impact only copy and not original.
// 3. Heap memory works by creating reference of original value and thus any change will reflect in original too.
// Eg - 
// Let var1 = 123
// Let var2 = var1
// Var2 = 345
// Console.log(var1); ---returns 123
// Console.log(var2); ---returns 345

// Let employee1 = {
// Name = "Himadri"
// ID = 56789 }
// Let employee1 = employee2;

// Employee2.name = "Pragati"
// Console.log(employee1); ---Pragati,098765
// Console.log(employee2); ----Pragati,098765
// Strings, numbers and Math
// 	1. Strings has many functions, can check in inspect of browser and refer MDN documents
// 	Const var1 = new string('Himadri')
// 	Console.log(var1);
// 	2. Similarly number too has few functions which can be referred through console in browser and mdn documents
// 	Const var2 = Number(100)
// 	Console.log(var2);
// 	Const hundreds = 10000000
// 	Console.log(hundreds.toLocaleString('en-IN');
// 	3. Math have many operations which are helpful in doing calculations.
// 	a. Function random gives random value between 0-1
// 	b. Eg- const min= 10;
// 	       const max = 20;
// 	Console.log(Math.floor(Math.random() * (max-min + 1)) +min)
// 	*Random will generate any number BT 0-1, multiplied by 11, then floor operation will take lower value, to avoid value rounding to 0 (Say random value is 0.000087) then floor will make it 0---we will add with min





