import { useState } from "react";

function Activities() {
    /** CONTEXT API DATA **/
//     const hotelContext = useContext(HotelsContext); 
//    const {myHotel} = hotelContext; 
   
  /** checkboxes true or false data**/
   const [handleCheck, setHandleCheck] = useState({});
   

    const handleChange =  (e) => {
           setHandleCheck({...handleCheck, [e.target.name]: e.target.checked})
       }

      useEffect(() => {
        function filterbyName (value) {
            if (handleCheck !== undefined) {
                let filterKeys = ['E-waste', 'Lighting waste', 'Cash for trash', 'Old clothes'];
        
                return filterKeys.every(function(key) {
                    return !handleCheck[key] || value[key];
                });
            } else {
                return value;
            }
        }
        
     
       setNewActivity(
           Activities.filter(filterbyName)
       )
      }, [handleCheck, myHotel]);
    }