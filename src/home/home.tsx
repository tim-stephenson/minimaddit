import Nav from "react-bootstrap/Nav";


const options = ["Reddit", "Twitter"];


export default function Home({}: {}) {
  return (
    <Nav variant="pills" className="justify-content-center">
      {options.map((elem) => (
        <Nav.Item>
          <Nav.Link eventKey={elem}>{elem}</Nav.Link>
        </Nav.Item>
      ))}
      <Nav.Item>
        <Nav.Link eventKey="a">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="b">Option 2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
