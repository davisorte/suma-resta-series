import Calcula from "../calcula/Calcula";

function Resultado({value}){
    
    return(
        <h4 data-testid="resN"  className="">
            El resultado: serie ({value})=<Calcula numero={value}></Calcula>
        </h4>
    )
}
export default Resultado;