import Head from "next/head";
import Sidebar from "./Sidebar";


const Layout = ({ children, title }) => {
  return (

    <div className="h-auto flex flex-row justify-start ">
      <Head>
        <title>{title}</title>
      </Head>
      <Sidebar />
      <div className="bg-primary flex-1 p-4">
        <div className="mb-4 text-white">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>

  );
};



export default Layout;
