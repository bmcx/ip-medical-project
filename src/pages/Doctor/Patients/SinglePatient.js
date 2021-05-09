

import Prescription from "../../Patient/Home/Components/Prescription";







export const SinglePatient = (props) => {
  
  
  
  return (
    <div>selected id:{props.match.params.id}
      <div>
        <Prescription />
      </div>
    </div>



  );

}

export default SinglePatient;
