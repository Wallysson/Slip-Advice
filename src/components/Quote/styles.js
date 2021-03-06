import styled from 'styled-components'

export const Circle = styled.main`
  background: #fff;
  border-radius: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35vw;

  @media (max-width: 900px) {
    width: 80vw;
    height: 60vh;
  }

  @media (max-width: 450px) {
    width: 90vw;
    height: 50vh;
  }
`

export const InnerCircle = styled.div`
  width: 80%;
  text-align: center;
  padding: 1rem;

  h1 {
    font-size: 2rem;
    line-height: 3rem;

    @media (max-width: 450px) {
      font-size: 1.25rem;
      padding: 0;
      line-height: 2rem;
    }
  }
`
