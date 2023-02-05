import React, { useContext } from "react";
import "./Support.css";
import { ProfileContext } from "../App";
import UILinkInput from "./UILinkInput";

export default function Support() {
  const { buyMeCoffeeLink, setBuyMeCoffeeLink } = useContext(ProfileContext);
  return (
    <div className="support-container">
      <UILinkInput
        linkLabel="buy me a coffee "
        icon="coffee"
        startLink="https://www.buymeacoffee.com"
        linkValue={buyMeCoffeeLink}
        linkAction={setBuyMeCoffeeLink}
      />
    </div>
  );
}
