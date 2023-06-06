import { useEffect, useState } from "react";
import {api_urls,api_return_types} from "../APIs";


export default function TreasuryBillRates({} : {}){



    const [data,setData] = useState<null | api_return_types["daily_treasury_bill_rates"]>(null);

    useEffect(   () => {
        const foo  = async () =>{
            fetch(api_urls.daily_treasury_bill_rates).then( async (response) =>{
                if (response.ok){
                const jsonData = await response.json();
                setData(jsonData);
            }
            })
            .catch( (e) =>{
                console.log(e);
            })

        }
        foo();
        
    }, []);
    

    return (
      <>
        <h2>Treasury Bills:</h2>
        <div style={{ display: "flex" }}>
          <Infographic name="4 week" value={data?.ROUND_B1_YIELD_4WK_2 + "%"} />
          <Infographic name="8 week" value={data?.ROUND_B1_YIELD_8WK_2 + "%"} />
          <Infographic
            name="13 week"
            value={data?.ROUND_B1_YIELD_13WK_2 + "%"}
          />
          <Infographic
            name="26 week"
            value={data?.ROUND_B1_YIELD_26WK_2 + "%"}
          />
          <Infographic
            name="52 week"
            value={data?.ROUND_B1_YIELD_52WK_2 + "%"}
          />
        </div>
        <small>As of {parseDateFromString(data?.INDEX_DATE)}</small>
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