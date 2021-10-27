import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.Home}>
      <h2>Indicators</h2>
      <p>
        Common indicators for gentrification include new development projects
        that do not adequately allocate affordable housing, "We Buy Ugly Homes"
        signs, closure of small businesses, vacant homes and parcels, real
        estate and construction signage, and other visual clues to the changing
        nature of the neighborhood.
      </p>
      <h2>Oral Histories</h2>
      <p>
        Interviews with community members about the neighborhood and its
        history.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfFzza9kbaGQCXO3uCdn1gbSyoD0kxFlEMcq-B1FcqiZCLWDA/viewform"
        target="_blank"
        rel="noreferrer"
      >
        Submit an indicator or oral history.
      </a>
      <h2>Resources</h2>
      <p>
        Here are some other helpful resources for studying gentrification in
        Boston and elsewhere.
      </p>
      <p>
        <a
          href="http://codeforboston.github.io/ungentry/"
          target="_blank"
          rel="noreferrer"
        >
          Ungentry, a map by Code for Boston
        </a>
      </p>
      <p>
        <a
          href="https://www.antievictionmap.com/"
          target="_blank"
          rel="noreferrer"
        >
          Anti-Eviction Mapping Project, whose COVID-19 map and code served as
          the base for this tool.
        </a>
      </p>
    </div>
  );
};

export default Home;
