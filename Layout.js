import React, {useState} from 'react';
import { Grid, Menu, Icon} from 'semantic-ui-react'
import Header from './Header'
// import Map from './Map'
import Course from '../pages/Course'

const Layout=()=>{
    const [activeItem, setActiveItem] = useState('home');
    const handleItemClick = (e, {name}) => setActiveItem(name)


    return(
        <div>
            <div>
                <Header activeItem={activeItem}/>
            </div>
        {/* header */}
          
            {/* FOOTER */}
           <Menu widths={4} fixed="bottom">  
           <Menu.Item
           name='home'
           active={activeItem === 'home'}
           onClick={handleItemClick}>
               <Grid.Row>
                   <Grid.Column textAlign="center">
                       <Icon name='home' size="large" />
                       <p>메인</p>
                   </Grid.Column>
               </Grid.Row>
           </Menu.Item>
           
           <Menu.Item
           name='trip'
           active={activeItem === 'trip'}
           onClick={handleItemClick}>
               <Grid.Row>
                   <Grid.Column textAlign="center">
                       <Icon name='location arrow' size="large" />
                       <p>관광지</p>
                   </Grid.Column>
               </Grid.Row>
           </Menu.Item>
           <Menu.Item
           name='food'
           active={activeItem === 'food'}
           onClick={handleItemClick}>
               <Grid.Row>
                   <Grid.Column textAlign="center">
                       <Icon name='food' size="large" />
                       <p>음식점</p>
                   </Grid.Column>
               </Grid.Row>
           </Menu.Item>
           <Menu.Item
           name='course'
           active={activeItem === 'course'}
           onClick={handleItemClick}>
               <Grid.Row>
                   <Grid.Column textAlign="center">
                       <Icon name='question circle' size="large" />
                       <p>무장애코스</p>
                   </Grid.Column>
               </Grid.Row>
           </Menu.Item>
       </Menu>
    </div>

    )

}

export default Layout