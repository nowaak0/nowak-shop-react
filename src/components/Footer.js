import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/nowaak0"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/nowaak0
                    </a>

                    <p>
                        Stworzył - &nbsp;
                        <a
                            href="https://github.com/nowaak0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Paweł Nowak
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;