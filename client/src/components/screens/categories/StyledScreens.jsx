import styled from "styled-components";

export const SideBarToTop = styled.div`
  display: none;
  @media only screen and (max-width: 800px) {
    background: black;
    color: white;
    position: absolute;
    top: 50%;
    position: fixed;
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1024px) {
    background: black;
    color: white;
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 30px;
    display: flex;
  }
`;

export const HomeScreenBody = styled.div`
  height: 100%;
`;

export const HomeScreenTitle = styled.h2`
  font-size: 1.5rem;
  color: #171717;
  margin-bottom: 1rem;
  margin-left: 8px;
`;

export const HomeScreenProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
