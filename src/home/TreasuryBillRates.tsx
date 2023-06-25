import { useEffect, useState } from "react";
import {api_urls,api_return_types} from "../APIs";


export default function TreasuryBillRates({} : {}){



    const [data,setData] = useState<null | api_return_types["daily_treasury_yield_curve"]>(null);

    useEffect(   () => {
        const foo  = async () =>{
            fetch(api_urls.daily_treasury_yield_curve)
              .then(async (response) => {
                if (response.ok) {
                  const jsonData = await response.json();
                  setData(jsonData);
                }
              })
              .catch((e) => {
                console.log(e);
              });

        }
        foo();
        
    }, []);
    

    return (
      <>
        <h2>Treasury Bills:</h2>
        <div style={{ display: "flex", flexDirection: "row", flexWrap : "wrap", alignItems : "center", justifyContent : "center" }}>
          <Infographic name="1 month" value={data?.BC_1MONTH + "%"} />
          <Infographic name="2 month" value={data?.BC_2MONTH + "%"} />
          <Infographic name="3 month" value={data?.BC_3MONTH + "%"} />
          <Infographic name="4 month" value={data?.BC_4MONTH + "%"} />
          <Infographic name="6 month" value={data?.BC_6MONTH + "%"} />
          <Infographic name="1 year" value={data?.BC_1YEAR + "%"} />
          <Infographic name="2 year" value={data?.BC_2YEAR + "%"} />
          <Infographic name="3 year" value={data?.BC_3YEAR + "%"} />
          <Infographic name="5 year" value={data?.BC_5YEAR + "%"} />
          <Infographic name="7 year" value={data?.BC_7YEAR + "%"} />
          <Infographic name="10 year" value={data?.BC_10YEAR + "%"} />
          <Infographic name="20 year" value={data?.BC_20YEAR + "%"} />
          <Infographic name="30 year" value={data?.BC_30YEAR + "%"} />
        </div>
        <small>As of {parseDateFromString(data?.updated)}</small>
      </>
    );
}

function parseDateFromString(s : string | undefined) : string{
  if (s == undefined){
    return "";
  }
  const milliseconds = Date.parse(s);
  if (Number.isNaN(milliseconds)){
    return "";
  }
  const date = new Date(milliseconds);
  return date.toLocaleString();

}


function Infographic( {name, value} : {name : string; value : string | undefined} ){
    return (
      <div className="infographic">
        <div>{name}</div>
        <div>{value}</div>
      </div>
    );
}