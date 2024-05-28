
function InfoDisplayPage() {

  const getData =() => {
    console.log('getting Data')
  }

  return (
    <div className="InfoDisplayPage" style={{ margin: '50px', padding: '5%'}}>
      <h3>
        Vitamin C
      </h3>
      <div style={{width: '25%', height: '200px', border: '1px solid orange', marginBottom: '50px'}}>
      </div>
      <div>
      <span style={{position: 'absolute', top: '75%', left: '40%'}}>
        <img src="/Icons/loadingIcon.png" />
      </span>
      <textarea style={{width: '500px',height: '300px', overflowY: 'scroll', borderRadius: '10px', border: '1px solid #81C667' }}>
        asdfsdfsdfs
      </textarea>
      </div>
    </div>
  );
}

export default InfoDisplayPage;