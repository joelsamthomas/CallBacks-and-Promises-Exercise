// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Call Backs and Promises</h1>`;






const callThisFuctionAfterAsyncOperationToOperateonDataFromAsyncOperation = (data) => {
  console.log('Data Received', data);
};


const somAsyncStarterFunction = (middleName, callTheCallBackFn) => {

  let fakeData;

  setTimeout(() => {
    fakeData = {
      firstName:"Appukkuttaa",
      lastName: "Thoppikaraa",
       midName: middleName
    }

  //console.log('fakeData', fakeData);
  callTheCallBackFn(fakeData);
  }, 2000);
   
};

somAsyncStarterFunction("Epo-kalyanum", callThisFuctionAfterAsyncOperationToOperateonDataFromAsyncOperation);
console.log("Main Thread Completed Already.");
console.log("After this main thread Aynchronous operations will take place\
soon after which call backs will be called");






const doSomeAsync = (value, callBackFn) => {
  setTimeout(() => {
    const fakeData = 
    {
      name:"Joel",
      age:value
    }

    callBackFn(fakeData);
  }, callBackFn);
  
};


function actOnCallBackFn(personObj){

  console.log('person name and age'+ "name:"+personObj.name+" age:" + personObj.age);

}

doSomeAsync(33, actOnCallBackFn);






const promiseExample = (someValue) => {
  return new Promise((resolve, reject) => {
    if(someValue > 1){
      let data = {
        value:someValue,
        type:"SUCCESS"
      }
      resolve(data);
    }
    else{
      let error = {
        error: "Value less than 1",
        type:"ERROR!"
      } 
      reject(error);
    }
  });
  
};

promiseExample(0).then((data) => {
  console.log('Data from Promise Resolution:', data);
}
).catch((error) => {
  console.log('ERROR', error);
}
)






