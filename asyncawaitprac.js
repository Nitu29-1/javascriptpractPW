function fetchpromise(){
return new Promise((resolve) =>{
setTimeout(()=> resolve("FUNCTION-02: End (promise)"), 3000)
})
}

console.log("FUNCTION-01: Start (sync)");

async function showwithasyncwait()
{
const name = await fetchpromise();
console.log("waited for 3000ms");
console.log(name)
}
console.log("FUNCTION-03: This runs immediately after async call");

return showwithasyncwait();