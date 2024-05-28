import Button from "../Components/Button";
import { Link } from "react-router-dom";

import Table from "../Components/Table";

function SubmitInfoPage() {
  return (
    <div className="InfoDisplayPage" style={{ margin: '50px', padding: '5%'}}>
      <h3>
        Vitamin C
      </h3>
      <div style={{width: '25%', height: '200px', border: '1px solid orange', marginBottom: '50px'}}>
        
      </div>
        <Table />
        <div style={{marginTop: '50px', textAlign: 'center'}}>
        <Link to='/result'>
              <Button className="text-white bg-[#81C667]">
                Send
              </Button>
              </Link>
              <Button
                onClick={() =>  window.location.reload()}
                className="bg-white text-[#81C667] border-2 border-[#81C668] "
              >
                Refresh
              </Button>
              </div>
    </div>
  );
}

export default SubmitInfoPage;