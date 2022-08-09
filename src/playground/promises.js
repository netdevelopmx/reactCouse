const primise = new Promise((resolve, reject) => {
   setTimeout(() => {
    //resolve('Call the resove');
     reject('Call the reject');
   }, 1500);
       
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
});