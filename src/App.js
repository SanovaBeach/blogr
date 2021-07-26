import { Details, Header, MoreDetails, Footer } from "./components";
import { detailsOne, detailsTwo } from "./data/detailsData";

function App() {
  return (
    <>
      <Header />
      <Details {...detailsOne} />
      <MoreDetails />
      <Details {...detailsTwo} />
      <Footer />
    </>
  );
}

export default App;
