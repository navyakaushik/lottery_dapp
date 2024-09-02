import Header from "../components/Header";
import PotCard from "../components/PotCard";
import Table from "../components/Table";
import style from "../styles/Home.module.css";

import {useMemo} from "react";
import {ConnectinProvider, WalletProvider} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <PotCard />
      <Table />
    </div>
  );
}
