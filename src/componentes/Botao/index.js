import "./Botao.css";

const Botao = (props) => {
    return (
        <button className="botao">
            {props.children}  {/*Tudo que estiver dentro das duas tags <button> será o texto*/}
        </button>
    )
}

export default Botao;