import React from 'react';
import styled from 'styled-components';
import facebookIcon from "./facbook.png";
import googleLogo from "./google-logo.svg";
import appleLogo from "./group.png";
import waveImage from "./image.svg";
import signalIcon from "./light-2.svg";
import wifiIcon from "./light.svg";
import batteryIcon from "./rectangle-23.svg";
import loginIllustration from "./undraw-login-re-4vu2-1.svg";

const Container = styled.div`
  padding: 16px;
  max-width: 390px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
`;

const Time = styled.span`
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
`;

const StatusIcons = styled.div`
  width: 60px;
  height: 20px;
  /* Status icons would typically come from your icon library */
`;

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: rgba(0, 0, 0, 1);
  margin: 0;
`;

const Input = styled.input`
  height: 50px;
  width: 100%;
  padding: 0 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: rgba(0, 122, 255, 1);
  }
`;

const ForgotPassword = styled.a`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  text-align: right;
  font-size: 14px;
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  height: 50px;
  width: 100%;
  background-color: rgba(0, 122, 255, 1);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const SocialLoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const OrText = styled.p`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const LoginScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container>
      <Header>
        <Time>9:41</Time>
        <StatusIcons aria-hidden="true" />
      </Header>

      <IllustrationContainer>
        <img 
          src={loginIllustration} 
          alt="Person standing at a door illustration"
          width={150}
          height={150}
        />
      </IllustrationContainer>

      <LoginForm onSubmit={handleSubmit}>
        <Title>Login Details</Title>
        
        <Input
          type="text"
          placeholder="Username, email & phone number"
          aria-label="Username, email or phone number"
          required
        />
        
        <Input
          type="password"
          placeholder="Password"
          aria-label="Password"
          required
        />
        
        <ForgotPassword href="#" onClick={(e) => e.preventDefault()}>
          Forgot Password?
        </ForgotPassword>
        
        <LoginButton type="submit">
          Login
        </LoginButton>
      </LoginForm>

      <SocialLoginSection>
        <OrText>Or Sign up With</OrText>
        <SocialIcons>
          <SocialButton aria-label="Sign in with Google">
            <img 
              src={googleLogo}
              alt=""
              width={24}
              height={24}
            />
          </SocialButton>
          <SocialButton aria-label="Sign in with Facebook">
            <img 
              src={facebookIcon}
              alt=""
              width={24}
              height={24}
            />
          </SocialButton>
          <SocialButton aria-label="Sign in with Apple">
            <img 
              src={appleLogo}
              alt=""
              width={24}
              height={24}
            />
          </SocialButton>
        </SocialIcons>
      </SocialLoginSection>
    </Container>
  );
};

export default LoginScreen;