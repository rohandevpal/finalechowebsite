import React, { useState } from "react";
import './keyimplimenting.css';
import { keypartner, keypartner2 } from "./import";

const Keyimplimenting = () => {
    const [activeTab, setActiveTab] = useState("Healthcare");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="key-implementing">
            <h2 className="key-implementing-heading text-center">Key Implementing Partners</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${activeTab === "Healthcare" ? "active" : ""}`} onClick={() => handleTabChange("Healthcare")}>Healthcare</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${activeTab === "Education" ? "active" : ""}`} onClick={() => handleTabChange("Education")}>Education</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className={`tab-pane fade ${activeTab === "Healthcare" ? "show active" : ""}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                <ul className="key-partners">
                                    <li>
                                        <img src={keypartner} alt="Key Partners echo" />
                                    </li>
                                </ul>
                            </div>
                            <div className={`tab-pane fade ${activeTab === "Education" ? "show active" : ""}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                <ul className="key-partners-two">
                                    <li>
                                        <img src={keypartner2} alt="Key Partners echo" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Keyimplimenting;
