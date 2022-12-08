import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 50px;
  margin-left: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 45px;

  .info {
    display: flex;
    flex-direction: column;
    gap: 17px;
    border-bottom: 1px solid #fff;
    padding-bottom: 30px;
    color: #fff;

    p {
      color: #b8b8d4;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;

    input {
      width: 100%;
      padding: 15px 10px;
      border-radius: 10px;
      outline: none;
      border: 2px solid #27cc8c;
      background: transparent;
      color: #b8b8d4;
    }
  }

  button {
    width: 130px;
    height: 50px;
    border-radius: 25px;
    background-color: #27cc8c;
    border: none;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`
