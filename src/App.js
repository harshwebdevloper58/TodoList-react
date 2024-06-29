import './App.css';
import React, { useState } from 'react';

function App() {
  let [data, setData] = useState([]);


  let collectData = (event) => {
    event.preventDefault();
    let datavalue = event.target.Data.value.trim();

    if (datavalue === "") {
      alert("Write something to add");
      return;
    }

    if (data.includes(datavalue)) {
      alert("This already exists");
      return;
    }

    setData([...data, datavalue]);
    event.target.Data.value = ""; // Clear the input after adding
  };
  
let list=data.map((v,i)=>{
return(
  <DataPerview tododata={v} data={data} index={i} key={i} setdata={setData}/>
)
})
  return (
    <div className="App">
      <div className="container">
        This is a Todo List
        <form action="" onSubmit={collectData}>
          <input type="text" name="Data" className="inputbox" placeholder="Write Todo here" />
          <button className="submit">Submit</button>
        </form>
        <ul>
      {list}
      </ul>
      </div>
    </div>
  );
}

export default App;

function DataPerview({tododata,index,setdata,data}) {
  let removedata=()=>{
  let finaldata=data.filter((v,i)=>i!=index)
  setdata(finaldata)
  }

  let[status,setstatus]=useState(false)

  let convertstatus=()=>{
    setstatus(!status)
  }
  return (
        <li className={`${(status)?"completetodo" : ""}`}  onClick={convertstatus}>{tododata}  <span onClick={removedata}>&times;</span></li>
  )
}
