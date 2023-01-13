import "../../styles/globals.css";
import ContextData from "../context/context";
export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Next-13</title>
      </head>
      <body>
        <ContextData>
          {children}
        </ContextData>
      </body>
    </html>
  );
}
