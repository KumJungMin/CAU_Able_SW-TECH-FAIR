// iframe으로 페이지 불러오기

import React, {useState, useEffect} from 'react';


const WebCourse=()=>{
    return(
        <div>
            <iframe 
            width="600"
            height="300"
            name="ask"
            frameborder="1"
            scrolling="yes"
            src="http://wis.seoul.go.kr/handicap/tour/route.do">무장애코스</iframe>

        </div>
    )
}

export default WebCourse