let pill;
console.log(pill)

if(pill=='red'){
    console.log('reality')
}else if (pill=='blue'){
    console.log('stay in martix')
}else{
    console.log('kill yourself')
}

// switch(variable ){case value1:{break}}
switch(pill){
    case 'red':{
        console.log('reality');
        break;
    }
    default:{
        console.log('kill yourself')
        break;
    }
}
// questions
// check if number is even or odd
let number=10;
if(number%2==0){
    console.log('number is even',number);
}else if(number %2==1){
    console.log('number is odd',number);
}else{
    console.log('invalid input');
}

// check if year is leap year

let year=2005;
if(year%100==0){
    if(year%400){
    console.log('its an leap year',year)
    }else{
        console.log('not a leap year'.year)
    }
}else if(year%4==0){
    console.log('leap year',year)
}else{
    console.log('not a leap year')
}

// check grade a>=80 80>b>=60
let marks=70;
let grade;
if(marks>=80){
    grade='a';
}else if(marks<80 && marks>=60){
    grade='B';
}else if(marks<60 && marks>=40){
    grade='C';
}else if(marks<40 && marks>=0){
    grade='D';
}else{
    grade='undefined'
}
console.log('grade',grade)

// type of trinagle

let a=3,b=4,c=3;
if(a==b && b==c){
    console.log('triangle is equalateral')
}else if(a==b || b==c || c==a){
    console.log('traingle is isosceles')
}else{
    console.log('triangle is scaleme' )
}

//numerical grad 