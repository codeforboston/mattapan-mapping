//@ts-nocheck
import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@/theme/Theme';


export function Pin({ size = 20, color = Theme.colors.orange}) {
  const ICON = 'M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z';
  
  const pinStyle = {
    // cursor: 'pointer',
    fill: color,
    stroke: 'none',
    display: 'block',
  };

  return (
    <svg height={size} viewBox="0 0 16 16" style={pinStyle}>
      <path d={ICON} />
    </svg>
  );
};

export function Chapter({ id, content, title, image, isActive, hidden, alignment }:
  { id: string, content: string, title: string, image: string, isActive: boolean, hidden: boolean, alignment: string }
  ) {
  return (
    <div id={id} className={`step ${isActive ? 'active' : ''} ${alignment} ${hidden ? 'hidden' : ''}`}>
      {/* FIXME: replace with theme? */}
      <div className="light">
        <h3>{title}</h3>
        <img src={image} />
        <p>
          {content}
        </p>
      </div>
    </div>
  );
};

const StyledHeader = styled.header`
  margin: auto;
  width: 100%;
  position: relative;
  z-index: 5;
`
const StyledFooter = styled.footer`
  width: 100%;
  min-height: 5vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  text-align: center;
  line-height: 25px;
  font-size: 13px;
  position: relative;
  z-index: 5;
`
export function Header({title, subtitle, byline, theme}:{title: string, subtitle: string, byline: string, theme: string} ) {

  // FIXME: Add the theme
  // if (header.innerText.length > 0) {
  //   header.classList.add(config.theme);
  // story.appendChild(header);
  // }
  
  return (
    <StyledHeader id='header' className='dark'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{byline}</p>
    </StyledHeader>
  );
};

export function Footer({footerHtml}: {footerHtml: string}) {
  
  // TODO: dynamically add theme
  //    if (footer.innerText.length > 0) {
  //       footer.classList.add(config.theme);
  //       footer.setAttribute('id', 'footer');
  //       story.appendChild(footer);
  // }
  
  return (
    <StyledFooter id='footer' className='dark'>
      {/* FIXME: Do this a better way */}
      <p dangerouslySetInnerHTML={{ __html: footerHtml }}>
      </p>
    </StyledFooter>
  );
};

