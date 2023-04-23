import React from "react";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

const Header = () => {
    return (
        <header className="main-nav js-main-nav headroom headroom--not-bottom headroom--pinned headroom--top">
            <PrimaryNav />
            <SecondaryNav/>
        </header>
    )
}

export default Header