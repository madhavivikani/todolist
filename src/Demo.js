// function App() {

//   let [name, setname] = useState("");
//   let [result, setresult] = useState([]);
//   let [edit, setedit] = useState();

//   const addbtn = () => {
//     if (edit !== undefined) {
//       const updatedResult = [...result];
//       updatedResult[edit] =  name ;
//       setresult(updatedResult);
//       setedit(undefined);
//     } else if (name.trim() !== "") {
//       setresult([...result, name]);
//     }
//     // setresult([...result, name]);
//     setname("");
//   }
//   const btndel = (index) => {
//     const del = result.filter((item, i) => i !== index);
//     setresult(del);
//   }
//   const btnedit = (index) => {
//     setname(result[index])
//     setedit(index);
//   }



//   return (

   

//     <div>
//       <p className='title'>TO-Do-LIST...!!</p>
//       <div className="App">
//         <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter Task' className='name'></input>
//         <input type="button" value="ADD" onClick={addbtn} className='btn'></input>
//         <div className='all'>
//           <ul className='one'>
//             {
//               result.map((item, index) => (
//                 <li key={index} className='one_1'>
//                   <input type='checkbox'  onClick={() => (index)} className='check'></input>
//                   <span className='name2'>{item}</span>
//                   <input type='button' value={"Delete"} onClick={() => btndel(index)} className='del'>
//                   </input><input type='button' value={"Edit"} onClick={() => btnedit(index)} className='edit'></input></li>
//               ))
//             }
//           </ul>
//         </div>
//       </div>
//     </div>

//   );
// }
