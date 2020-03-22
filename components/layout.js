import Nav from "./nav";
const Layout = props => (
  <React.Fragment>
    <Nav />
    <div className="contentWrapper">
      <main>{props.children}</main>
    </div>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      .contentWrapper {
          max-width: 48rem;
          margin: 0 auto;
      }
    `}</style>
  </React.Fragment>
);

export default Layout;
