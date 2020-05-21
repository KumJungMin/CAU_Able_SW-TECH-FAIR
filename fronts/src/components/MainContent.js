import React, {useState, useEffect} from 'react';
import { Grid, Image, Segment, Icon, Button} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Detail from '../pages/Detail'
import api from '../api'


const MainContent=(props)=>{
    // const [data, setData] = useState([]);
    // useEffect(()=>{api.getTouristspot().then((response)=> setData(response))
    // console.log(data.title)
    // }, [])

    //api.getAllPost()
   // .then((response)=>{setData(response.data)}, [])

    return(
        <div>
            <Router>
        {   Tripdata.map((data)=> 
                    <Grid columns='equal'>
                        <Grid.Row/>
                        <Grid.Column >
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
                                {data.CustomRoom === "Y" ? <Icon color='blue' circular name='bed' size="tiny"/> : <Icon circular disabled name='bed'size="tiny"/>}
                                {data.Seat === "Y" ? <Icon color='blue' circular name='map outline' rotated='clockwise' size="tiny"/> : <Icon circular rotated='clockwise' disabled name='map outline'size="tiny"/>}
                                {data.BlindConve === "Y" ? <Icon color='blue' circular name='blind' size="tiny"/> : <Icon circular disabled name='blind'size="tiny"/>}
                                {data.DeafConve === "Y" ? <Icon color='blue' circular name='deaf' size="tiny"/> : <Icon circular disabled name='deaf'size="tiny"/>}
                                {data.Guidance === "Y" ? <Icon color='blue' circular name='help' size="tiny"/> : <Icon circular disabled name='help' size="tiny"/>}
                                {data.Wheelchair === "Y" ? <Icon color='blue' circular name='wheelchair' size="tiny"/> : <Icon circular disabled name='wheelchair'size="tiny"/>}
                                {/* <Button color="blue" inverted size="tiny" fluid  >상세보기</Button> */}
                                
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

                                
                            </Segment>  
                        </Grid.Column>
                    </Grid>
                    )
                }
                </Router>
                </div>
            )
        }

export default MainContent


const Tripdata=[
    {Title: "디아갤러리",
    Location :"계동길 121-2",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/q8v848nhok40mrjrzl3r75eqb4ae3oct/1",
    Call : "02-742-6030",
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
    Guidance: "N",	
    Wheelchair:	"Y",
    Longitude: 126.9213295,	
    Latitude: 37.54956362
    },

    {Title: "서울대공원",
    Location :"경기도 과천시 대공원광장로 102",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/7icnm2vve939j3lmf3v1di5vcdn0ax4x/1",
    Call : "02-500-7335",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"Y",
    Toliet : "Y",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "Y",
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
    Wheelchair:	"Y",
    Longitude: 126.9866182,		
    Latitude: 37.57320396
    },

    {Title: "암사동선사주거지",
    Location :"올림픽로 875 (암사동)",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/3u1i7211usn0y8bpjfb9kymb4e6q71yb/1",
    Call : "02-3425-6520",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "Y",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "Y",
    BlindConve: "Y",
    DeafConve: "N",
    Guidance: "Y",	
    Wheelchair:	"Y",
    Longitude: 127.1303274,
    Latitude: 37.55949523	
    },

    {Title: "창경궁",
    Location :"창경궁로 185",
    Image : "http://wis.seoul.go.kr/rest/file/thumbnail/dw53fpibqnr2nrk448wdq49hazcitaqj/1",
    Call : "02-762-4868",
    Access : "Y",
    Parking : "Y",
    Height : "Y",
    Lift :"N",
    Toliet : "Y",
    CustomRoom : "N",
    Seat : "N",
    Ticket :  "Y",
    BlindConve: "Y",
    DeafConve: "N",
    Guidance: "Y",	
    Wheelchair:	"Y",
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





    // 숙명여대 박물관	청파로47길 100 숙명여자대학교 내		02-710-9134	Y	Y	Y	Y	Y	N	N	N	N	N	N	Y	126.9636696	37.54628649
    // 헬로우뮤지움	금호로 72		02-3217-4222	N	N	N	N	N	N	N	N	N	N	N	N	128.8695145	35.93033168
    // 독립공원	통일로251	http://wis.seoul.go.kr/rest/file/thumbnail/pkn8ecm97bnvafpaez9n5l4zchyid05g/1	02-364-4686	Y	Y	Y	Y	Y	N	N	Y	N	N	Y	Y	126.9595412	37.57244171
    // 월드컵공원	월드컵로 243-60	http://wis.seoul.go.kr/rest/file/thumbnail/2r7g97rccyglzq7pxg4o5bahirlry8dg/1	02-300-5500	Y	Y	Y	Y	Y	N	N	Y	N	N	N	N	126.898437	37.56352588
    // 어린이대공원	능동로 216	http://wis.seoul.go.kr/rest/file/thumbnail/a4jsf7ykzm90ou67padrn32npzu3cjta/1	02-450-9311	Y	Y	Y	Y	Y	N	N	Y	Y	N	Y	Y	127.0862609	37.54945787
    // 창덕궁	율곡로 99	http://wis.seoul.go.kr/rest/file/thumbnail/s57ngzx91luyvs4onv5mjmav7azpzasq/1	02-762-8261	Y	Y	N	N	Y	N	N	Y	Y	Y	Y	Y	126.9900993	37.57812886
    // 겸재정선미술관	양천로47길 36	http://wis.seoul.go.kr/rest/file/thumbnail/3tqu8unfvd2szfhgwr8lekkjt87g5s41/1	02-2659-2206	Y	Y	Y	Y	N	N	N	Y	N	N	Y	Y	126.8384116	37.57222267
    // PKM 갤러리	삼청로7길 40	http://wis.seoul.go.kr/rest/file/thumbnail/9hbndn4wp7us34qqov94ffbzfivit3la/1	02-734-9467	N	N	N	N	N	N	N	N	N	N	N	N	126.9800818	37.58409028
    // 몽촌역사관	올림픽로 424		02-2152-5900	Y	Y	Y	N	Y	N	N	N	N	N	N	Y	127.115509	37.51889593
    // 국립중앙박물관	서빙고로 137	http://wis.seoul.go.kr/rest/file/thumbnail/3wcotlitr9n1bunycg52ad01vxadu4mj/1	02-2077-9000	Y	Y	Y	Y	Y	N	N	N	N	N	N	Y	126.9803068	37.52388803
    // 백범김구기념관	임정로 26		02-799-3400	Y	Y	Y	Y	Y	N	N	N	N	N	N	Y	126.9592536	37.54427779
    // 몽촌토성	올림픽로 424	http://wis.seoul.go.kr/rest/file/thumbnail/eh41pitgubxj0uzapnpd9909q3qha24x/1	02-410-1114	Y	Y	N	N	N	N	N	Y	Y	N	Y	Y	127.115509	37.51889593
    // 영등포아트홀	국회대로 596 영등포구민회관	http://wis.seoul.go.kr/rest/file/thumbnail/3ynyixlkfqa3p5h5h1l8kbok00ojflrg/1	02-2670-4020	Y	Y	Y	Y	Y	N	N	Y	N	N	Y	N	126.9001092	37.52600915