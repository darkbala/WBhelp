import Nav from "../../components/Nav/Nav";
import cl from "./Layout.module.scss"

const Layout = ({children}) => {
  return (
    <div className={cl.Layout}>
      <Nav/>
      <div>
       {children}
      </div>
    </div>
  );
};

export default Layout;
