import { GlobalStyle } from "../../styles/global-style";
import { useOutlet } from "react-router-dom";

export const NotAuthLayout = () => {
  const outlet = useOutlet();

  return (
    <div className="App">
      {outlet}
      <GlobalStyle />
    </div>
  );
};
