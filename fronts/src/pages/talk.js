import React,{useState, useCallback, useEffect} from 'react';
import api from '../api';
import { Grid, Image, Segment, Icon, Button, Input, Progress, Rating} from 'semantic-ui-react'

//1. api에 정보 넘기기 : api파일 import하기

const Talk=()=>{
  const [title, setTitle] = useState('')    
  const [content, setContent] = useState('')
  const [data, setData] = useState([]);
//  함수형 컴포넌트는 함수의 본문자체가 render 함수이기 때문에 
//이벤트 핸들러를 어디서 만들건간에 계속해서 새로운 함수를 만들게 됩니다. 
//React에서는 이 문제를 해결하기 위해서 또 다른 hook, useCallback을 제공합니다.
// 이렇게하면 렌더시마다 새로운 함수를 생성하지 않고 항상 같은 함수 인스턴스를 반환하게 됩니다. 
//결론적으로 render 가 실행될때마다 handleChangeEmail에 할당되는 “값”이 항상 같은 거죠.
// 때문에 이제 Input은 다시 렌더링 되지 않습니다.

  const TitlehandlingChange=useCallback(({target : {value}})=>{
    setTitle(value)
  }, []);
  const ContenthandlingChange=useCallback(({target : {value}})=>{
    setContent(value)
  }, []);

//제출 후 로그 찍기
// useCallback 에 넘기는 첫번째 인자는 클로저입니다. 
// 이 함수가 생성되던 당시의 상태를 기억한다고 보면 되겠죠. 
// 따라서 이 상태라면 항상 가장 초기 버전의 email, password를 출력하는 함수가 되는 겁니다. 
// 결론적으로 이 상태의 callback 함수는 항상 string의 email, password만 갖고있겠죠.
// 두번째 인자의 다른 이름은 “Dependency List” 인데요, 
// 여기에 함수 내에서 참조하고 있는, 즉 의존하고 있는 값을 넣습니다. 
//가령 handleSubmit에서는 email과 password를 외부에 의존하고 있죠
// const handleSubmit = useCallback(() => {
//   console.log(title, content)
// }, [title, content])

//제출시 api로 정보를 넘긴다.
// const handlingSubmit=()=>{
//   let result = api.createPost({title : title, content : content})
//   //api에 있던 createpost함수 (백엔드의 모델 필드순서처럼 넘기기)
//   console.log('완료됨', result)
// }

//비동기적으로 하기위해 async를 한다(아직 결과가 안나와도 일단을 값을 가져온다.)

//값을 입력하고(title, content) -> 제출버튼 누르면 -> api에 저장되게 하는 함수
// const handlingSubmit = useCallback(async(event) => {
//   //event.preventDefault()
//   let result = api.createPost({title : title, content : content})
//     console.log( result, "가동됨??")
// //    백엔드 서버 run 해야 가능
//  }, [title, content])

// useEffect(()=>{
//   api.getAllPosts()
//   .then((response)=>{setData(response.data)});
// },[])


console.log(data)

  return(
  // <div className="App">
      <div className='postingSection'>
        <Grid columns={2}>
          <Grid.Column><Input></Input>
          </Grid.Column>
          <Grid.Column><Rating icon='star' defaultRating={3} maxRating={5} />
          </Grid.Column>

        </Grid>
        <br />

        
        <Button fluid color="blue" inverted>별점, 댓글 작성하기</Button>
      
      
    </div>
  )
}


export default Talk;
