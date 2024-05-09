import React from 'react';
import UserStore from '../../store/UserStore';

function UserSubmitButton(props) {
    const {isFormSubmit} = UserStore()
    
    if(isFormSubmit===false){
        return <button onClick={props.onClick}  style={{background:"#234E70", border: 'none', }}  type='submit' className={props.className}>{props.text}</button>
    }else{
        return(
            <button disabled={true} className={props.className}  style={{background:"#234E70", border: 'none', }}>
                <div className="spinner-border spinner-border-sm" role="status"></div> Processing...
            </button>
        )
    }
}

export default UserSubmitButton;
//  <button className='btn btn-secondary w-100' style={{background:"#d79706", border: 'none', }}>Submit</button>