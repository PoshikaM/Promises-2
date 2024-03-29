const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

   // Progression 2: using setTimeout() - use 1000 units for time parameter

   function getCookies(){
      setTimeout(function(){
        let body = document.body
        cookies.forEach(function(element, index){
          body.innerHTML += `<li>${element.name}</li>`
        })
      }, 1000)
    }

//Progression 3: Create a function to creat cookies and create an object of Promise.


    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

      
      // Progression 5: handling errors and adding new cookie to the list

function createCookies(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = false;
      if(error == true){
        reject('failed');
      }else{
        cookies.push(newCookie);
        resolve('success');
      }
    }, 2000);
  });
}

// Progression 7: creating a new async function

// calling the new async function

async function newAsync(){
   await createCookies();
   getCookies();
}
newAsync();