// 카테고리의 태그
import React, {useState, useEffect} from 'react';
import { Grid, Button, Segment, Icon } from 'semantic-ui-react'

//1번 클릭시 color
//2번 클릭시 grey
//만약 color가 grey가 아닐때면 name값을 받아서 filter한다.

const Tag =()=> {
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
        </div>
    )
}
export default Tag;

// 데이터형식 Y/N
// 주출입구 접근로 여부	       Access
// 장애인 전용 주차구역 여부    Parking	
// 주출입구 높이차이 제거 여부	 Height
// 장애인용 승강기 여부	       Lift
// 장애인 화장실 여부	      Toliet
// 장애인용 객실 이용가능 여부	CustomRoom
// 장애인용 관람석 이용가능 여부 Seat	
// 장애인 매표소 여부	      Ticket
// 시각장애인 편의서비스 여부	BlindConve
// 청각장애인 편의서비스 여부	DeafConve
// 안내 서비스 여부	         Guidance
// 휠체어 대여 여부          Wheelchair

//시설명(title)   주소(location)	이미지(image)	연락처(call)
//