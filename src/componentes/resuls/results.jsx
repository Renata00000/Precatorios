/* eslint-disable react/prop-types */
export default function Result({ resultados, inputValues }) {
  const honorarios = resultados.honorarios || {};
  const imposto = resultados.imposto || {};
  const proposta = resultados.proposta || {};

  return (
    <div>
      <div>
        <h3>Detalhamento</h3>
        <table>
          <tbody>
            <tr>
              <td>Valor Atualizado:</td>
              <td>{inputValues.valorAtualizado || "Não disponível"}</td>
              <td>Data Atualizada:</td>
              <td>{inputValues.dataAtualizacao || "Não disponível"}</td>
            </tr>
            <tr>
              <td>{honorarios.nome}:</td>
              <td>{honorarios.valor}%</td>
              <td>Valor Cedível:</td>
              <td>{honorarios.valorCedido?.toFixed(2) || "Não disponível"}</td>
            </tr>
            <tr>
              <td>{imposto.nome}:</td>
              <td>{imposto.valor}%</td>
              <td>Valor Líquido:</td>
              <td>{imposto.valorLiquido?.toFixed(2) || "Não disponível"}</td>
            </tr>
            <tr>
              <td>{proposta.nome}:</td>
              <td>{proposta.valor}%</td>
              <td>Valor a Receber:</td>
              <td>
                {(proposta.valor * (inputValues.valorAtualizado / 100)).toFixed(
                  2
                ) || "Não disponível"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}





