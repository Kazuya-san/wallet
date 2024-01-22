import { useEffect } from "react";
import Head from "next/head";
import { CardanoWallet, MeshBadge, useWallet, useAssets } from "@meshsdk/react";
import useConnectedWallet from "../hooks/useConnectedWallet";

export default function Home() {
  const { asset } = useConnectedWallet();
  return (
    <div className="container">
      <Head>
        <title>Mesh App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <link rel="icon" href="https://meshjs.dev/favicon/favicon-32x32.png" />
        <link
          href="https://meshjs.dev/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Head>

      <main className="main">
        <h1 className="title">
          <a href="https://meshjs.dev/">Mesh</a> Next.js
        </h1>

        <div className="demo">
          <CardanoWallet />
        </div>

        <button
          style={{
            width: "120px",
            height: "50px",
            backgroundColor: asset ? "green" : "red",
            color: "white",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          Something
        </button>
      </main>
    </div>
  );
}
