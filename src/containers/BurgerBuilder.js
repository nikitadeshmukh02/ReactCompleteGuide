import React,{Component} from 'react';
import Aux  from '../hoc/Aux'
import Burger  from '../components/Burger/Burger'

class BurgerBuilder extends Component{
  constructor(props){
    super(props)
     this.state = {   ingidents:{
         salad:2,
         beacon:2,
         cheese:2,
         meat:1,

       }};

  }
render(){
  return(
<Aux>
<Burger ingridents={this.state.ingidents}/>
<div>Burger Controls</div></Aux>
  )
}
}
export default BurgerBuilder;
