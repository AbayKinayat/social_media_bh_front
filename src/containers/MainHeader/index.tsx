import { UserInfo } from "../../containers";
import "./MainHeader.scss";

const MainHeader: React.FC = () => {
  return (
    <header className="main-header">
      <UserInfo />
    </header>
  )
}

export default MainHeader