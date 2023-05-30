import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import DaylightMap from "./DaylightMap";


const OPTIONS = ["Reddit", "Twitter"];

const DEFAULT_OPTION = OPTIONS[0];


export default function Home({}: {}) {

  const [tab,setTab] = useState<String>(DEFAULT_OPTION);
  return (
    <>
      <DaylightMap />
      <Nav
        variant="pills"
        className="justify-content-center"
        defaultActiveKey={DEFAULT_OPTION}
        onSelect={(eventKey, _) => setTab(eventKey as String)}
      >
        {OPTIONS.map((elem) => (
          <Nav.Item key={elem}>
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
      <div>Selected option: {tab}</div>
    </>
  );
}
