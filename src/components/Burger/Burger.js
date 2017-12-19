import React from 'react';
import claases from './Burger.css'
import BurgerIngridents from './BurgerIngrident/BurgerIngridents'

const Burger=(props)=>{
  debugger
  let objIngridents=Object.keys(props.ingridents).map(igKey=>{

      return [...Array( props.ingridents[igKey])].map( ( _, i ) => {
              return <BurgerIngridents key={igKey + i} type={igKey} />;
          } ).reduce((arr,el)=>
        {
          debugger
          return arr.concat(el)
        },[]);
        })



return(
<div className={claases.Burger}>
<BurgerIngridents type="bread-top"/>

{objIngridents}
<BurgerIngridents type="bread-bottom"/>

</div>
)
}
export default Burger;
