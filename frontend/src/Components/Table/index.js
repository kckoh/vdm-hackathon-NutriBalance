

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
  

  function CustomHTMLElement(props) {
    return <div dangerouslySetInnerHTML={{__html: props.customHtml}} />
  }

  function Table() {
  
    return ( 
      <div style={{maxHeight: '150px', overflowY:'scroll', width: 'inline-block'}}> 
      <table style={{border:"1px solid #81C667", width: '500px', borderSpacing: '0'}}>
        <thead style={{background:"#81C667", width: '100%', color: '#fff', position: 'sticky'}}>
         <tr>
            <th style={{padding: '15px', textAlign: 'left', }} >Nutrition</th>
            <th style={{padding: '15px', textAlign: 'left', }}>Value                 
      </th>
         </tr>
        </thead>
        <tbody >
          {data.map((row) => {
            return (
              <tr key={row.id}>
                    <td style={data.indexOf(row) === data.length-1 ? {width:'50%', textAlign: 'center', padding: '10px 0'} : {borderBottom:'1px solid #81C667', width:'50%', textAlign: 'center', padding: '10px 0'}}>
                    <div>
                    <CustomHTMLElement
                      customHtml={`<input style="border: 0px; background-color: transparent" placeholder='Enter text' value='${row.firstName}' />`}
                    />
                    </div>
                      
                    </td>
                    <td style={ data.indexOf(row) === data.length-1 ?{width: '100%', textAlign: 'center', padding: '10px 0', display: 'flex', justifyContent: 'space-around'} : {borderBottom:'1px solid #81C667', width:'100%', textAlign: 'center', padding: '10px 0', display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                    <CustomHTMLElement
                      customHtml={`<input style=" border: 0px; background-color: transparent" placeholder='Enter text' value='${row.surname}' />`}
                    />
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