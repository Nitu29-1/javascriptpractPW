function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

async function runwithasyncwait()
{
const waittime = await wait(6000);
console.log(waittime);
console.log("FUNCTION-02: End (async/await)")
}
console.log("FUNCTION-03: This runs immediately after async call");

runwithasyncwait();