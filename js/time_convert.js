/**
 * Have the function timeConvert(num) take the num parameter being passed and
 * return the number of hours and minutes the parameter converts to (ie. if num
 * = 63 then the output should be 1:3). Separate the number of hours and minutes
 * with a colon.*/

function timeConvert(num)
{
    let hour=Math.floor(num/60);
    let minute=num%60;

    return hour +':'+minute;
}
console.log(timeConvert(63));