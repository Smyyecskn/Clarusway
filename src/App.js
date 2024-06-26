import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";
import Container from "./components/styles/Container.styled";

const style = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8A1C4A",
  },
  margins: {},
  responsive: "724px",
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <Header />
      <Container>
        {data.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
