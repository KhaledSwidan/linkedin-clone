import styled from "styled-components";
import { signInAPI } from "../redux/actions/index";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.user && navigate("/home");
  }, [props.user]);
  return (
    <Container>
      <Nav>
        <a href="/index.html">
          Bohemian Coders
          <img src="../../public/images/logo-fancy.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to my professional comminity</h1>
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 10px;
  @media (max-width: 500px) {
    justify-content: center;
  }
  & > a {
    width: fit-content;
    text-decoration: none;
    color: #0a66c2;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70px;
    }
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Section = styled.section`
  background-image: url(../../public/images/login-hero.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  height: 72vh;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 100%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    text-align: center;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 22px;
      width: 100%;
      line-height: 2;
    }
  }
`;
const Form = styled.div`
  width: fit-content;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
    background-color: rgba(207, 207, 207, 0.75);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signInAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
