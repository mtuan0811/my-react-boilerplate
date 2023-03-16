import { GlobalStyle } from "../../styles/global-style";
import { useOutlet } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';

export const NotAuthLayout = () => {
  const outlet = useOutlet();

  return (
    <div className="App">
      <NotificationContainer/>
      {outlet}
      <GlobalStyle />
    </div>
  );
};
