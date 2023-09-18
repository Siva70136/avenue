function getSum(arr,target){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                console.log([i,j]);
            }
        }
    }
}

numberArr = [3,3]
target=6
getSum([0,1,2,3,10], 10);