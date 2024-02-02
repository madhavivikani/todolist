import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [name, setname] = useState("");
  let [result, setresult] = useState([]);
  let [edit, setedit] = useState();
  let [reset, setreset] = useState([]);
  let [search, setsearch] = useState("");

  const addbtn = () => {
    if (edit !== undefined) {
      const updatedResult = [...result];
      updatedResult[edit].name1 = name;
      setresult(updatedResult);
      setedit(undefined);
      setname("");
    } else if (name.trim() !== "") {
      setresult([...result, { name1: name, completed: false }]);
      setreset([...reset, { name1: name, completed: false }]);
    }
    // setresult([...result, name]);
    setname("");
  }
  const btndel = (index) => {
    const del = result.filter((item, i) => i !== index);
    setresult(del);
    setreset(del);
  }
  const btnedit = (index) => {
    setname(result[index].name1)
    setedit(index);
  }

  const checkbtn = (index) => {
    const demo = [...result];
    demo[index].completed = !demo[index].completed;
    setresult(demo);
    setreset(demo);
  }

  const Clickbtn = () => {
    let info = [...reset];
    var data = info.filter((item, index) => {
      return item.name1 === search;
    })
    setresult(data);
    setsearch("");
  };

  const allbtn = () => {
    setresult([...reset]);
    // setreset([...reset]);
  }

  const combtn = () => {
    let completebtn = reset.filter((item,index)=>{
      return item.completed == true;
    })
    setresult(completebtn);
  }

  const uncombtn = () => {
    let completebtn = reset.filter((item,index)=>{
      return item.completed == false;
    })
    setresult(completebtn);
  }


  return (
    <div>
      <p className='title'>TO-Do-LIST...!!</p>
      <div className="App">
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter Task' className='name'></input>
        <input type="button" value="ADD" onClick={addbtn} className='btn'></input>
        <div className='all'>
          <ul className='one'>
            <input type='text' className='search name' value={search} placeholder='Search' onChange={(e) => setsearch(e.target.value)} ></input>
            <input type='button' className='btn btn1' value={"Click"} onClick={Clickbtn}></input>
            <input type='button' className='btn btn1' value={"Completed"} onClick={combtn}></input>
            <input type='button' className='btn btn1' value={"Uncompleted"} onClick={uncombtn}></input>
            <input type='button' className='btn btn1' value={"All"} onClick={() => allbtn()}></input>

            {
              result.map((item, index) => (
                <li key={index} className='one_1'>
                  <input type='checkbox' onClick={() => checkbtn(index)} checked={item.completed} className='check'></input>
                  <span className='name2' style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.name1}</span>
                  <input type='button' value={"Delete"} onClick={() => btndel(index)} className='del'>
                  </input><input type='button' value={"Edit"} onClick={() => btnedit(index)} className='edit'></input></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>

  );
}

// function App() {
  
//   let [name,setname]= useState("");
//   let [result,setresult] = useState([]);
//   let [edit,setedit] = useState();

//   const addbtn = () => {
//     if(edit !== undefined){
//       const update = [...result];
//       update[edit].name1=name;
//       setresult(update);
//       setedit(undefined);
//     }else{
//     setresult([...result,{name1:name,completed:false}]);
//     }
//     setname("");
//   }
//   const delbtn = (index) => {
//     // alert();
//     const del = result.filter((item,i)=>i!=- index);
//     setresult(del);
//   }
//  const editbtn = (index) => {
//     setname(result[index].name1);
//     setedit(index);
//   }
//  const checkbtn = (index) => {
//     // alert();
//     const demo = [...result];
//     demo[index].completed = !demo[index].completed;
//     setresult(demo);
//   }


//   return (
//     <div>
//       <input type='text' value={name} onChange={(e) => setname(e.target.value)}></input>
//       <input type='button' value={"Add"} onClick={() => addbtn()}></input>
//       <ul>
//         {
//           result.map((item, index) => {
//             return (
//               <li key={index}>
//                 <input type='checkbox' onClick={()=>checkbtn(index)} checked={item.completed}></input>
//                 <span style={{textDecoration:item.completed ? 'line-through' : 'none'}}>{item.name1}</span>
//                 <input type='button' value={"Del"} onClick={()=>delbtn(index)}></input>
//                 <input type='button' value={"Edit"} onClick={()=>editbtn(index)}></input>
//               </li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }


export default App;
