import React, { useState, useEffect } from 'react';
import './Footer.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons';

const UpdatingTooltip = React.forwardRef(({ popper, children, show: _, ...props }, ref) => {
    useEffect(() => { popper.scheduleUpdate(); }, [children, popper]);
    return (<Tooltip ref={ref} content {...props}>{children}</Tooltip>);
});

const clickFalse = 'Copiar para a área de transferência.';
const clickTrue = 'Copiado ✔️';

function Footer() {
    const [content, setContent] = useState(clickFalse);
    const [delayHide, setDelayHide] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => { setDelayHide(0) }, 1000);
        return () => clearInterval(timerId);
    });

    return (
        <footer>
            <div id="links-circle">
                <a id="fa-facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/gce.neiist" className="fa"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a id="fa-instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gce.neiist" className="fa"><FontAwesomeIcon icon={faInstagram} /></a>
                <a id="fa-linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/11163917" className="fa"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a id="fa-twitch" target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/gce_neiist" className="fa"><FontAwesomeIcon icon={faTwitch} /></a>
                <a id="fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/GCE-NEIIST/GCE-NEIIST-webapp" className="fa"><FontAwesomeIcon icon={faGithub} /></a>
                <OverlayTrigger onToggle={() => setContent(clickFalse)} delay={{ hide: delayHide }} overlay={<UpdatingTooltip>{content}</UpdatingTooltip>}                >
                    <div id="fa-envelope" onClick={() => { navigator.clipboard.writeText("admin@gce-neiist.org"); setContent(delayHide === 0 && content === clickFalse ? clickTrue : clickFalse); setDelayHide(delayHide === 0 && content === clickFalse ? 1000 : 0) }} className="fa copy-click">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </OverlayTrigger>
            </div>
        </footer >
    );
}

export default Footer;