import React, {  useEffect, useState } from "react";

function InfoDisplayPage() {

  const [loading, setLoading] = useState(false);

  const GetData =() => {
    console.log('getting Data')
    // if(data){
      // setLoading(false);
    //} else {
    // setLoading(true);
    //}
  }

  useEffect(() => {
    GetData();
  })

  return (
    <div className="InfoDisplayPage" style={{ margin: '50px', padding: '5%'}}>
      <h3>
        Vitamin C
      </h3>
      <div style={{width: '25%', height: '200px', border: '1px solid orange', marginBottom: '50px'}}>
      </div>
      <div>
      {loading && <span style={{position: 'absolute', top: '75%', left: '40%'}}>
        <img src="/Icons/loadingIcon.png" />
      </span>}
      <textarea style={{width: '500px',height: '300px', overflowY: 'scroll', borderRadius: '10px', border: '1px solid #81C667' }}>
        asdfsdfsdfs
      </textarea>
      </div>
    </div>
  );
}

export default InfoDisplayPage;