enum Color {Red, Green, Blue};
console.log(Color);
let colorName:string = Color[1];
console.log(colorName);

let num:number = 1;
console.log(num);

let nums:number[] = [1,1,2];
console.log(nums);
console.log(nums[1]);

let _work:string = "This is a string";
console.log(_work);
_work = 'this too';
console.log(_work);
let _works = new Array<string>();
_works = ['This', "is", "a", 'vector'];
console.log(_works);
console.log(_works[1]);

let _any:any = "receiver any";
console.log(_any);
_any = false;
console.log(_any);
_any = 1;
console.log(_any);

let bool:boolean = false;
console.log(bool);
let bools:boolean[] = [false, true, false, true];