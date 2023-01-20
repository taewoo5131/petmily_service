class Member {
    
    constructor(){
        this.memberIdx = 0;
        this.memberId = '';
        this.memberName = '';
    }

    postJoin() {
        console.log('postJoin') 
    }

    postLogin(paramData) {
        console.log('postLogin');
        let call = ()=>{
            $.ajax({
                type : 'post',
                url : common.restApiUrl+'/member/login',
                headers: {'Content-Type': 'application/json'},
                dataType : 'json',
                data : JSON.stringify(paramData),
                success : function(result) { // 결과 성공 콜백함수
                    console.log(result);
                    if(result.code == '0000'){
                        document.cookie = 'memberIdx='+result.data.member.idx;
                        document.cookie = 'memberId='+result.data.member.id;
                        document.cookie = 'memberName='+result.data.member.name;
                    
                        location.href = location.href+'main.html';
                    } else {
                        alert('API Error');
                    }
                },
                error : function(request, status, error) { // 결과 에러 콜백함수
                    alert('존재하지 않는 회원정보입니다.');
                }
            })
        }

        call();

    }
}

let member = new Member();