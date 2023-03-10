import Link from "next/link";
import React, { useEffect, useState } from "react";
import Links from "../components/links";

const index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false?_limit=1"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <>
      <h2>this pagination page</h2>
      <Link href="/">Go to Home</Link>
      <h2>total data {data.length}</h2>
      <div className="items_area">
        {data.map((item, i) => {
          return (
            <div key={i}>
              <div className="item">
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
                <h6>{item.id}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;

// export async function getStaticProps() {
//     const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false?_limit=1")
//     const data = await res.json()

//     return{
//         props:{
//             data
//         }
//     }
// }
