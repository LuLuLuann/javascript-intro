// example task: Create string/boolean/string/number variables for a company or a user

// let name = prompt("Please provide your name")
// console.log(name);

// let companyName = "Acme"
// companyName = "PerScholas";
// console.log(companyName);

// let lastName = prompt("LastName");
// console.log(lastName);

// ---------------------------------

// And now the fun part. I decided to get the prompts to log out "Miss Mary Mack" lyrics in the console based on the answers provided by the user.

// let name = prompt("Who is the virgin M?");
// console.log("Miss " + name); // works but could return "mary" or "Mary" depending on user input

//QUESTION: HOW DO I MAKE SURE THE FIRST LETTER OF THE WORD "MARY" IS CAPITALIZED EVEN IF THE USER DIDN'T CAPITALIZE IT?

//capitalizeFirstLetter(name) ----> IDEA

// ATTEMPT ONE:
// name = capitalizeFirstLetter(name);
// console.log("Miss " + name) 
// DIDN'T WORK

// ATTEMPT TWO:
// console.log("Miss " + capitalizeFirstLetter(name))
// DIDN'T WORK

// ATTEMPT THREE and FOUR: 
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  let name = prompt("Who is the virgin M?");
//   console.log(capitalizeFirstLetter(name)); //gets "Mary"
  console.log("Miss " + (capitalizeFirstLetter(name))); //gets "Miss Mary"

let mcd = prompt("Name this sandwich: Big ---");
// ATTEMPT ONE:
// console.log(mcd.repeat(3)); 
// logs "macmacmac"

// ATTEMPT TWO:
// console.log(mcd + "k "); 
// logs "mack" once

// ATTEMPT THREE: 
console.log((mcd + "k ").repeat(3)); 
//logs "mack mack mack"

let wednesday = prompt("What is the Addams family's favorite color?");
console.log("All dressed in" + (" " + wednesday).repeat(3));

let color = prompt("What kind of bullets kill a werewolf?");
console.log("With " + color + " buttons buttons buttons");

let opposite = prompt("What is the opposite of front?")
console.log("All down her" + (" " + opposite).repeat(3))

let mom = prompt("What is a 6 letter word for MOM?")
console.log("She asked her" + (" " + mom).repeat(3))

let money = prompt("What's the name of an inexpensively named rapper?")

// ATTEMPT ONE: 
// console.log("For " + money.repeat(3) + "s")
// logs "For 50 cent50 cent50 cents"

// ATTEMPT TWO: 
// console.log("For " + money + "s" + (money.substr(2) + "s").repeat(2))
// This WORKS but is OBSOLETE code.

// ATTEMPT THREE:
console.log("For " + money + "s" + (money.slice(2) + "s").repeat(2));
// This works and is not obsolete code. 

let animal = prompt("One elephant but two ____?")
console.log("To see the" + (" " + animal).repeat(3))

let gate = prompt("What's a word for gate that rhymes with pence?")
console.log("Jump over the" + (" " + gate).repeat(3))

let jump = prompt("The opposite of LOW is?");
console.log("They jumped so" + (" " + jump).repeat(3));

let land = prompt("If I look down I see the GROUND. What do I see if I look up?");
console.log("They reached the" + (" " + land).repeat(3));

let go = prompt("First you ---- and then you go.");
console.log("And they didn’t " + go + " back back back");

let month = prompt("What is the 7th month of the year?")
console.log("‘Til the 4th of " + month + " ly ly!")

