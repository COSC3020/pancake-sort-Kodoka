function flip(array, n)
{
    // If n > array.length, set n to array.length, so we flip the whole stack of pancakes.
    if(n > array.length)
    {
        n = array.length;
    }

    //Move left towards right, n, and right, n, towards left, swapping sets of elements.
    for(var left = 0; left < n; left++)
    {
        var temp = array[left];
        array[left] = array[n - 1];
        array[n - 1] = temp;
        n--;
    }
    
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array)
{
    return array;
}

var testArray = [1, 2, 3, 4];
var result = flip(testArray, 3);
console.log(result)
