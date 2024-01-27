function arraycouple(arr) {

    let add = [];
    for (let i = 0; i < arr.length-1; i += 2) {
        let current = [arr[i], arr[i + 1]];
        let reverse = [arr[i + 1], arr[i]];
        console.log(reverse);
        
        if (!arr.includes(arr[0], arr[i + 2]) || !arr.includes(arr[1], arr[i + 3]))
         {
            add.push(current.join(','));
        }
        
    }
    return  add.length===0?'yes':add;
}

console.log(arraycouple([4, 5, 1, 4, 5, 4, 4, 1]));