
 function getDaylightMapURL(){
    const date = new Date(Date.now());
    const dateString =
      date.getUTCFullYear().toString() +
      (date.getUTCMonth() + 1).toString().padStart(2, "0") +
      date.getUTCDate().toString().padStart(2, "0") +
      "T" +
      date.getUTCHours().toString().padStart(2, "0") +
      date.getUTCMinutes().toString().padStart(2, "0");
      return "https://www.timeanddate.com/scripts/sunmap.php?" + new URLSearchParams({ iso: dateString, earth: "1" }) ;

}


export default function DaylightMap( {} : {}) {
    return (
        <img
          src={getDaylightMapURL()}
          width="600"
          height="300"
          style={{ marginLeft: "auto", marginRight: 0, display: "block" }}
        />
    );
}


