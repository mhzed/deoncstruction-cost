const LOOP = 100000
let ARG = [100, 200]    // doing 100 * 200 add/assignment instructions

function f1(arg) {
  let [r1,r2] = arg;
  let s = 0;
  for (let i=0; i<r1; i++) {
    for (let j=0; j<r2; j++) {
      s++;  // prevent JIT to optmize away the loop, and to benchmark against
    }
  }
  return s;
}
function f2(arg) {
  let r1 = arg[0]
    , r2 = arg[1];
  let s = 0;
  for (let i=0; i<r1; i++) {
    for (let j=0; j<r2; j++) {
      s++; 
    }
  }
  return s;
}

console.log("benchmarking ...");
let beg;

beg = Date.now();
for (let i=0; i<LOOP;i++) {
  f1(ARG);
}
let elapsed1 = Date.now() - beg;
console.log("round 1 took " + elapsed1/1000);
beg = Date.now();
for (let i=0; i<LOOP;i++) {
  f2(ARG);
}
let elapsed2 = Date.now() - beg;
console.log("round 2 took " + elapsed2/1000);
console.log("deconstruction assignment performance overhead: " + ((elapsed1-elapsed2)/elapsed2*100).toFixed(2) + "%");