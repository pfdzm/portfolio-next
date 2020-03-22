import Link from "next/link";

const Nav = () => (
  <React.Fragment>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      nav {
        background-color: rebeccapurple;
        color: white;
        font-weight: 900;
        padding: 0.8rem 0;
        font-size: xx-large;
      }

      nav ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        justify-content: space-between;
        margin: 0 0 0 1rem;
        padding: 0;
      }

      @media (min-width: 768px) {
        nav ul {
          flex-direction: row;
          max-width: 48rem;
          margin: 0 auto;
        }
      }
      nav li {
        position: relative;
      }
      li a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: inherit;
        position: relative;
        transition: all 0.2s ease-in-out;
      }
      nav li a::before {
        width: 0%;
        transition: all 0.2s ease-in-out;
        bottom: 0;
        z-index: 1;
        height: 2px;
        background-color: palevioletred;
        content: "";
        position: absolute;
      }
      nav li a:hover::before {
        width: 100%;

        // animation: slidein 1s linear forwards;
      }

      @keyframes slidein {
        from {
          transform: translateX(100%);
        }

        to {
          transform: translateX(0%);
        }
      }
      li a:hover {
        color: palevioletred;
      }

      li a:focus,
      li a:active {
        color: palevioletred;
      }
    `}</style>
  </React.Fragment>
);

export default Nav;
