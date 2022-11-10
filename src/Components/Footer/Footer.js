import React from 'react';
import logo from '../../img/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-200 text-base-content md:grid grid-cols-3 mt-40 pt-24 lg:flex items-center justify-between ">
            <div>
                <img src={logo} alt="" />
                <p>Dentist Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link block link-hover">Dental Bonding</a>
                <a className="link block link-hover">Dental Crowns</a>
                <a className="link block link-hover">Bridgework</a>
                <a className="link block link-hover">Cosmetic Fillings</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link block link-hover">About us</a>
                <a className="link block link-hover">Contact</a>
                <a className="link block link-hover">Jobs</a>
                <a className="link block link-hover">Invisalign</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link block link-hover">Terms of use</a>
                <a className="link block link-hover">Privacy policy</a>
                <a className="link block link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;