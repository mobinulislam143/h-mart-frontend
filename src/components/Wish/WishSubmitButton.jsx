import React from 'react';
import WishStore from '../../store/WishStore';


function WishSubmitButton(props) {
   let {isWishSubmit} = WishStore()
   if(isWishSubmit===false){
    return <button onClick={props.onClick} type='submit'  style={{background:"#234E70", border: 'none', }} className={props.className}>{props.text}</button>
   }else{
    return (
        <button disabled={true}  style={{background:"#234E70", border: 'none', }} className={props.className}>
            <div className='spinner-border spinner-border-sm'ole="status"></div>Processing...
        </button>
    )
   }
}

export default WishSubmitButton;