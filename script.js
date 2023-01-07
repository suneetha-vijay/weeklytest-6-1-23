/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperswithMap() {
    arr.map(function(value){
        if (value.profession === "developer") {
          console.log(value);

        }

    })
  }
  
  function PrintDeveloperbyForEach() {
    let search2=arr.forEach(item=>{
      if(item.profession==='developer')
      console.log(item.name);
    });
    
  
  }
  
  function addData() {
    
    
    
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr);
  }
  
  function removeAdmin() {
    arr.pop()
  console.log(arr);
    
  }
  
  function concatenateArray() {
    
    let arr2=[
      {id:5,name:"kumar",age:"22",profession:"business man"}
    ]
    let arr3=arr.concat(arr2);
    console.log(arr3);
  }