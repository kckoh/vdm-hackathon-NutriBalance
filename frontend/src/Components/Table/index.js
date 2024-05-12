import {useEffect, useState} from 'react';

const data = [
    {
      Nutrition: "Jane",
      Value: "Doe",
      age: 13,
      gender: "Female",
    },
    {
      Nutrition: "John",
      Value: "Doe",
      age: 43,
      gender: "Male",
    },
    {
      Nutrition: "Tom",
      Value: "Doe",
      age: 89,
      gender: "Male",
    },
  ];

  function Table() {

    const [dataArray, setDataArray] = useState(data);
    const [tableData, setTableData] = useState(data);

    const AddRow = () => {
      setDataArray([...dataArray, {Nutrition: '', Value: ''}]);
    }

    const correctInput = (e) => {
      
    }

    useEffect(() => {
      setTableData(dataArray)
    }, [dataArray])


  
    return ( 
      <div style={{maxHeight: '150px', overflowY:'scroll', width: 'inline-block'}}> 
       <span>
              <img onClick={AddRow} style={{width: '15px', height: '15px'}} src='/Icons/addIcon.png'/>
            </span>    
      <table style={{border:"1px solid #81C667", width: '80%', borderSpacing: '0'}}> 
        <thead style={{background:"#81C667", width: '100%', color: '#fff', position: 'sticky'}}>
         <tr>
            <th style={{padding: '15px', textAlign: 'left', }} >Nutrition</th>
            <th style={{padding: '15px', textAlign: 'left', }}>Value            
      </th>
         </tr>
        </thead>
        <tbody >
          {tableData.map((row) => {
            return (
              <tr key={row.id}>
                    <td style={tableData.indexOf(row) === tableData.length-1 ? {width:'50%', textAlign: 'center', padding: '10px 0'} : {borderBottom:'1px solid #81C667', width:'50%', textAlign: 'center', padding: '10px 0'}}>
                    <input style={{border: '0px', backgroundColor: 'transparent'}}  placeholder= "Enter text" value={row.Nutrition}/>
                    </td>
                    <td style={ tableData.indexOf(row) === tableData.length-1 ?{width: '100%', textAlign: 'center', padding: '10px 0', display: 'flex', justifyContent: 'space-around'} : {borderBottom:'1px solid #81C667', width:'100%', textAlign: 'center', padding: '10px 0', display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                    <input style={{border: '0px', backgroundColor: 'transparent'}}  placeholder= "Enter text" value={row.Value}/>

                    </div>
                      <span style={{width: '20px', height: '20px'}}>
                        <img src='/Icons/correctionIcon.png'/>
                      </span>
                    </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    );
  }

export default Table;