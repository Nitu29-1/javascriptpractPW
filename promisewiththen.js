function loginUser() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Logged in as Sidharth"), 6000);
   });
}
function fetchDashboard() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Dashboard loaded"), 3000);
   });
}
function fetchVoid() {
   console.log("Void function called");
}

function runApp() {
   loginUser()
      .then((loginMessage) => {
         console.log(loginMessage);
         //return fetchDashboard();
      })
      .then((dashboard) => {
        console.log(dashboard);
        return fetchDashboard();
        
      })
}
runApp();
fetchVoid();
