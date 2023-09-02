import styled from "styled-components";
import Image from "next/image";
import DummyTest from "@/assets/images/DummyTest.svg";
import { GenericContainer } from "../GenericLayout";

const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
`;

const LandingView = () => {
  return (
    <GenericContainer>
      <ImageContainer>
        <Image src={DummyTest} alt="Test" fill />
      </ImageContainer>
    </GenericContainer>
  );
};

export default LandingView;
