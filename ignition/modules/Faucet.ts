// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NAME = "DLT Africa";
const SYMBOL = "DLT";

const ClaimFaucetModule = buildModule("ClaimFaucetModule", (m) => {
    const tokenName = m.getParameter("tokenName", NAME);
    const tokenSymbol = m.getParameter("tokenSymbol", SYMBOL);

    const ClaimFaucet = m.contract("ClaimFaucet", [tokenName, tokenSymbol]);

    return { ClaimFaucet };
});

export default ClaimFaucetModule;
