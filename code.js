function flip(array, n)
{
    // If n > array.length, set n to array.length, so we flip the whole stack of elements.
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

// Use only flip() here to manipulate the array.
function pancakeSort(array)
{
    // For each element in the unsorted portion of the input array...
    for(var unsortedPortion = array.length; unsortedPortion > 1; unsortedPortion--)
    {
        // Find the index of the max value.
        var maxIndex = findMaxValue(array, unsortedPortion);
        // If the max value isn't already at the end of the unsorted array portion...
        if(maxIndex != unsortedPortion - 1)
        {
            // If the max value isn't at the start of the unsorted array portion...
            if(maxIndex != 0)
            {
                // Move the largest element to the front of the array.
                flip(array, maxIndex + 1);
            }
            // Move the largest element to the last position of the unsorted array portion.
            flip(array, unsortedPortion);
        }
    }

    return array;
}

// Finds the max value in the unsorted portion of the array, and returns it's index.
function findMaxValue(array, unsortedIndex)
{
    var maxIndex = 0;
    // For each element in the unsorted portion o the array, check if array[i] is
    // greater than the value at maxIndex...
    for(var i = 0; i < unsortedIndex; i++)
    {
        // If it is, change the maxIndex value to the index of the greatest value.
        if(array[i] > array[maxIndex])
        {
            maxIndex = i;
        }
    }

    return maxIndex;
}