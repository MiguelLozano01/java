import fetch from "node-fetch"
const URL= "https://coronavirus.m.pipedream.net/"

fetch(URL)
.then(res=>res.json())
.then(data=>{
    let vec =Object.values(data);
    vec.forEach(element =>{
        console.log(element);
    })
    // for (let i = 0; i < vec.length; i++) {
    //     for (let j = 0; j < vec[3].length; j++) {
    //         console.log(vec[3][j].name);
    //     }
    // }
});