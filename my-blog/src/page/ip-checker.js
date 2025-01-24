
import React, { useEffect, useState } from "react";
export default function Home() {
  // const [ip, setIp] = useState("0.0.0.0");
  const [address, setAddress] = useState("")
  useEffect(() => {
    const getIp = async () => {
      const data = await fetch("https://api-bdc.net/data/client-info").then(response => response.json());
      const address = await fetch(`https://blog-backend-silk-mu.vercel.app/api/${data.ipString}`).then(response => response.json())
      setAddress({ ...address.address })
      console.log(address)
    };
    getIp();
  }, []);
  return (
    <div className={`flex flex-col items-center justify-items-center min-h-screen gap-1 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <p className="info"><strong>IP Address:</strong> {address?.query}</p>
      <p className="info"><strong>ISP:</strong> {address.isp}</p>
      <p className="info"><strong>Organization:</strong> {address.org}</p>
      <p className="info"><strong>AS Number:</strong> {address.as}</p>
      <p class="info"><strong>Country:</strong> {address.country} ({address.countryCode})</p>
      <p class="info"><strong>Region:</strong> {address.regionName} ({address.region})</p>
      <p class="info"><strong>City:</strong> {address.city}</p>
      <p class="info"><strong>ZIP Code:</strong> {address.zip}</p>
      <p class="info"><strong>Latitude:</strong> {address.lat}</p>
      <p class="info"><strong>Longitude:</strong> {address.lon}</p>
      <p class="info"><strong>Timezone:</strong> {address.timezone}</p>
      <p class="info"><strong>Status:</strong> {address.status}</p>
    </div>
  );
}
