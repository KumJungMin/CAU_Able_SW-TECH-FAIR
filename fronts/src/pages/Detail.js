import React, {useState, useCallback, useEffect} from 'react'
import { Button, Header, Icon, Image, Modal, Grid, Segment, Divider, form } from 'semantic-ui-react'
import Map from '../components/Map'
import api from '../api';
import Talk from './talk'
//1. api에 정보 넘기기 : api파일 import하기

const Detail = (props) => {
       
    return(
        
        <Modal trigger={<Button fluid color="blue" inverted >상세보기</Button>}>
            <Modal.Content image>
            <Modal.Description>
                <Grid textAlign="center">
                <Grid.Row />
                    <h2>{props.title}</h2>
                    <br />
                </Grid>
                <Grid columns='equal'>
                    <Grid.Row centered columns={3} >
                        
                        <Grid.Column >
                            <Segment textAlign="center">
                                <p>주소</p>
                                <br />
                                <p>{props.location}</p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment textAlign="center">
                                <p>평점</p>
                                <br />
                                <p>평가지수 3.5 /5.0점</p>

                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment textAlign="center">
                                <p>문의</p>
                                <br/>
                                <p>{props.call}</p>
                            </Segment>
                        </Grid.Column>
                        
                    </Grid.Row>
    
                    <Map Latitude={props.Latitude} Longitude={props.Longitude}/> 
                        {props.toilet === "Y" ? <Icon color='blue' circular name='users' size="large"/> : <Icon circular disabled name='users'size="large"/>}
                        {props.parking === "Y" ? <Icon color='blue'circular name='car' size="large"/> : <Icon circular disabled name='car' size="large"/>}
                        {props.height === "Y" ? <Icon color='blue' circular name='triangle up' size="large"/> : <Icon circular disabled name='triangle up'size="large"/>}
                        {props.customRoom === "Y" ? <Icon color='blue' circular name='bed' size="large"/> : <Icon circular disabled name='bed'size="large"/>}
                        {<Icon color='blue' circular name='microchip'  size="large"/>}
  
                        {/* {props.blindConve === "Y" ? <Icon color='blue' circular name='blind' size="large"/> : <Icon circular disabled name='blind'size="large"/>} */}
                        {props.deafConve === "Y" ? <Icon color='blue' circular name='deaf' size="large"/> : <Icon circular disabled name='deaf'size="large"/>}
                        {props.guidance === "Y" ? <Icon color='blue' circular name='help' size="large"/> : <Icon circular disabled name='help' size="large"/>}
                        {props.wheelchair === "Y" ? <Icon color='blue' circular name='wheelchair' size="large"/> : <Icon circular disabled name='wheelchair'size="large"/>}

                </Grid>

                <Talk />
         
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                닫기 <Icon name='right chevron' />
            </Button>
        </Modal.Actions>
        </Modal>
    )
  
}

export default Detail;




