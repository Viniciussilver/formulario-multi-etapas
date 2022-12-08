import styled from 'styled-components'

export const Container = styled.div`
  width: 320px;
  padding: 25px 15px 0 0;
  border-right: 1px solid #fff;
  display: flex;
  flex-direction: column;
  gap: 35px;
`

export const ContainerItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-end;

  .box-description {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    color: #fff;

    p {
      color: #b8b8d4;
    }
  }
`

export const BoxImg = styled.div<{ isActive: boolean }>`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) => (isActive ? '#27cc8c' : '#b8b8d4')};
  padding: 16px;
  border-radius: 50%;
`

export const Point = styled.div<{ isActive: boolean }>`
  width: 18px;
  height: 18px;
  border: 3px solid #494a7c;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: -25px;

  background-color: ${({ isActive }) => (isActive ? '#25CD89' : '#02044A')};
`
