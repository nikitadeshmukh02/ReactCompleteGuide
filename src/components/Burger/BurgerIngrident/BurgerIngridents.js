import React,{Component} from 'react'
import classes from './BurgerIngrident.css'
import PropType from 'prop-types'
class BurgerIngrident extends Component{
  render()
  {
let ingrident=null;
switch(this.props.type)
{
  case 'bread-bottom':
ingrident=<div className={classes.BreadBottom}></div>
    break;
    case 'bread-top':
  ingrident=(
    <div className={classes.BreadTop}>
    <div className={classes.Seeds1}>
    </div>
    <div className={classes.Seeds2}>
    </div>
    </div>
  )
  break;
  case 'meat':
  ingrident=<div className={classes.Meat}></div>
  break;
  case 'cheese':
  ingrident=<div className={classes.Cheese}></div>
  break;
  case 'beacon':
  ingrident=<div className={classes.beacon}></div>
  break;
  case 'salad':
  ingrident=<div className={classes.Salad}></div>
  break;
default:
ingrident=null;
}
return ingrident;

}
}

BurgerIngrident.propTypes={
  type:PropType.string.isRequired
};
export default BurgerIngrident;
