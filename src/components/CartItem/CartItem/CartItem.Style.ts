import styled from "styled-components";

export const Wrapper = styled.div`
  display:flex;
  justify-content:space_between;
  font-family:Arial,helvelltica,sans-serif;
  border-bottom:1px  solid  lightblue;
  padding-bottom:20px

  div{
    flex:1;
  }

  .info{
    display:flex;
    justify-content:space-between;
  }

  img {
    max-width:80px;
    object-fit:cover;
    margin-left:40px;

  }

  .buttons{
    display:flex;
    justify-content:space-between;
  }

`