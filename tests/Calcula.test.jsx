import { getByTestId, render } from "@testing-library/react";
import Resultado from "../src/resultado/Resultado";
import { serieN } from "./constantes";
describe("Calculadon las operaciones de calcula", () => {
  
  test("calcular serie (n) = 1 debe ser 2", () => {
    const {getByTestId} =  render(<Resultado value={serieN[0].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[0].resultado.toString());
  });

  test("calcular serie (n) = 3  debe ser 9", () => {
    const {getByTestId} =  render(<Resultado value={serieN[1].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[1].resultado.toString());
  });

  test("calcular serie (n) = 5  debe ser 21", () => {
    const {getByTestId} =  render(<Resultado value={serieN[2].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[2].resultado.toString());
  });


});
