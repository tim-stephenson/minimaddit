
// function padNum(n : number) : String{

// }

async function getDaylightMap(){
    const date = new Date(Date.now());
    const dateString =
      date.getUTCFullYear().toString() +
      (date.getUTCMonth() + 1).toString().padStart(2, "0") +
      date.getUTCDate().toString().padStart(2, "0") +
      "T" +
      date.getUTCHours().toString().padStart(2, "0") +
      date.getUTCMinutes().toString().padStart(2, "0");
      const params4 = new URLSearchParams({ foo: "1", bar: "2" });
      const request = await fetch(
        "https://www.timeanddate.com/scripts/sunmap.php?" +
          new URLSearchParams({ iso: dateString, earth: "1" })
      );

      try{
        request.
      }
}


export default function DaylightMap( {} : {}) {
    return (
    <>
    </>
    )
}


