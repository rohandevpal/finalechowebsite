import React from "react";
import './ourreach.css';
import { indiamap, attendees, hubs, mcp, NHM, partner, session, ourreachsecond, Ourreachthird, pulse } from "./import";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Ourreach = () => {
    return (
        <section class="our-reach">
            <h2 class="our-reach-heading">Our Reach</h2>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Healthcare</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Education</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Livelihood</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <ul class="our-reach-section-ul">
                                    <li>
                                        <img src={indiamap} alt="healthcare centers Echo india" />
                                    </li>
                                    <li>
                                        <div class="multi-sectionin-tabs">
                                            <div class="hubs">
                                                <div class="pulse-icon">
                                                    {/* <img src={pulse} alt="" /> */}
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="content">
                                                    <div class="img">
                                                        <img src={hubs} alt="hubs echo inda" />
                                                    </div>
                                                    <div class="text">
                                                        <h2 className="bebas-neue-regular">400+</h2>
                                                        <p>Hubs</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sessions">
                                                <div class="pulse-icon">
                                                    {/* <img src={pulse} alt="" /> */}
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="content">
                                                    <div class="img">
                                                        <img src={session} alt="sessions echo india" />
                                                    </div>
                                                    <div class="text">
                                                        <h2 className="bebas-neue-regular">25000+</h2>
                                                        <p>sessions</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="attendees">
                                                <div class="pulse-icon">
                                                    {/* <img src={pulse} alt="" /> */}
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="content">
                                                    <div class="img">
                                                        <img src={attendees} alt="attendees echo india" />
                                                    </div>
                                                    <div class="text">
                                                        <h2 className="bebas-neue-regular">1700000+</h2>
                                                        <p>Attendees</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-multisection">
                                            <div class="partner">
                                                <img src={partner} alt="partner echo india" />
                                                <h2 className="bebas-neue-regular">19+</h2>
                                            </div>
                                            <div class="MCP">
                                                <img src={mcp} alt="MCP echo india" />
                                                <h2 className="bebas-neue-regular">06</h2>
                                            </div>
                                            <div class="nhm-partner">
                                                <img src={NHM} alt="NHM echo india" />
                                                <h2 className="bebas-neue-regular">29</h2>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="our-reach-tab-2">
                                    <div class="hubs">
                                        <div class="pulse-icon">
                                            {/* <img src={pulse} alt="" /> */}
                                            <div class="circle"></div>
                                        </div>
                                        <div class="content">
                                            <div class="img">
                                                <img src={hubs} alt="hubs echo inda" />
                                            </div>
                                            <div class="text">
                                                <h2 className="bebas-neue-regular">20+</h2>
                                                <p>Hubs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sessions">
                                        <div class="pulse-icon">
                                            {/* <img src={pulse} alt="" /> */}
                                            <div class="circle"></div>
                                        </div>
                                        <div class="content">
                                            <div class="img">
                                                <img src={session} alt="sessions echo india" />
                                            </div>
                                            <div class="text">
                                                <h2 className="bebas-neue-regular">550+</h2>
                                                <p>sessions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="attendees">
                                        <div class="pulse-icon">
                                            {/* <img src={pulse} alt="" /> */}
                                            <div class="circle"></div>
                                        </div>
                                        <div class="content">
                                            <div class="img">
                                                <img src={attendees} alt="attendees echo india" />
                                            </div>
                                            <div class="text">
                                                <h2 className="bebas-neue-regular">16000+</h2>
                                                <p>Attendees</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="img-second-our-reach">
                                    <img src={ourreachsecond} alt="" />
                                </div>
                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><div class="our-reach-tab-3">
                                <div class="text">
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
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Ourreach;