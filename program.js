// Challenge 0:
// console.log("HELLO WORLD");



// challenge 1:
// var result = 0;
//   for (var i = 2; i < process.argv.length; i++){
//     result += Number(process.argv[i]);
// }
//   console.log(result);


// Challenge 2:
// var fs = require('fs')
//  var file=fs.readFileSync(process.argv[2]).toString();
// var count = file.split('\n').length-1;
// console.log(count);



// Challenge 3: 
// var fs = require('fs')
// fs.readFile(process.argv[2],'utf8', function (err,data){
//     if (err) console.log(err);
//     else
//     data = data.split('\n').length-1;
//     console.log(data)
// })



// Challenge 5
// const fs = require('fs');
// const path= require('path');
// module.exports=filter =  (folder, ext, callback) => {
//     fs.readdir(folder, (err, list) => {
//     if (err) { 
//         callback(err); 
//     } else {
//         list = list.filter(el=> path.extname(el) === '.'+ext)
//         callback(null, list)
        
//     }
// })};

// console.log(process.argv)


