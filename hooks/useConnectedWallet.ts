import { useEffect } from "react";
import { useAssets, useWallet } from "@meshsdk/react";

const useConnectedWallet = () => {
  const { connect, connected } = useWallet();
  const assets = useAssets();
  const policyId = "d34743543ccbda22bb948400a4a919b7b54e82123030702e38cc62b6";

  useEffect(() => {
    const getConnected = localStorage.getItem("connected") === "true";
    if (getConnected) {
      connect("Nami");
    }
  }, [connect]);

  useEffect(() => {
    localStorage.setItem("connected", connected ? "true" : "false");
  }, [connected]);

  const asset =
    connected && assets?.find((asset: any) => asset.policyId === policyId);

  return { connected, asset };
};

export default useConnectedWallet;
