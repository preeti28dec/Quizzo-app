import "../../styles/globals.css";
import ContextData from "../context/context";
export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Next-13</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <ContextData>
          {children}
        </ContextData>
      </body>
    </html>
  );
}
