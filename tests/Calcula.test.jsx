import { render } from "@testing-library/react";
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

  test("calcular serie (n) = 7  debe ser 32", () => {
    const {getByTestId} =  render(<Resultado value={serieN[3].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[3].resultado.toString());
  });

  test("calcular serie (n) = 9  debe ser 34", () => {
    const {getByTestId} =  render(<Resultado value={serieN[4].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[4].resultado.toString());
  });

  test("calcular serie (n) = 11  debe ser 8", () => {
    const {getByTestId} =  render(<Resultado value={serieN[5].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[5].resultado.toString());
  });

  test("calcular serie (n) = 13  debe ser -101", () => {
    const {getByTestId} =  render(<Resultado value={serieN[6].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[6].resultado.toString());
  });

  test("calcular serie (n) = 15  debe ser -443", () => {
    const {getByTestId} =  render(<Resultado value={serieN[7].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[7].resultado.toString());
  });

  test("calcular serie (n) = 50  debe ser -12586267521", () => {
    const {getByTestId} =  render(<Resultado value={serieN[8].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[8].resultado.toString());
  });
  test("calcular serie (n) = 60  debe ser -1548008753809", () => {
    const {getByTestId} =  render(<Resultado value={serieN[9].numero}/>)
    expect(getByTestId('resN').innerHTML).toContain(serieN[9].resultado.toString());
  });
});
