
import product from './product';
import Name from './Name';
import Image from './Image';
import Price from './Price';
import Description from './Description';
import Card from 'react-bootstrap/Card';

const firstName = "Yasmine";

function App() {
  return (
    <div className="App" style={{backgroundColor: 'gold', minHeight: '100vh',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',fontSize: 'calc(10px + 2vmin)',color: 'white'}}>
      <header className="App-header">
      <Card style={{ width: '18rem' }}>
     <Card.Img variant="top"/> 
     <Image image={product.image}/> 
      <Card.Body>
        <Card.Title>  
          <Name name={product.name}/>  
        </Card.Title>
        <Card.Text>
          <Description description={product.description}/>
        </Card.Text>
        <Card.Text>
          <Price price={product.price}/>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <h3 style={{ textAlign: "center" }}>
        Hello, {firstName ? firstName : "there"}!
      </h3>
      {console.log(product)}
      </header>
    </div>
  );
}

export default App;