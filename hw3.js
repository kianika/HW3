//ex1
/* function lonelyInteger(arr){
let lonely = arr.find(item => (!arr.includes(- item)));
let a = 0;
return lonely;
}

console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])); */


//ex2
/* function countCharacters(a, arr){
    let i = 0;
    for(let x of arr){
       if(x === a) i++; 
    }
        return i * 7;
        
    }


console.log(countCharacters('p', 'parisaEghbalipanjTapirahanDarad')); */

//ex3

/* function print(n){
    let str = "";
    for(i = 0; i <= n; i++){
        for(j = 1; j <=i; j++){
            str += j;
            
        } 
        str += "\n";
    }
        return str;
}

console.log(print(8)); */

//ex4

/* function numberCount(n){
    let count = n.toString().length;
    return count;
}

console.log(numberCount(8367)); */

//ex5

 /* function dayCalc(m, y){
    let day;
    let leap =  y % 100 === 0 ? y % 400 === 0 : y % 4 === 0;
    switch(m){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: 
        day = 31;
        break;

        case 4:
        case 6:
        case 9:
        case 11:
        day = 30;
        break;

        case 2:
            if(leap) {
                day = 29;
            } else { 
                day = 28;
            }
            break;
        default :
        day = -1;
    }
    return day;
}

console.log(dayCalc(2, 2000)); */ 

//ex6

/* function bSort(a){

    for(let i = 0; i < a.length - 2; i ++){
        for(let j = 0; j < a.length - i - 1; j++){
            if(a[j] > a[j + 1]){
                let t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }

    return a;
}

console.log(bSort([12, 1, 9, 16, 3])); */


//ex7

/* function multiply(a, b){
    let result;
if(b < 2){
    result = a;
}
else {
result = a + multiply(a, b - 1);

} 
return result;
}

console.log(multiply(5, 3)); */

//ex8



  /*     function grade(arr){
      let sum = 0;
      let average;
      let groupGrade;
  
      arr.forEach(element => {
          sum += element.grade;
          average = sum / arr.length;
          
      });

      switch(true){
            case (average < 100 && average >= 90):
              groupGrade = "A";
              break;
            case (average < 90 && average >= 80):
                groupGrade = "B";
                break;
            case (average < 80 && average >= 70):
                groupGrade = "C";
                break;
            case (average < 70 && average >= 60):
                groupGrade = "D";
                break;
            case (average < 60):
                groupGrade = "F";
                break;
      }
      return groupGrade;
    }


    //declare the input array
    let students = [
        {name: "Bahar", grade: 80},
        {name: "Hasti", grade: 77},
        {name :"Negar", grade: 88},
        {name :"Sara", grade: 95},
        {name :"Parham", grade: 68}
      ];

   console.log(grade(students)); */


        
    

//ex9

/* function seprator(a){
    let arr = a.toString().split('');
    return(arr[1]);
}

console.log(seprator('split-by-dash')); */

