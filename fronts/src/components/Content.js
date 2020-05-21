import React, {useState,useEffect} from 'react';
import { Grid, Image, Segment, Icon, Button} from 'semantic-ui-react'
import Course from '../pages/Course'
import Detail from '../pages/Detail'
import api from '../api'
// detail로 넘어가는 버튼
import { Link } from 'react-router-dom'
//https://velog.io/@ki_blank/React-Router-1.-8njzuummrs


const Content=(props)=>{
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     api.getTouristspot()
    //     .then((response)=>{setData(response)})
    //     console.log("data값이 들어갔엉")
    // }, [])


 //Y,N로 값이 나오니까, 클릭시 -> Y로 바꾸고 아니면 디폴트로 N 
 //초기화면에는 all N인데, 이때는 모든 내용을 보여줌
    const [access, setAccess] = useState("N")
    const [parking, setParking] = useState("N")
    const [ticket, setTicket] = useState("N")
    const [wheelchair, setWheelchair] = useState("N")
    const [height, setHeight] = useState("N")
    const [customRoom, setCustomRoom] = useState("N")
    const [lift, setLift] = useState("N")
    const [guidance, setGuidance] = useState("N")
    const [toliet, setToliet] = useState("N")
    const [deafConve, setDeafConve] = useState("N")
    const [blindConve, setBlindConve] = useState("N")

    return(
        <div>
            {useEffect(()=>{
                props.Access === true ? setAccess("Y"):setAccess("N")
                console.log("props.Access",props.Access)
            },[props.Access])}

            {useEffect(()=>{
                props.Parking === true ? setParking("Y") : setParking("N")
                console.log("props.Parking",props.Parking)
            },[props.Parking])}

            {useEffect(()=>{
                props.Ticket === true ? setTicket("Y") : setTicket("N")
                console.log("props.Ticket",props.Ticket)
            },[props.Ticket])}

            {useEffect(()=>{
                props.Wheelchair === true ? setWheelchair("Y") : setWheelchair("N")
                console.log("props.Wheelchair",props.Wheelchair)
            },[props.Wheelchair])}

            {useEffect(()=>{
                props.Height === true ? setHeight("Y") : setHeight("N")
                console.log("props.Height",props.Height)
            },[props.Height])}

            {useEffect(()=>{
                props.CustomRoom === true ? setCustomRoom("Y") : setCustomRoom("N")
                console.log("props.CustomRoom",props.CustomRoom)
            },[props.CustomRoom])}

            {useEffect(()=>{
                props.Lift === true ? setLift("Y") : setLift("N")
                console.log("props.Lift",props.Lift)
            },[props.Lift])}

            {useEffect(()=>{
                props.Guidance === true ? setGuidance("Y") : setGuidance("N")
                console.log("props.Guidance",props.Guidance)
            },[props.Guidance])}

            {useEffect(()=>{
                props.Toliet === true ? setToliet("Y") : setToliet("N")
                console.log("props.Toliet",props.Toliet)
            },[props.Toliet])}

            {useEffect(()=>{
                props.BlindConve === true ? setBlindConve("Y") : setBlindConve("N")
                console.log("props.BlindConve",props.BlindConve)
            },[props.BlindConve])}

            {useEffect(()=>{
                props.DeafConve === true ? setDeafConve("Y") : setDeafConve("N")
                console.log("props.DeafConve",props.DeafConve)
            },[props.DeafConve])}

         
           
            {
                // props.Access 
            props.activeItem === 'trip' ?
                Tripdata.filter(data=> (
                    data.Access === access && 
                    data.Parking === parking&&
                    data.Ticket === ticket&&
                    data.Wheelchair === wheelchair&&
                    data.Height === height&&
                    data.CustomRoom === customRoom&&
                    data.Lift === lift&&
                    data.Guidance === guidance&&
                    data.Toliet === toliet&&
                    data.Parking === parking&&
                    data.DeafConve === deafConve&&
                    data.BlindConve === blindConve
                ) || (
                    access === "N"&& 
                    parking === "N"&&
                    ticket === "N"&&
                    wheelchair === "N"&&
                    height === "N"&&
                    customRoom === "N"&&
                    lift === "N"&&
                    guidance === "N"&&
                    toliet === "N"&&
                    parking === "N"&&
                    deafConve === "N"&&
                    blindConve === "N"
                )
                    ).map((data)=> 
                    <Grid columns='equal'>
                        <Grid.Row/>
                        {/* <Grid.Column/> */}
                        <Grid.Column>
                            <div className="overflow">
                                <Image className="mainImgSize" src={data.Image}/>  
                            </div>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Segment raised>
                                <p>
                                    <span className="locationFont">{data.Location}</span><br/>
                                    <span className="titleFont">{data.Title}</span><br/>
                                    <span className="locationFont">{data.Call}</span>
                                </p>
                                {data.Toliet === "Y" ? <Icon color='blue' circular name='users' size="tiny"/> : <Icon circular disabled name='users'size="tiny"/>}
                                {data.Parking === "Y" ? <Icon color='blue'circular name='car' size="tiny"/> : <Icon circular disabled name='car' size="tiny"/>}
                                {data.Height === "Y" ? <Icon color='blue' circular name='triangle up' size="tiny"/> : <Icon circular disabled name='triangle up'size="tiny"/>}
                                {<Icon color='blue' circular name='microchip'  size="tiny"/>}
  
                                {data.CustomRoom === "Y" ? <Icon color='blue' circular name='bed' size="tiny"/> : <Icon circular disabled name='bed'size="tiny"/>}
                                {data.Seat === "Y" ? <Icon color='blue' circular name='map outline' rotated='clockwise' size="tiny"/> : <Icon circular rotated='clockwise' disabled name='map outline'size="tiny"/>}
                                {data.BlindConve === "Y" ? <Icon color='blue' circular name='blind' size="tiny"/> : <Icon circular disabled name='blind'size="tiny"/>}
                                {data.DeafConve === "Y" ? <Icon color='blue' circular name='deaf' size="tiny"/> : <Icon circular disabled name='deaf'size="tiny"/>}
                                {data.Guidance === "Y" ? <Icon color='blue' circular name='help' size="tiny"/> : <Icon circular disabled name='help' size="tiny"/>}
                                {data.Wheelchair === "Y" ? <Icon color='blue' circular name='wheelchair' size="tiny"/> : <Icon circular disabled name='wheelchair'size="tiny"/>}
                                
                                <Detail 
                                title={data.Title} 
                                location={data.Location}
                                call = {data.Call}
                                access = {data.Access}
                                parking = {data.Parking}
                                height = {data.Height}
                                lift = {data.Lift}
                                toilet = {data.Toliet}
                                coustomRoom = {data.CustomRoom}
                                blindConve = {data.BlindConve}
                                deafConve = {data.DeafConve}
                                guidance = {data.Guidance}
                                wheelchair = {data.Wheelchair}
                                Longitude = {data.Longitude}
                                Latitude = {data.Latitude}

                                />

                               
                                    {/* <Link to='/Detail'>
                                        상세보기
                                    </Link>
                                */}
                                {/* 상세보기클릭시 (title값만 넘기기 -> detail에서 title에 해당하는 데이터를 불러옴)
                                -> layout의 content에서 detail을 띄운다. */}
                            </Segment>
                            </Grid.Column>
                        {/* <Grid.Column/> */}
                    </Grid>
                    )
                     : ""
                    }

            {
                // props.Access 
            props.activeItem === 'food' ?
                fooddata.filter(data=> (
                    data.Access === access && 
                    data.Parking === parking&&
                    data.Ticket === ticket&&
                    data.Wheelchair === wheelchair&&
                    data.Height === height&&
                    data.CustomRoom === customRoom&&
                    data.Lift === lift&&
                    data.Guidance === guidance&&
                    data.Toliet === toliet&&
                    data.Parking === parking&&
                    data.DeafConve === deafConve&&
                    data.BlindConve === blindConve
                ) || (
                    access === "N"&& 
                    parking === "N"&&
                    ticket === "N"&&
                    wheelchair === "N"&&
                    height === "N"&&
                    customRoom === "N"&&
                    lift === "N"&&
                    guidance === "N"&&
                    toliet === "N"&&
                    parking === "N"&&
                    deafConve === "N"&&
                    blindConve === "N"
                )
                    ).map((data)=> 
                    <Grid columns='equal'>
                    <Grid.Row></Grid.Row>
                    
                    <Grid.Column textAlign="center">
                        <Segment raised>
                            <p>
                                <span className="locationFont">{data.Location}</span><br/>
                                <span className="titleFont">{data.Title}</span><br/>
                                <span className="locationFont">{data.Call}</span>
                            </p>
                            {data.Toliet === "Y" ? <Icon color='blue' circular name='users' size="tiny"/> : <Icon circular disabled name='users'size="tiny"/>}
                            {data.Parking === "Y" ? <Icon color='blue'circular name='car' size="tiny"/> : <Icon circular disabled name='car' size="tiny"/>}
                            {data.Height === "Y" ? <Icon color='blue' circular name='triangle up' size="tiny"/> : <Icon circular disabled name='triangle up'size="tiny"/>}
                            {data.CustomRoom === "Y" ? <Icon color='blue' circular name='bed' size="tiny"/> : <Icon circular disabled name='bed'size="tiny"/>}
                            {data.Seat === "Y" ? <Icon color='blue' circular name='map outline' rotated='clockwise' size="tiny"/> : <Icon circular rotated='clockwise' disabled name='map outline'size="tiny"/>}
                            {data.BlindConve === "Y" ? <Icon color='blue' circular name='blind' size="tiny"/> : <Icon circular disabled name='blind'size="tiny"/>}
                            {data.DeafConve === "Y" ? <Icon color='blue' circular name='deaf' size="tiny"/> : <Icon circular disabled name='deaf'size="tiny"/>}
                            {data.Guidance === "Y" ? <Icon color='blue' circular name='help' size="tiny"/> : <Icon circular disabled name='help' size="tiny"/>}
                            {data.Wheelchair === "Y" ? <Icon color='blue' circular name='wheelchair' size="tiny"/> : <Icon circular disabled name='wheelchair'size="tiny"/>}
                            <Detail 
                                title={data.Title} 
                                location={data.Location}
                                call = {data.Call}
                                access = {data.Access}
                                parking = {data.Parking}
                                height = {data.Height}
                                lift = {data.Lift}
                                toilet = {data.Toliet}
                                coustomRoom = {data.CustomRoom}
                                blindConve = {data.BlindConve}
                                deafConve = {data.DeafConve}
                                guidance = {data.Guidance}
                                wheelchair = {data.Wheelchair}
                                Longitude = {data.Longitude}
                                Latitude = {data.Latitude}

                                />
                            <p />

                            

                        </Segment>
                    </Grid.Column>
                    
                </Grid>
                    )
                     : ""
                    }

{
                // props.Access 
            props.activeItem === 'Course' ?
                <Course />
                     : ""
                    }
                </div>
            )
        }

export default Content




// 데이터형식 Y/N
// 주출입구 접근로 여부	       Access
// 장애인 전용 주차구역 여부    Parking	
// 주출입구 높이차이 제거 여부	 Height
// 장애인용 승강기 여부	       Lift
// 장애인 화장실 여부	      Toliet
// 장애인용 객실 이용가능 여부	CustomRoom
// 장애인용 관람석 이용가능 여부 Seat --> 데이터 추가하기	
// 장애인 매표소 여부	      Ticket
// 시각장애인 편의서비스 여부	BlindConve
// 청각장애인 편의서비스 여부	DeafConve
// 안내 서비스 여부	         Guidance
// 휠체어 대여 여부          Wheelchair


const fooddata=[
    {Title: "롯데리아",
    Location :"서울시 은평구 응암로 229",
    Call : "02-308-6681",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.9174928,	
    Latitude: 37.59240924
    },

    {Title: "대창타운빌",
    Location :"서울시 구로구 개봉로23가길 70",
    Call : "번호없음",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.8598181,	
    Latitude: 37.49482721
    },

    {Title: "㈜젠 하이더 웨이-동남아음식",
    Location :"서울시 강남구 언주로168길  24",
    Call : "번호없음",
    Access : "Y",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.035543,	
    Latitude: 37.5259197
    },

    {Title: "근린생활시설(생고기전문점취어당)",
    Location :"서울시 노원구 노원로 447",
    Call : "번호없음",
    Access : "Y",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0664851,	
    Latitude: 37.65640127
    },
 
    {Title: "대원",
    Location :"성동구 고산자로26길",
    Call : "002-2295-5500",
    Access : "N",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0390492,	
    Latitude: 37.57038811
    },

    {Title: "커피빈 압구정점(스마트 익스체인지 빌딩)",
    Location :"서울시 강남구 도산대로49길 13",
    Call : "02-543-5922",
    Access : "N",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0369605,	
    Latitude: 37.52374174
    },

    {Title: "파리크라샹",
    Location :"서울시 용산구 독서당로  78",
    Call : "번호없음",
    Access : "Y",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0092795,	
    Latitude: 37.53395497
    },

    {Title: "최고집칼국수",
    Location :"서울시 도봉구 덕릉로 268",
    Call : "02-995-5333",
    Access : "Y",
    Parking : "N",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0408057,	
    Latitude: 37.64101401
    },
 
    {Title: "양지촌",
    Location :"서울시 중랑구 망우로 184",
    Call : "번호없음",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0732682,	
    Latitude: 37.59285666
    },
  
   {Title: "장L카페레스토랑",
    Location :"서울시 종로구 대학로10길 15-11",
    Call : "번호없음",
    Access : "Y",
    Parking : "N",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0027751,	
    Latitude: 37.58226711
    },

    {Title: "세종대왕숯불갈비",
    Location :"서울시 동작구 여의대방로 136",
    Call : "02-823-2517",
    Access : "Y",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.9206888,	
    Latitude: 37.4992121
    },    

    {Title: "상하이짬뽕건물",
    Location :"서울시 서대문구 명물길  76-5",
    Call : "번호없음",
    Access : "Y",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.9405646,	
    Latitude: 37.55879598
    },   

    {Title: "돈촌삼겹살",
    Location :"서울시 중랑구 사가정로51길 21",
    Call : "번호없음",
    Access : "N",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0878429,	
    Latitude: 37.58184325
    }, 

    {Title: "상도갈비",
    Location :"서울시 동작구 매봉로 13",
    Call : "02-816-4085",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.9501624,	
    Latitude: 37.50589004
    }, 

    {Title: "가족천하",
    Location :"서울시 영등포구 가마산로 330",
    Call : "02-847-4500",
    Access : "Y",
    Parking : "N",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.8963312,	
    Latitude: 37.4988017
    }, 

    {Title: "송가네(일반음식점)",
    Location :"서울시 마포구 동교로  247",
    Call : "02-3141-6557",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.9241587,	
    Latitude: 37.56202162
    }, 

    {Title: "카페프렌즈",
    Location :"서울시 서초구 반포대로16길 30",
    Call : "02-586-4000",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0123757,	
    Latitude: 37.48634913
    },

    {Title: "넘버원-호프&amp 요리주점",
    Location :"서울시 서대문구 연세로5가길 8-3",
    Call : "02-3142-7220",
    Access : "Y",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.9361476,	
    Latitude: 37.55748037
    },

    {Title: "대원정",
    Location :"서울시 서초구 동산로 6",
    Call : "번호없음",
    Access : "Y",
    Parking : "Y",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.040682,	
    Latitude: 37.46896712
    },

    {Title: "봉산집",
    Location :"서울시 강남구 삼성로 564",
    Call : "02-552-5898",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0543202,	
    Latitude: 37.5119354
    },

    {Title: "가야옥",
    Location :"서울시 도봉구 도당로   2",
    Call : "02-900-2219",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0352857,	
    Latitude: 37.65841189
    },

    {Title: "하누소",
    Location :"서울시 도봉구 노해로 327",
    Call : "02-900-9900",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"Y",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0448073,	
    Latitude: 37.65150756
    },
 
    {Title: "희래등",
    Location :"서울시 동작구 등용로 123",
    Call : "번호없음",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.9318011,
    Latitude: 	37.51238979
    },
 
    {Title: "근린생활시설(대게나라)",
    Location :"서울시 노원구 상계로 122",
    Call : "02-932-9981",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.0684659,	
    Latitude: 37.6578202
    },
]


const Tripdata=[
    {Title: "디아갤러리",
    Location :"계동길 121-2",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/q8v848nhok40mrjrzl3r75eqb4ae3oct/1",
    Call : "02-742-6030",
    Access : "N",
    Parking : "N",
    Height : "N",
    Lift :"Y",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 128.0810376,	
    Latitude: 35.19580681
    },

    {Title: "aA갤러리_aA디자인뮤지엄",
    Location :"와우산로17길 19-18",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/kxizhon4ae0vcgmhiahfr32spjzs33a3/1",
    Call : "02-3143-7312",
    Access : "N",
    Parking : "N",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "Y",	
    Wheelchair:	"Y",
    Longitude: 126.9213295,	
    Latitude: 37.54956362
    },

    {Title: "서울대공원",
    Location :"경기도 과천시 대공원광장로 102",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/7icnm2vve939j3lmf3v1di5vcdn0ax4x/1",
    Call : "02-500-7335",
    Access : "N",
    Parking : "N",
    Height : "N",
    Lift :"N",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "Y",	
    Wheelchair:	"Y",
    Longitude: 127.0140987,	
    Latitude: 37.43643075
    },

    {Title: "서울대학교 미술관MOA",
    Location :"관악로 1",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/9ifmzu0qgiqp0i99vy63sni68d77qpov/1",
    Call : "02-880-9504",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"Y",
    Toliet : "Y",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"Y",
    Longitude: 0,	
    Latitude: 0
    },
 
    {Title: "경인미술관",
    Location :"인사동10길 11-4",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/f57gjaup98vfe0a28qkviwcpb8jhbyhv/1",
    Call : "02-733-4448",
    Access : "N",
    Parking : "N",
    Height : "N",
    Lift :"Y",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "Y",	
    Wheelchair:	"Y",
    Longitude: 126.9866182,		
    Latitude: 37.57320396
    },

    {Title: "암사동선사주거지",
    Location :"올림픽로 875 (암사동)",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/3u1i7211usn0y8bpjfb9kymb4e6q71yb/1",
    Call : "02-3425-6520",
    Access : "N",
    Parking : "N",
    Height : "N",
    Lift :"Y",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 127.1303274,
    Latitude: 37.55949523	
    },

    {Title: "창경궁",
    Location :"창경궁로 185",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/dw53fpibqnr2nrk448wdq49hazcitaqj/1",
    Call : "02-762-4868",
    Access : "N",
    Parking : "N",
    Height : "N",
    Lift :"Y",
    Toliet : "N",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "N",	
    Wheelchair:	"N",
    Longitude: 126.9951424,
    Latitude: 37.58140439	
    },
 
    {Title: "푸른수목원",
    Location :"연동로 240",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/0pidlpvz6gdetgi87y4vhbg5n5ekszc4/1",
    Call : "02-2686-3200",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "Y",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "N",
    BlindConve: "N",
    DeafConve: "N",
    Guidance: "Y",	
    Wheelchair:	"Y",
    Longitude: 126.8236683, 	
    Latitude: 37.48196629	
    }

]
