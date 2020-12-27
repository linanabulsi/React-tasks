import React from "react";
import "../../style.css";

export default function StickyNav() {
  const nav = React.createRef();
  const [topOfNav, setTopOfNav] = React.useState(0);

  const fixNav = () => {
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }
    else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
  };

  React.useEffect(() => {
    setTopOfNav(nav.current.offsetTop);
  });

  React.useEffect(() => {
    window.addEventListener("scroll", fixNav);

    return () => {
      window.removeEventListener("scroll", fixNav);
    };
  });

  return (
    <div>
      <header>
        <h1>A story about getting lost.</h1>
      </header>

      <nav id="main" ref={nav}>
        <ul>
          <li className="logo">
            <a href="#">LOST.</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Images</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Maps</a>
          </li>
        </ul>
      </nav>

      <div className="site-wrap">
        <p>
          Based on qualitative and quantitative results the efficacy of the
          intercultural approach for promoting perception change, transformation
          and relationship building was affirmed...
        </p>

        <p>
          The results indicate that the work of the IEA has important
          implications for maintaining “peace willingness”, which is not to be
          taken for granted nowadays...
        </p>

        <p>
          It proves that the inter-religious encounter made participants more
          open to the “religious other” while often making the particular
          identity of the participants stronger and more positive..
        </p>

        <p>
          The results show that for the participants, stereotypes have been
          broken and enemies have been re-humanized and are now perceived as
          people who also face the difficulties of the conflict...
        </p>

        <p>
          Based on qualitative and quantitative results the efficacy of the
          intercultural approach for promoting perception change, transformation
          and relationship building was affirmed...
        </p>

        <p>
          The results indicate that the work of the IEA has important
          implications for maintaining “peace willingness”, which is not to be
          taken for granted nowadays...
        </p>

        <p>
          It proves that the inter-religious encounter made participants more
          open to the “religious other” while often making the particular
          identity of the participants stronger and more positive..
        </p>

        <p>
          The results show that for the participants, stereotypes have been
          broken and enemies have been re-humanized and are now perceived as
          people who also face the difficulties of the conflict...
        </p>

        <p>
          Based on qualitative and quantitative results the efficacy of the
          intercultural approach for promoting perception change, transformation
          and relationship building was affirmed...
        </p>

        <p>
          Based on qualitative and quantitative results the efficacy of the
          intercultural approach for promoting perception change, transformation
          and relationship building was affirmed...
        </p>

        <p>
          The results indicate that the work of the IEA has important
          implications for maintaining “peace willingness”, which is not to be
          taken for granted nowadays...
        </p>

        <p>
          It proves that the inter-religious encounter made participants more
          open to the “religious other” while often making the particular
          identity of the participants stronger and more positive..
        </p>

        <p>
          The results show that for the participants, stereotypes have been
          broken and enemies have been re-humanized and are now perceived as
          people who also face the difficulties of the conflict...
        </p>

        <p>
          Based on qualitative and quantitative results the efficacy of the
          intercultural approach for promoting perception change, transformation
          and relationship building was affirmed...
        </p>

        <p>
          The results indicate that the work of the IEA has important
          implications for maintaining “peace willingness”, which is not to be
          taken for granted nowadays...
        </p>

        <p>
          It proves that the inter-religious encounter made participants more
          open to the “religious other” while often making the particular
          identity of the participants stronger and more positive..
        </p>

        <p>
          The results show that for the participants, stereotypes have been
          broken and enemies have been re-humanized and are now perceived as
          people who also face the difficulties of the conflict...
        </p>

        <p>
          Based on qualitative and quantitative results the efficacy of the
          intercultural approach for promoting perception change, transformation
          and relationship building was affirmed...
        </p>

        <p>
          Based on qualitative and quantitative results the efficacy of the
          intercultural approach for promoting perception change, transformation
          and relationship building was affirmed...
        </p>

        <p>
          The results indicate that the work of the IEA has important
          implications for maintaining “peace willingness”, which is not to be
          taken for granted nowadays...
        </p>

        <p>
          It proves that the inter-religious encounter made participants more
          open to the “religious other” while often making the particular
          identity of the participants stronger and more positive..
        </p>

        <p>
          The results show that for the participants, stereotypes have been
          broken and enemies have been re-humanized and are now perceived as
          people who also face the difficulties of the conflict...
        </p>

        <p>
          Based on qualitative and quantitative results the efficacy of the
          intercultural approach for promoting perception change, transformation
          and relationship building was affirmed...
        </p>

        <p>
          The results indicate that the work of the IEA has important
          implications for maintaining “peace willingness”, which is not to be
          taken for granted nowadays...
        </p>

        <p>
          It proves that the inter-religious encounter made participants more
          open to the “religious other” while often making the particular
          identity of the participants stronger and more positive..
        </p>

        <p>
          The results show that for the participants, stereotypes have been
          broken and enemies have been re-humanized and are now perceived as
          people who also face the difficulties of the conflict...
        </p>

        <p>
          Based on qualitative and quantitative results the efficacy of the
          intercultural approach for promoting perception change, transformation
          and relationship building was affirmed...
        </p>
      </div>
    </div>
  );
}
