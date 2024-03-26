// 1. Daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.

// let a = +prompt("PLease enter your number");

// for(let i=2; i<=a; i++) {
//     if (a % i ===0){
//         console.log (`${a} Murekkeb ededdir`)
//         console.log(i);
//     }
//     else{
//         console.log(`${a} sade ededdir`);
//     }
// }











// 2. Daxil olunan ədədin mükəmməl olub olmadığını tapın.

// let i = 1
// let j= 0

//     for ( j=0; i<a; i++){
//         if (a % i ===0 ){
//             j=j+i
//             console.log(`i=${i}, j=${j}`);
//         }
//     }

//     if(j ==i){
//         console.log(`${i} murekkeb ededdir`)
//     }else{
//         console.log(`${i } murekkeb eded deyil`);
//     }




// 3. Daxil olunan 2 ədəd arasındakı mükəmməl ədədləri göstərin.

// let b = +prompt("Enter your second number: ")
// 4. Daxil olunan 2 ədəd arasındakı sadə ədədləri göstərin.
// 5. Daxil olunan 2 ədəd arasındakı sonu 7 ilə bitən ədədləri göstərin.


let min = Math.min(+prompt("a"));
let max = Math.max(+prompt("b"));

for (let k = 7; k<=max; k+=10) {
    console.log(k);
}
