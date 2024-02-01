import Cards from "../Components/card";
import img from "../assets/background.jpg";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    minHeight: '100vh',  
   };

  return (
    <>
      <div style={backgroundStyle}>
        <div style={{ display: "flex", justifyContent: "center"}}>
        {/* <h1 style={{ color: "black"}}>MY TODO LIST</h1> */}
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Home;
