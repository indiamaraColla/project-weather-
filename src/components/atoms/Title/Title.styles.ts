import styled from 'styled-components'

export interface TitleStyleParams {
  capitais?: boolean
}

export const Text = styled.p<TitleStyleParams>`
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin: 0;
  margin: ${({ capitais }) => (capitais ? '0' : '18px')};
  font-size: ${({ capitais }) => (capitais ? '50px' : '67px')};

  @media (max-width: 768px) {
    text-align: start;
    padding: 24px 16px;
    font-size: 30px;
    font-size: ${({ capitais }) => (capitais ? '30px' : '50px')};
  }
`
