import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import DaylightMap from "./DaylightMap";
import TreasuryBillRates from "./TreasuryBillRates";
import Reddit from "./Reddit";
import Twitter from "./Twitter";
import WSJ from "./WSJ";
import NewYorkTimes from "./NewYorkTimes";

const OPTIONS = {
  "Reddit" : Reddit,
  "Twitter" : Twitter,
  "WSJ" : WSJ,
  "NYT" : NewYorkTimes
}

const DEFAULT_OPTION  = Object.keys(OPTIONS)[2] as keyof (typeof OPTIONS); 


export default function Home({}: {}) {

  const [tab,setTab] = useState<JSX.Element>(OPTIONS[DEFAULT_OPTION]({}) );
  return (
    <>
      <div className="top-bar-parent">
        <div className="top-bar-child">
          <TreasuryBillRates />
        </div>
        <div className="top-bar-child">
          <DaylightMap />
        </div>
      </div>
      <Nav
        variant="pills"
        className="justify-content-center"
        defaultActiveKey={DEFAULT_OPTION}
        onSelect={(eventKey, _) => setTab(OPTIONS[eventKey as keyof (typeof OPTIONS)]({}) )}
      >
        {Object.keys(OPTIONS).map((elem) => (
          <Nav.Item key={elem}>
            <Nav.Link eventKey={elem}>{elem}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      { tab }
    </>
  );
}
