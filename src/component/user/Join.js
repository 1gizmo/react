import React, { useEffect, useState } from 'react';
import {Button, Container, Grid,
  TextField, Typography, Link} from "@mui/material";

const Join = () => {

  // 상태변수로 회원가입 입력값 관리
  const [userValue, setUserValue] = useState({
    userName: '',
    password: '',
    email: ''
  });

  // 검증 메세지에 대한 상태변수 관리
  const [message, setMessage] = useState({
    userName: '',
    password: '',
    passwordCheck: '',
    email: ''
  });



  // 이름 입력창 체인지 이벤트 핸들러
  const nameHandler = e => {
    
                        // 정규표현식
     const nameRegex = /^[가-힣]{2,5}$/;

     //입력값 검증
     let msg; // 검증 메세지를 저장할 변수

     // 입력한 값을 상태변수에 저장
     // console.log(e.target.value);
     const inputVal = e.target.value;
    
     if(!inputVal){
        msg = '유저 이름은 필수입니다';
     } else if (!nameRegex.test(inputVal)){
        msg = '2~5글자 사이에 한글로 작성하세요';
     } else {
        msg = '사용 가능한 이름입니다';
     }

    setMessage({
        ...message,
        userName: msg
    })


    setUserValue({
      ...userValue,
      userName: inputVal
    });

  };

  // 이메일 입력창 체인지 이벤트 핸들러
  const emailHandler = e => {

    const inputVal = e.target.value;

    setUserValue({
      ...userValue,
      email: inputVal
    });

  };

  // 패스워드 입력창 체인지 이벤트 핸들러
  const passwordHandler = e => {

    const inputVal = e.target.value;

    setUserValue({
      ...userValue,
      password: inputVal
    });

  };



  const joinButtonClickHandler = e => {

    e.preventDefault();

    console.log(userValue);
  };


  // 렌더링이 끝난 이후 실행되는 함수
  useEffect(() => {

  }, []);

  return (
    <Container component="main" maxWidth="xs" style={{ margin: "200px auto" }}>
        <form noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        계정 생성
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="fname"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="유저 이름"
                        autoFocus
                        onChange={nameHandler}
                    />
                    <span>{message.userName}</span>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="이메일 주소"
                        name="email"
                        autoComplete="email"
                        onChange={emailHandler}
                    />
                    <span></span>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="패스워드"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={passwordHandler}
                    />
                    <span></span>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password-check"
                        label="패스워드 확인"
                        type="password"
                        id="password-check"
                        autoComplete="check-password"
                
                    />
                    <span id="check-text"></span>
                </Grid>

                <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      fullWidth 
                      variant="contained" 
                      style={{background: '#38d9a9'}}
                      onClick={joinButtonClickHandler}
                    >
                        계정 생성
                    </Button>
                </Grid>
            </Grid>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="/login" variant="body2">
                        이미 계정이 있습니까? 로그인 하세요.
                    </Link>
                </Grid>
            </Grid>
        </form>
    </Container>
  );
}

export default Join