import React from 'react';
import styled from '@emotion/styled';

export function Chapter({ id, content, title, image, isActive, hidden, alignment }: ChapterProps) {
  return (
    <div id={id} className={`step ${isActive ? 'active' : ''} ${alignment} ${hidden ? 'hidden' : ''}`}>
      {/* FIXME: replace with theme? */}
      <div className="light">
        <h3>{title}</h3>
        <img src={image} alt=''/>
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
export function Header({title, subtitle, byline}: HeaderProps ) {

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
      {/* FIXME: Do this a better way? */}
      <p dangerouslySetInnerHTML={{ __html: footerHtml }}>
      </p>
    </StyledFooter>
  );
};
