import cl from "./Layout.module.scss"

const Layout = ({children}) => {
  return (
    <div className={cl.Layout}>
      <div>
       {children}
      </div>
    </div>
  );
};

export default Layout;
