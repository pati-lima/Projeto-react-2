import Title from "./Title";
import Subtitle from "./Subtitle";
import Image from "./Image";
import AlunaImg from "../assets/react2.jpeg";

function Bio() {
  return (
    <div className="bio">
       <div className="img">
      <Image image={AlunaImg} />
      </div>
      <div className="descricao">
      <Title title="Olá, eu sou Daiane dos Anjos" />
      <Subtitle subtitle="Estudante de programação na Reprograma" />
      </div>      
    </div>
  );
}
export default Bio;
