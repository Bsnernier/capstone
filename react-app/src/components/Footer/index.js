import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            {" "}
            <div className="footer_links">
                <a
                    href="https://github.com/Bsnernier/capstone"
                    class="fab fa-github-square icon"
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}
                </a>
                <a
                    href="https://www.linkedin.com/in/nathaniel-bernier-899110207"
                    class="fab fa-linkedin icon"
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}
                </a>
            </div>
        </div>
    );
}

export default Footer;
