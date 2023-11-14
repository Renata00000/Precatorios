/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ResetStyles from "./componentes/reseteStyles/index.jsx";
import Cabecalho from "./componentes/cabecalho";
import InputField from "./componentes/inputField./index.jsx";
import StyledButton from "./componentes/styleButton/index.jsx";
import Result from "./componentes/resuls/results.jsx";


const FundoGradiente = styled.div`
  background: #ffffff;
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const StyledDiv = styled.div`
  margin: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

export default function App() {
  const [valorAtualizado, setValorAtualizado] = useState(100000);
  const [dataAtualizacao, setDataAtualizacao] = useState(
    new Date("2023-08-17")
  );
  const [honorariosPorcentagem, setHonorariosPorcentagem] = useState(0);
  const [ImpostoPorcentagem, setImpostoPorcentagem] = useState(0);
  const [PropostaPorcentagem, setPropostaPorcentagem] = useState(0);
  const [valorLiquido, setValorLiquido] = useState(0);
  const [valorCedido, setValorCedido] = useState(40);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  useEffect(() => {
    const honorarios = (valorAtualizado * honorariosPorcentagem) / 100;
    const impostos = (valorAtualizado * ImpostoPorcentagem) / 100;
    const novoValorCedido = valorAtualizado - honorarios;
    const novoValorLiquido = novoValorCedido - impostos;

    setValorLiquido(novoValorLiquido);
    setValorCedido(novoValorCedido);
  }, [
    valorAtualizado,
    honorariosPorcentagem,
    ImpostoPorcentagem,
    PropostaPorcentagem,
  ]);

  return (
    <FundoGradiente>
      <ResetStyles />
      <AppContainer>
        <Cabecalho />
        <StyledDiv>
          <InputField
            label="Valor Atualizado"
            type="number"
            value={valorAtualizado}
            onChange={(e) => setValorAtualizado(e.target.value)}
          />
          <InputField
            label="Data da Atualização"
            type="text"
            value={dataAtualizacao.toISOString().split("T")[0]}
            onChange={(e) => setDataAtualizacao(new Date(e.target.value))}
            disabled
          />
          <InputContainer>
            <InputField
              label="Honorarios"
              type="number"
              value={honorariosPorcentagem}
              onChange={(e) => setHonorariosPorcentagem(e.target.value)}
            />
            <span>%</span>
            <InputField
              label="Valor Cedido"
              type="text"
              value={valorCedido.toFixed(2)}
              disabled
            />
          </InputContainer>
          <InputContainer>
            <InputField
              label="Impostos"
              type="number"
              value={ImpostoPorcentagem}
              onChange={(e) => setImpostoPorcentagem(e.target.value)}
            />
            <span>%</span>
            <InputField
              label="Valor liquido"
              type="text"
              value={valorLiquido.toFixed(2)}
              disabled
            />
          </InputContainer>
          <InputContainer>
            <InputField
              label="Proposta"
              type="number"
              value={PropostaPorcentagem}
              onChange={(e) => setPropostaPorcentagem(e.target.value)}
            />
            <span>%</span>
            <InputField
              label="A receber"
              type="text"
              value={(valorAtualizado * (PropostaPorcentagem / 100)).toFixed(2)}
              disabled
            />
          </InputContainer>
          <StyledButton onClick={() => setMostrarResultado(!mostrarResultado)}>
            Show Result
          </StyledButton>
          {mostrarResultado && (
            <Result
              resultados={{
                honorarios: {
                  nome: "Honorarios",
                  valor: honorariosPorcentagem,
                  valorCedido: valorCedido,
                },
                imposto: {
                  nome: "Imposto",
                  valor: ImpostoPorcentagem,
                  valorLiquido: valorLiquido,
                },

                proposta: {
                  nome: "Proposta",
                  valor: PropostaPorcentagem,
                },
              }}
              inputValues={{
                valorAtualizado,
                dataAtualizacao: dataAtualizacao.toISOString().split("T")[0],
              }}
            />
          )}
        </StyledDiv>
      </AppContainer>
    </FundoGradiente>
  );
}