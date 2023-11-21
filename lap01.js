let arr =[3,2,5,6,4,8,9]
let temp = arr[0]
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            temp = arr[i]
            arr[j] = arr[j]
            arr[i] = temp
        }
        
    }
        
    }
    
    console.log('thứ tự tăng dần là', temp)