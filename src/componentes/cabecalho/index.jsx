import { styled } from "styled-components";


const HeaderEstiliado = styled.header`
  display: flex;
  justify-content: space-between;
  img {
    max-width: 100%;
    max-height: 300px;
  }
`;

export default function Cabecalho  () {
    return(
        <HeaderEstiliado>
<img src="./imagens/Section.svg" />
        </HeaderEstiliado>
    )

}
