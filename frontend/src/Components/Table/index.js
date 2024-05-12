import {
    useReactTable,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
  } from "@tanstack/react-table";

  import AddIcon from "../Icons/addIcon.png" 
  
  const columnHelper = createColumnHelper();
  
  const data = [
    {
      firstName: "Jane",
      surname: "Doe",
      age: 13,
      gender: "Female",
    },
    {
      firstName: "John",
      surname: "Doe",
      age: 43,
      gender: "Male",
    },
    {
      firstName: "Tom",
      surname: "Doe",
      age: 89,
      gender: "Male",
    },
  ];
  
  function Table() {
  
    return (
      <table style={{border:"1px solid #81C667", width: '500px', borderSpacing: '0'}}>
        <thead style={{background:"#81C667", width: '100%', color: '#fff'}}>
         <tr>
            <th style={{padding: '15px 0'}} >Nutrition</th>
            <th style={{padding: '15px 0'}}>Value                 
            <button style={{width: '20px', height: '20px',backgroundImage: `url(${AddIcon})`}} />
</th>
         </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.id}>
                    <td style={data.indexOf(row) === data.length-1 ? {width:'50%', textAlign: 'center', padding: '10px 0'} : {borderBottom:'1px solid #81C667', width:'50%', textAlign: 'center', padding: '10px 0'}}>
                      <span>
                        {row.firstName}
                      </span>
                      
                    </td>
                    <td style={ data.indexOf(row) === data.length-1 ?{width: '50%', textAlign: 'center', padding: '10px 0'} : {borderBottom:'1px solid #81C667', width:'50%', textAlign: 'center', padding: '10px 0'}}>
                      <span>
                        {row.surname}
                      </span>
                    </td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
    );
  }

export default Table;