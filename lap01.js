let arr =[3,2,5,6,4,8,9]
let t = arr[0]

for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            t = arr[i] 
        } else {
            t = arr[j]
        }
        
    }
        
    }
    