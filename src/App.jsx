import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer";
import data from "./Data"

function App() {
  const cards = data.map((item) => {
    return <Card key={item.key} {...item} />;
  });
    return (
    <div>
      <Navbar />
      <sction className="card-list">{cards}</sction>
      <Footer />
    </div>
  )
}

export default App