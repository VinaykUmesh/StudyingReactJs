 import React from 'react';


class Header extends React.Component (){
            render(){
                 const styles = {
                       header :{ 
                        background : 'tomato'
                      
                      },
                      logo :{
                       color :  '#fff',
                       
                       textAlign : 'center'

                      }
                 }

            return (
               <header  style={styles.header}>
               <div  style={styles.logo}>LOGO</div>
               <div><input type="text"/></div>
               </header>
            )
           }

}

export default Header;