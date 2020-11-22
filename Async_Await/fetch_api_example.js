const fetch = require("node-fetch");

// fetch('url')
// .then(function (response) {
//   return response.json() // แปลงข้อมูลที่ได้เป็น json
// })
// .then(function (data) {
//   console.log(data); // แสดงข้อมูล JSON จาก then ข้างบน
// })

function fetchData(){
  let data = new Promise((resolve, reject) =>{
    fetch('url')
      .then(function (response) {
        resolve(response.json()) // แปลงข้อมูลที่ได้เป็น json
      });
  });
  return data;
}

async function main(){
  console.log("fetchData");
  let res_api = await fetchData();
  console.log(res_api);
}

main();