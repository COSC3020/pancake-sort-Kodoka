# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

## My Runtime Analysis

To determine the largest element my code must first iterate through the all
elements of an $n$ sized array, at which point flips may or may not occur. Then
it works through $n - 1$ elements, followed by flips, then $n - 2$, the flips,
etc. This sums up to $n + (n - 1) + (n - 2) + ... + 2 + 1 = \frac{n(n+1)}{2}$
comparisons. Not accounting for constants, that means the runtime conplexity of
my code in terms of the number of comparisons is $\Theta(n^2)$.  

When favorable input is provided, such as the array: [1, 2, 3, 4], no flips are
necessary to move the largest elements to the bottom of the stack; however, in a
worst case scenario, to sort an $n$ length array, we may need to flip nearly all
elements twice, the second to last element once, and the final element zero
times. Take the n = 4 length array: [2, 4, 3, 1] for example.  
[2, 4, 3, 1] -> [4, 2, 3, 1] -> [1, 3, 2, 4] Two flips for the $nth$ element.  
[1, 3, 2, 4] -> [3, 1, 2, 4] -> [2, 1, 3, 4] Two flips for the $nth - 1$ element.  
[2, 1, 3, 4] -> [1, 2, 3, 4] One flip for the $n - 2$ element.  
[1, 2, 3, 4] Zero flips for the final element.  
The second to last element can take at most one flip, as two flips of a two
element segment of an array would just results in the same state the array
was originally in before any flips occured. The final element can take at most
zero flips, as flipping the second to last element will trivially sort the
final element. So we get a sum of $2 + 2 + ... + 2 + 1 + 0$ for $n$ elements
or $2(n - 1) - 1$ flips. Not accuonting for constants, this gives us a runtime
complexity in terms of the number of flips of $\Theta(n)$.  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
