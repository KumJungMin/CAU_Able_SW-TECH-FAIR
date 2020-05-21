//axios를 사용하여 http 통신을 하는 코드 작성
import axios from 'axios'

axios.defaults.baseURL = "http://127.0.0.1:8000/mystorage/"
//내 서버 주소를 넣어 기본적으로 통신하는 주소
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";



export default{
// 여러가지 객체, 함수를 작성
    // getAllPosts () {  //글 불러오기
    //     return axios.get('/posts')  //api에서 지정한 주소
    // }
    // ,
    // createPost(data){ //글 작성하기
    //     return axios.post('/posts/', data)
    // }   
    getTouristspot (){
        return axios.get('touristspot').then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        }).finally(function () {
        
       });
    }
    
}

