import { VscGithub } from "react-icons/vsc"

function Header(props) {
  return (
    <h1 className="header"><VscGithub/> {props.content}</h1>
  )
}
export default Header;
