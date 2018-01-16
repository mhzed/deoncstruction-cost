deoncstruction-cost
--------

A simple demo to illustrate the SIGNIFICANT performance cost of deconstruciton assignment in Javascript.

The code is in index.js and straightforward.  To run:  

    yarn run bench
    #or 
    npm run bench

I see 30-40% slow down: a simple two way deconstruction assignment costs about tens of throusands CPU cycles.

My envrionment:  

    Macbook pro
    node v8.9.3
    Intel(R) Core(TM) i5-4288U CPU @ 2.60GHz

So the lessons are:

1. Doing basic arithmatic in JS is about as efficient as in C.  V8's JIT is a wonder.
2. Beware of high level JS language constructs in highly performance sensitive code.