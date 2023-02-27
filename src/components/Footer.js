import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  color: var(--white);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Scott Weinkauf</h1>
          <PText>
            Hope to work with you soon 
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Website Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '785-213-9700',
                path: 'tel:785-213-9700',
              },
              {
                title: 'scott.weinkauf29@gmail.com',
                path: 'mailto:scott.weinkauf29@gmail.com',
              },
             
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/sweinkauf',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/scott-weinkauf-444301167/',
              },
              {
                title: 'Letterboxd',
                path: 'https://letterboxd.com/weinland/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
           Portfolio of Scott Weinkauf 2023
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}