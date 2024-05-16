import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
const App = () => {
  const style = {
    colors: {
      header: "#fff",
      body: "fff",
      footer: "#8A1C4A",
    },
    margins: {},
    responsive: "730px",
  };
  return (
    <ThemeProvider theme={style}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
