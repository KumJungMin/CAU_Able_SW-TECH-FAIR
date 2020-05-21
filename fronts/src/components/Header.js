import React, {useState} from 'react';
import { Grid, Search, Button} from 'semantic-ui-react'
import './style.css'
import Content from './Content'
import MainContent from './MainContent'
import Course from '../pages/Course'

//댓글에서 이름의 경우 자동으로 음식점이름, 별점, 내용만 입력
//댓글을 불러올때는 이름에 해당하는 걸 필터로 걸어서 가져오기

const Header=(props)=>{
    // 1. click값을 넘겨서 이 값을 content의 동적변수에 넣음
    // 2. click1이 true면 -> dataname의 값은 "주출입문로 여부"로 바꿈
    // 3. 그래서 저 dataname으로 filter
    const [click1, setClick1] = useState(false); //true->color
    const [click2, setClick2] = useState(false); //true->color
    const [click3, setClick3] = useState(false); //true->color
    const [click4, setClick4] = useState(false); //true->color
    const [click5, setClick5] = useState(false); //true->color
    const [click6, setClick6] = useState(false); //true->color
    const [click7, setClick7] = useState(false); //true->color
    const [click8, setClick8] = useState(false); //true->color
    const [click9, setClick9] = useState(false); //true->color
    const [click10, setClick10] = useState(false); //true->color
    const [click11, setClick11] = useState(false); //true->color

    return(
        <div>
            {props.activeItem ==="home"?
            <div>
                <div className="backImg"><br />
                    <Grid columns='equal'><Grid.Row /><Grid.Column />
                        <Grid.Column width={12} textAlign="center">
                            <h2 className="fontColor">Able</h2>
                            <p>여행가고 맛집찾고 관광하자</p>
                            <Search
                            fluid
                            onResultSelect
                            onSearchChange
                            results
                            value=""
                            resultRenderer
                            />
                        </Grid.Column><Grid.Column/><Grid.Row />
                    </Grid>
                </div>
                <MainContent/>
            </div> : ""
            }
        

{/* ---------------------------------------------------------------------------------- */}
        
        
        {props.activeItem ==="trip"?
            <div>
                <div className="backImg"><br />
                    <Grid columns='equal'><Grid.Column />
                        <Grid.Column width={12} textAlign="center">
                            <h2 className="fontColor">Able</h2>
                            <p>여행가고 맛집찾고 관광하자</p>
                            <Search
                            fluid
                            onResultSelect
                            onSearchChange
                            results
                            value=""
                            resultRenderer
                            />
                        </Grid.Column><Grid.Column/>
                    </Grid>
                    <Content activeItem="home"/> 
                </div>
                <div>
                <Grid columns='equal'>
                    <Grid.Column textAlign="center">
                        <Button circular size="tiny"
                        color={click1===false ? "":"red"} 
                        name="Access"
                        onClick={()=>{setClick1(!click1)}}           
                        >정문접근로</Button>

                        <Button circular size="tiny"
                        color={click2===false ? "":"blue"} 
                        name="Ticket"
                        onClick={()=>{setClick2(!click2)}}
                        >전용매표소</Button>

                        <Button circular size="tiny"
                        color={click3===false ? "":"brown"} 
                        name="Wheelchair"
                        onClick={()=>{setClick3(!click3)}}
                        >휠체어대여</Button>

                        <Button circular size="tiny"
                        color={click4===false ? "":"orange"} 
                        name="Parking"
                        onClick={()=>{setClick4(!click4)}}
                        >전용주차구역</Button>

                        <Button circular size="tiny"
                        color={click5===false ? "":"yellow"} 
                        name="Height"
                        onClick={()=>{setClick5(!click5)}}
                        >정문높이차이제거</Button>

                        <Button circular size="tiny"
                        color={click9===false ? "":"teal"} 
                        onClick={()=>{setClick9(!click9)}}
                        name="CustomRoom"
                        >전용객실</Button>

                        <Button circular size="tiny"
                        color={click6===false ? "":"olive"} 
                        name="Lift"
                        onClick={()=>{setClick6(!click6)}}
                        >전용승강기</Button>
    
                        <Button circular size="tiny"
                        color={click8===false ? "":"pink"} 
                        name="Guidance"
                        onClick={()=>{setClick8(!click8)}}
                        >안내</Button>

                        <Button circular size="tiny"
                        color={click7===false ? "":"green"} 
                        name="Toliet"
                        onClick={()=>{setClick7(!click7)}}
                        >전용화장실</Button>

                        <Button circular size="tiny"
                        color={click10===false ? "":"violet"} 
                        onClick={()=>{setClick10(!click10)}}
                        name="BlindConve"
                        >시각장애편의서비스</Button>

                        <Button circular size="tiny"
                        color={click11===false ? "":"purple"} 
                        onClick={()=>{setClick11(!click11)}}
                        name="DeafConve"
                        >청각장애편의서비스</Button>
                    </Grid.Column>                
                </Grid>
                {/* click1~11까지 모든 값을 받아서 content에서
                true인 것만 저장하고 사용
                */}
                <Content activeItem="trip" Access={click1} Ticket={click2}
                        Wheelchair={click3} Parking={click4} Height={click5} 
                        CustomRoom={click9} Lift={click6} Guidance={click8}
                        Toliet={click7} BlindConve={click10} DeafConve={click11}/> 
            </div>  
        </div>:""}

        {props.activeItem ==="food"?
            <div>
                <div className="backImg"><br />
                    <Grid columns='equal'><Grid.Column />
                        <Grid.Column width={12} textAlign="center">
                            <h2 className="fontColor">Able</h2>
                            <p>여행가고 맛집찾고 관광하자</p>
                            <Search
                            fluid
                            onResultSelect
                            onSearchChange
                            results
                            value=""
                            resultRenderer
                            />
                        </Grid.Column><Grid.Column/>
                    </Grid>
                </div>
                <div>
                <Grid columns='equal'>
                    <Grid.Column textAlign="center">
                        <Button circular size="tiny"
                        color={click1===false ? "":"red"} 
                        name="Access"
                        onClick={()=>{setClick1(!click1)}}           
                        >정문접근로</Button>

                        <Button circular size="tiny"
                        color={click2===false ? "":"blue"} 
                        name="Ticket"
                        onClick={()=>{setClick2(!click2)}}
                        >전용매표소</Button>

                        <Button circular size="tiny"
                        color={click3===false ? "":"brown"} 
                        name="Wheelchair"
                        onClick={()=>{setClick3(!click3)}}
                        >휠체어대여</Button>

                        <Button circular size="tiny"
                        color={click4===false ? "":"orange"} 
                        name="Parking"
                        onClick={()=>{setClick4(!click4)}}
                        >전용주차구역</Button>
                        <Button circular size="tiny"
                        color={click5===false ? "":"yellow"} 
                        name="Height"
                        onClick={()=>{setClick5(!click5)}}
                        >정문높이차이제거</Button>

                        <Button circular size="tiny"
                        color={click9===false ? "":"teal"} 
                        onClick={()=>{setClick9(!click9)}}
                        name="CustomRoom"
                        >전용객실</Button>

                        <Button circular size="tiny"
                        color={click6===false ? "":"olive"} 
                        name="Lift"
                        onClick={()=>{setClick6(!click6)}}
                        >전용승강기</Button>
    
                        <Button circular size="tiny"
                        color={click8===false ? "":"pink"} 
                        name="Guidance"
                        onClick={()=>{setClick8(!click8)}}
                        >안내</Button>

                        <Button circular size="tiny"
                        color={click7===false ? "":"green"} 
                        name="Toliet"
                        onClick={()=>{setClick7(!click7)}}
                        >전용화장실</Button>

                        <Button circular size="tiny"
                        color={click10===false ? "":"violet"} 
                        onClick={()=>{setClick10(!click10)}}
                        name="BlindConve"
                        >시각장애편의서비스</Button>

                        <Button circular size="tiny"
                        color={click11===false ? "":"purple"} 
                        onClick={()=>{setClick11(!click11)}}
                        name="DeafConve"
                        >청각장애편의서비스</Button>
                    </Grid.Column>                
                </Grid>
                <Content activeItem="food" Access={click1} Ticket={click2}
                        Wheelchair={click3} Parking={click4} Height={click5} 
                        CustomRoom={click9} Lift={click6} Guidance={click8}
                        Toliet={click7} BlindConve={click10} DeafConve={click11}/> 

            </div>  
        </div>:""}  


        {props.activeItem ==="course"?
            <div>
                 <Course />
        </div>:""} 

    </div>
    )
}

export default Header