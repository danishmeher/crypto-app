import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import arrowicon from "../assets/arrow_icon.png"
import "./navbar.css"
import { CoinContext } from './coincontext'
import { Link } from 'react-router-dom'

const navbar = () => {
    const {setcurrency} = useContext (CoinContext)

    const changeHandler =(event)=>{
        switch(event.target.value){
            case "USD" :
                { setcurrency({name:"USD" , symbol:"$"})
        
            break}
            case "EUR" : {setcurrency({name:"EUR" , symbol:"€"});
            break;}
            case "INR" : {setcurrency({name:"INR" , symbol:"₹"});
            break;}
            case "PKR" : {setcurrency({name:"pkr" , symbol:"Rs"});
            break;}
            default : {
            setcurrency({name:"USD" , symbol:"$"});
            break;}
        }
        
    }

  return (
    <div className='navbar'>
        <Link to={`./`}>
    <img src={logo} alt="" className='logo' />
        </Link>
    <ul>
        <Link to={'./'}>
        <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Price</li>
        <li>Blog</li>
    </ul>
    <div className="nav-right">
        <select onChange={changeHandler}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="PKR">PKR</option>
        </select>
        <button>Sign up <img src={arrowicon} alt="" /></button>
    </div>
 </div>
 )
}

export default navbar