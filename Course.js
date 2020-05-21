import React from 'react';
import { Button } from 'semantic-ui-react';
import Header from '../components/Header'

const Course=()=>{
    return(
        <div>
            {/* <Header activeItem="home"/> */}
           <iframe src="http://wis.seoul.go.kr/handicap/tour/route_view.do?returnURL=%2Fhandicap%2Ftour%2Froute.do%3FbbsType%3D2&seqNo=100" scrolling="no" width="500"  height="1200"> 
    iframe를 지원하지 않는 브라우저인 경우 대체정보를 제공
        </iframe>
        </div>


        
    )
}

export default Course;