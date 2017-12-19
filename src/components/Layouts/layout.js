import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './LayoutStyle.css'
 const layout=(props)=>(
<Aux>
    <div>Toolbar,SideBar,Backdrop</div>
     <div className={classes.Content} >{props.children}</div>
</Aux>
)
export default layout;
