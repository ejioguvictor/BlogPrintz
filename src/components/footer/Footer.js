import React from "react"
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="para">
          <p>© Designed with ♥️ by Victor_Ejiogu.</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="https://github.com/ejioguvictor">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/ejioguvictorC/">
            <LinkedInIcon sx={{ color: "#0b66c2" }} />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
