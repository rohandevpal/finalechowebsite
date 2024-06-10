// import React from "react";
// import { Link } from "gatsby";

// import { Heading, Paragraph } from "../../atoms";

// import sloganImg from "../../../assets/images/footer/movingKnowledgeNotPeople.svg";
// import logoImg from "../../../assets/images/common/logo.jpg";

// import twitterLogo from "../../../assets/images/footer/twitter.svg";
// import facebookLogo from "../../../assets/images/footer/facebook.svg";
// import linkedinLogo from "../../../assets/images/footer/linkedin.svg";
// import youtubeLogo from "../../../assets/images/footer/youtube.svg";

// import { socialLinks } from "../../../constants";
// import * as styles from "./footer.module.scss";

// const Footer = () => {
//   return (
//     <footer className={styles.container}>
//       <div className={` no-margin-y ${styles.content}`}>
//         <Paragraph className={`is-text-centered`}>
//           ECHO India is a not-for-profit organization working towards building
//           capacities across areas such as healthcare, education and other
//           sustainable development goals
//         </Paragraph>
//         <div className={styles.info}>
//           <div className={styles.linkGroup}>
//             <div className={styles.links}>
//               <Heading className="no-margin-y" size="h5">
//                 Explore
//               </Heading>
//               <Link className={styles.link} to="/about">
//                 About Us
//               </Link>
//               <Link className={styles.link} to="/healthcare">
//                 Healthcare
//               </Link>
//               <Link className={styles.link} to="/education">
//                 Education
//               </Link>
//               <Link className={styles.link} to="/covid">
//                 COVID-19
//               </Link>
//             </div>
//             <div className={styles.links}>
//               <Heading className="no-margin-y" size="h5">
//                 Our Work
//               </Heading>
//               <Link className={styles.link} to="/press">
//                 Press
//               </Link>
//               <Link className={styles.link} to="/gallery">
//                 Gallery
//               </Link>
//               <Link className={styles.link} to="/blogs">
//                 Blog
//               </Link>
//               <Link className={styles.link} to="/training">
//                 Training
//               </Link>
//             </div>
//             <div className={styles.links}>
//               <Heading className="no-margin-y" size="h5">
//                 Information
//               </Heading>

//               <Link className={styles.link} to="/partner">
//                 Partner with us
//               </Link>
//               <Link className={styles.link} to="/career">
//                 Careers
//               </Link>
//               <Link className={styles.link} to="/finance">
//                 Financials
//               </Link>
//               <Link className={styles.link} to="/contact">
//                 Contact
//               </Link>
//             </div>
//           </div>
//           <div className={styles.brand}>
//             <figure>
//               <img src={sloganImg} alt="Moving Knowledge, not people" />
//             </figure>
//             <figure>
//               <img src={logoImg} alt="ECHO India logo" />
//             </figure>
//           </div>
//         </div>

//         <div className={styles.meta}>
//           <span>
//             © 2023 Extension for Community Healthcare Outcomes (ECHO India). All
//             rights reserved.
//           </span>
//           <div className={styles.social}>
//             <Link
//               className={styles.socialIcon}
//               target="_blank"
//               to={socialLinks.twitter}
//             >
//               <img src={twitterLogo} alt="redirect to Twitter icon " />
//             </Link>
//             <Link
//               className={styles.socialIcon}
//               target="_blank"
//               to={socialLinks.facebook}
//             >
//               <img src={facebookLogo} alt="redirect to Facebook icon " />
//             </Link>
//             <Link
//               className={styles.socialIcon}
//               target="_blank"
//               to={socialLinks.linkedin}
//             >
//               <img src={linkedinLogo} alt="redirect to LinkedIn icon " />
//             </Link>
//             <Link
//               className={styles.socialIcon}
//               target="_blank"
//               to={socialLinks.youtube}
//             >
//               <img src={youtubeLogo} alt="redirect to YouTube icon " />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { facebook, instagram, twitter, linkedin, inputbtn, youtube } from "./import";
import './footer.css';

const Footer = () => {
    // Define data for footer links
    const footerLinks = [
        {
            title: "ABOUT US",
            links: [
                { label: "Our Values", url: "#" },
                { label: "Our Leadership", url: "#" },
                { label: "Our Partners", url: "#" },
                { label: "Reports", url: "#" }
            ]
        },
        {
            title: "WHAT WE DO",
            links: [
                { label: "Healthcare", url: "#" },
                { label: "Education", url: "#" },
                { label: "Livelihood", url: "#" },
                { label: "Other SDGs", url: "#" },
            ]
        },
        {
            title: "NEWSROOMS",
            links: [
                { label: "Videos", url: "#" },
                // { label: "Press Releases", url: "#" },
                { label: "Insights and Stories", url: "#" }
            ]
        },
        {
            title: "IMPACT",
            links: [
                { label: "Impact and Outreach", url: "#" }
            ]
        },
        {
            title: "JOIN OUR TEAM",
            links: [
                { label: "Partner with us", url: "#" },
                { label: "Start an ECHO", url: "#" },
                { label: "Careers", url: "#" }
            ]
        }
    ];

    return (
        <section className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="col-12">
                        <ul className="footer-main">
                            {/* Email Newsletter Signup */}
                            <li>
                                <h1 className="text-uppercase">Email Newsletter Signup</h1>
                                <div className="newsletter">
                                    <div className="inputEmail">
                                        <input type="text" placeholder="Your Email"/>
                                    </div>
                                    <div className="iconemail">
                                        <img src={inputbtn} className="img-fluid" alt="img"/>
                                    </div>
                                </div>
                                <h3 className="text-uppercase">Connect With Us</h3>
                                <div className="connect">
                                    <div className="fb">
                                        <img src={facebook} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="twitter">
                                        <img src={twitter} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="Linkedin">
                                        <img src={linkedin} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="insta">
                                        <img src={instagram} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="insta">
                                        <img src={youtube} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </li>
                            {/* Render footer links */}
                            {footerLinks.map((footerItem, index) => (
                                <li key={index}>
                                    <ul className={`footer-${index}`}>
                                        <h1>{footerItem.title}</h1>
                                        {footerItem.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a href={link.url}>{link.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;


