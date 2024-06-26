import React, { useState } from "react";
import './ourreach.css';
import { indiamap, attendees, hubs, mcp, NHM, partner, session, ourreachsecond, Ourreachthird, pulse } from "../../../_data/homedata";
import 'bootstrap/dist/css/bootstrap.min.css';

const Ourreach = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="our-reach">
            <h2 className="our-reach-heading">Our Reach</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                                    id="home-tab"
                                    type="button"
                                    role="tab"
                                    onClick={() => handleTabClick('home')}
                                    aria-controls="home"
                                    aria-selected={activeTab === 'home'}
                                >
                                    Healthcare
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                                    id="profile-tab"
                                    type="button"
                                    role="tab"
                                    onClick={() => handleTabClick('profile')}
                                    aria-controls="profile"
                                    aria-selected={activeTab === 'profile'}
                                >
                                    Education
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                                    id="contact-tab"
                                    type="button"
                                    role="tab"
                                    onClick={() => handleTabClick('contact')}
                                    aria-controls="contact"
                                    aria-selected={activeTab === 'contact'}
                                >
                                    Livelihood
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                                <ul className="our-reach-section-ul">
                                    <li>
                                        <img src={indiamap} alt="healthcare centers Echo india" />
                                    </li>
                                    <li>
                                        <div className="multi-sectionin-tabs">
                                            <div className="hubs">
                                                <div className="pulse-icon">
                                                    {/* <img src={pulse} alt="" /> */}
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="content">
                                                    <div className="img">
                                                        <img src={hubs} alt="hubs echo inda" />
                                                    </div>
                                                    <div className="text">
                                                        <h2 className="bebas-neue-regular">400+</h2>
                                                        <p>Hubs</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sessions">
                                                <div className="pulse-icon">
                                                    {/* <img src={pulse} alt="" /> */}
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="content">
                                                    <div className="img">
                                                        <img src={session} alt="sessions echo india" />
                                                    </div>
                                                    <div className="text">
                                                        <h2 className="bebas-neue-regular">25000+</h2>
                                                        <p>sessions</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="attendees">
                                                <div className="pulse-icon">
                                                    {/* <img src={pulse} alt="" /> */}
                                                    <div className="circle"></div>
                                                </div>
                                                <div className="content">
                                                    <div className="img">
                                                        <img src={attendees} alt="attendees echo india" />
                                                    </div>
                                                    <div className="text">
                                                        <h2 className="bebas-neue-regular">1700000+</h2>
                                                        <p>Attendees</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-multisection">
                                            <div className="partner">
                                                <img src={partner} alt="partner echo india" />
                                                <h2 className="bebas-neue-regular">19+</h2>
                                            </div>
                                            <div className="MCP">
                                                <img src={mcp} alt="MCP echo india" />
                                                <h2 className="bebas-neue-regular">06</h2>
                                            </div>
                                            <div className="nhm-partner">
                                                <img src={NHM} alt="NHM echo india" />
                                                <h2 className="bebas-neue-regular">29</h2>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="our-reach-tab-2">
                                    <div className="hubs">
                                        <div className="pulse-icon">
                                            {/* <img src={pulse} alt="" /> */}
                                            <div className="circle"></div>
                                        </div>
                                        <div className="content">
                                            <div className="img">
                                                <img src={hubs} alt="hubs echo inda" />
                                            </div>
                                            <div className="text">
                                                <h2 className="bebas-neue-regular">20+</h2>
                                                <p>Hubs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sessions">
                                        <div className="pulse-icon">
                                            {/* <img src={pulse} alt="" /> */}
                                            <div className="circle"></div>
                                        </div>
                                        <div className="content">
                                            <div className="img">
                                                <img src={session} alt="sessions echo india" />
                                            </div>
                                            <div className="text">
                                                <h2 className="bebas-neue-regular">550+</h2>
                                                <p>sessions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="attendees">
                                        <div className="pulse-icon">
                                            {/* <img src={pulse} alt="" /> */}
                                            <div className="circle"></div>
                                        </div>
                                        <div className="content">
                                            <div className="img">
                                                <img src={attendees} alt="attendees echo india" />
                                            </div>
                                            <div className="text">
                                                <h2 className="bebas-neue-regular">16000+</h2>
                                                <p>Attendees</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-second-our-reach">
                                    <img src={ourreachsecond} alt="" />
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="our-reach-tab-3">
                                    <div className="text">
                                        <h2>Livelihood in India</h2>
                                        <p>is intricately tied to the socio-economic fabric of communities, particularly in rural and underserved areas. <strong>Approximately 70% of rural households rely primarily on agriculture </strong>for their sustenance. However, it's important
                                            to recognize <strong> that 82% of farmers fall into the small and marginal category, facing challenges </strong> such as timely access to resources and unpredictable weather conditions. The lack of reliable income options significantly
                                            impacts community well-being, contributing to poverty and distress migration. <br /><br />
                                            <strong>ECHO India collaborates with its partners</strong> to identify best practices and models <strong> in agriculture, animal husbandry, water governance, and
                                                forest management.</strong> We utilize the ECHO model to disseminate knowledge and build capacities among frontline professionals and farmers, empowering them to address the complex challenges in the livelihood sector.<br /><br /> Through
                                            these efforts, our <strong> goal is to enhance food security, promote sustainable utilization of natural resources,</strong> secure farm-based livelihoods, and strengthen resilience towards climate change.</p>
                                    </div>
                                    <div className="img">
                                        <img src={Ourreachthird} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ourreach;
