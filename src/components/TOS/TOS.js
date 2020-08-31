import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";

const TOS = () => {
    const history = useHistory();

    return (
      <Container>
        <Row>
          <Col>
            <h1>Terms of Service</h1>
          </Col>
          <Col className="d-flex justify-content-end w-25">
            <Button className="h-75 mt-2" onClick={() => history.push("/")} variant="secondary">
              Back
            </Button>
          </Col>
        </Row>
        <h3>Not Investment Advice</h3>
        <p>
          Any and all content displayed is for informational purposes only. you
          should not construe any such information or other material as legal,
          tax, investment, financial, or other advice. Nothing contained on our
          Site constitutes a solicitation, recommendation, endorsement, or any
          third party service provider to buy or sell any securities or other
          financial instruments in this or in in any other jurisdiction in which
          such solicitation or offer would be unlawful under the securities laws
          of such jurisdiction. All Content on this site is information of a
          general nature and does not address the circumstances of any
          particular individual or entity. Nothing in the Site constitutes
          professional and/or financial advice, nor does any information on the
          Site constitute a comprehensive or complete statement of the matters
          discussed or the law relating thereto. You alone assume the sole
          responsibility of evaluating the merits and risks associated with the
          use of any information or other Content on the Site before making any
          decisions based on such information or other Content. In exchange for
          using the Site, you agree not to hold FindMarketPlays, its affiliates
          or any third party service provider liable for any possible claim for
          damages arising from any decision you make based on information or
          other Content made available to you through the Site.
        </p>

        <h3>Investment Risks</h3>
        <p>
          There are risks associated with investing in securities. Investing in
          stocks, bonds, exchange traded funds, mutual funds, and money market
          funds involve risk of loss. Loss of principal is possible. Some high
          risk investments may use leverage, which will accentuate gains &
          losses. Foreign investing involves special risks, including a greater
          volatility and political, economic and currency risks and differences
          in accounting methods. A security’s or a firm’s past investment
          performance is not a guarantee or predictor of future investment
          performance.
        </p>
        <h3>Third Part Linked Sites</h3>
        <p>
          As a convenience to you, "FindMarketPlays" may provide hyperlinks to
          web sites operated by third parties. When you select these hyperlinks
          you will be leaving the "FindMarketPlays" site. Because
          "FindMarketPlays" has no control over such sites or their content,
          "FindMarketPlays" is not responsible for the availability of such
          external sites or their content, and "FindMarketPlays" does not adopt,
          endorse or nor is responsible or liable for any such sites or content,
          including advertising, products or other materials, on or available
          through such sites or resources. Other web sites may provide links to
          the Site or Content with or without our authorization.
          "FindMarketPlays" does not endorse such sites and shall not be
          responsible or liable for any links from those sites to the Site or
          Content, or for any content, advertising, products or other materials
          available on or through such other sites, or any loss or damages
          incurred in connection therewith. "FindMarketPlays" may, in its sole
          discretion, block links to the Site and Content without prior notice.
          YOUR USE OF THIRD PARTY WEB SITES AND CONTENT, INCLUDING WITHOUT
          LIMITATION, YOUR USE OF ANY INFORMATION, DATA, ADVERTISING, PRODUCTS,
          OR OTHER MATERIALS ON OR AVAILABLE THROUGH SUCH WEB SITES, IS AT YOUR
          OWN RISK AND IS SUBJECT TO THEIR TERMS OF USE.
        </p>
        <h3>Use of Cookies</h3>
        <p>
          The "FindMarketPlays" website utilizes different technologies to
          collect, store, and aggregate data about website usage. We may use
          electronic tags called “cookies” to help us understand and analyze use
          of our site. This work is either performed directly by us or by a
          third party we’ve hired to assist us. We collect information about
          which pages have been accessed and for how long, the country the user
          accesses the site from, and certain technical information regarding
          the user’s computer and operating systems, such as user Internet
          protocol address, domain name and browser, etc. Certain sections of
          the "FindMarketPlays" site require cookies to be enabled to enhance
          site performance. For example, cookies provide a secure way for us to
          verify user identity during a session and any return visits, they
          enable us to personalize a user’s experience on our sites, and they
          help enhance site navigation. Cookies also help us to understand how
          people use our sites so we can improve site functionality. When a user
          comes to the website, our server sends a cookie to the user’s
          computer. Standing alone, cookies do not identify the user personally;
          they merely recognize the user’s browser. Generally, personally
          identifiable information is obtained by us only when a user decides to
          provide it, such as when requesting additional information via email
          or providing personal information. We use two types of cookies on our
          sites, temporary cookies and persistent cookies. Temporary cookies are
          used to store information during a browser session and will expire
          shortly after concluding a visit to one of our sites. Persistent
          cookies are used to store information between visits to one of our
          sites and are stored permanently or for a specified length of time.
          Persistent cookies are used to facilitate easier navigation within our
          sites and provide a higher level of convenience for the user. A user
          can choose to have their computer issue a warning each time a cookie
          is being sent, or a user can choose to turn off all cookies. The
          management of cookies generally is handled through the user’s browser
          settings (e.g., Internet Explorer). To obtain more information about
          managing cookies, visit www.aboutcookies.org.
        </p>
        <h3>Site and Content Not Warranted</h3>
        <p>
          THE SITE AND CONTENT, ARE PROVIDED “AS IS” AND WITHOUT WARRANTIES OF
          ANY KIND. YOU BEAR ALL RISKS ASSOCIATED WITH THE USE OF THE SITE AND
          CONTENT, INCLUDING WITHOUT LIMITATION, ANY RELIANCE ON THE ACCURACY,
          COMPLETENESS OR USEFULNESS OF ANY CONTENT AVAILABLE ON THE SITE.
          "FindMarketPlays" AND ITS EMPLOYEES, OFFICERS, DIRECTORS, , PARTNERS,
          AGENTS, REPRESENTATIVES, SUPPLIERS AND SERVICE PROVIDERS, DISCLAIM ALL
          WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ALL
          WARRANTIES OF TITLE, NON-INFRINGEMENT, ACCURACY, COMPLETENESS,
          USEFULNESS, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR USE, AND
          WARRANTIES THAT MAY ARISE FROM COURSE OF DEALING/PERFORMANCE OR USAGE
          OF TRADE.
        </p>
        <h3>Limiation of Liability</h3>
        <p>
          YOUR EXCLUSIVE REMEDY FOR DISSATISFACTION WITH THE SITE AND CONTENT IS
          TO STOP USING THE SITE AND CONTENT. "FindMarketPlays" IS NOT LIABLE
          FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR
          PUNITIVE DAMAGES, UNDER ANY THEORY OF LIABILITY, INCLUDING WITHOUT
          LIMITATION, DAMAGES FOR LOSS OF PROFITS, USE, DATA, OR LOSS OF OTHER
          INTANGIBLES. IN PARTICULAR, AND WITHOUT LIMITATION, "FindMarketPlays"
          WILL NOT BE LIABLE FOR DAMAGES OF ANY KIND RESULTING FROM YOUR USE OF
          OR INABILITY TO USE THE SITE OR CONTENT. While we try to maintain the
          integrity and security of the Site and the servers from which the Site
          is operated, we do not guarantee that the Site or Content is or
          remains secure, complete or correct, or that access to the Site or
          Content will be uninterrupted or error free. The Site and Content may
          include inaccuracies, errors and materials that violate or conflict
          with these Terms. Additionally, third parties may make unauthorized
          alterations to the Site or Content. If you become aware of any
          unauthorized third party alteration to the Site or Content, contact us
          at info@harringtoninvestments.com with a description of the
          material(s) at issue and the URL.
        </p>
        <h3>Limited Right of Use/Ownership of Content</h3>
        <p>
          You are permitted to use the Site and Content for your personal,
          non-commercial use only. The Site and Content are and shall remain the
          property of "FindMarketPlays" and is protected by copyright,
          trademark, patent, and/or other intellectual property, proprietary,
          work product rights and laws. You may use the Site and Content for
          your personal, noncommercial use, provided that you keep intact all
          copyright, trademark, patent and other proprietary notices. Except as
          expressly authorized in advance by "FindMarketPlays" in writing, you
          agree not to reproduce, modify or create derivative works based on,
          rent, lease, loan, sell, distribute, publish, publicly perform or
          display, reverse engineer, de-compile or dissemble, all or any part of
          the Site or Content. Trade names, trademarks and service marks of
          "FindMarketPlays" include, without limitation, "FindMarketPlays" and
          any associated logos. All trademarks and service marks on the Site not
          owned by "FindMarketPlays" are the property of their respective
          owners. Nothing contained on the Site should be construed as granting,
          by implication, estoppel or otherwise, any license or right to use any
          of "FindMarketPlays"’s trade names, trademarks or service marks
          without our express prior written consent.
        </p>
        <h3>Termination</h3>
        <p>
          "FindMarketPlays", in its sole discretion, may terminate your access
          to or use of the Site and Content, at any time and for any reason.
          Your access to or use of the Site and Content may be terminated
          without notice. "FindMarketPlays" shall not be liable to you or any
          third party for any termination of your access to the Site or Content,
          or to any such information or files, and shall not be required to make
          such information or files available to you after any such termination.
        </p>
        <h3>Rules of Conduct</h3>
        <p>
          Your use of the Site and Content is conditioned on your compliance
          with the rules of conduct set forth here. You will not: • Use the Site
          or Content for any fraudulent or unlawful purpose. • Interfere with or
          disrupt the operation of the Site or Content or the servers or
          networks used to make the Site and Content available; or violate any
          requirements, procedures, policies or regulations of such networks. •
          Restrict or inhibit any other person from using the Site or Content
          (including without limitation by hacking or defacing any portion of
          the Site or Content). • Use the Site or Content to advertise or offer
          to sell or buy any goods or services without "FindMarketPlays"’s
          express prior written consent. • Reproduce, duplicate, copy, sell,
          resell or otherwise exploit for any commercial purposes, any portion
          of, use of, or access to the Site or Content. • Modify, adapt, reverse
          engineer, de-compile/disassemble any part of the Site or Content. •
          Remove any copyright, trademark or other proprietary rights notice
          from the Site or materials originating from the Site or Content. •
          Frame or mirror any part of the Site or Content without
          "FindMarketPlays" express prior written consent. • Create a database
          by systematically downloading and storing Content. • Use any robot,
          spider, site search/retrieval application or other manual or automatic
          device to retrieve, index, “scrape,” “data mine” or in any way gather
          Content or reproduce or circumvent the navigational structure or
          presentation of the Site without Company’s express prior written
          consent.
        </p>
        <h3>Indemnification</h3>
        <p>
          By accessing and using the Site and Content, you agree to indemnify,
          defend and hold harmless "FindMarketPlays" (specifically including its
          officers, directors, owners, partners, employees, agents, information
          providers, licensors and licensees) (collectively, the “Indemnified
          Parties”) from and against any and all claims, losses, costs and
          expenses (including attorneys’ fees) arising out of or relating to (a)
          any breach (or claim, that if true, would be a breach) by you of these
          Terms and (b) your use of or activities in connection with the Site.
          We reserve the right, at our own expense, to assume the exclusive
          defense and control of any matter otherwise subject to indemnification
          by you. You shall not enter into any settlement agreement which
          affects the rights of any of the Indemnified Parties or requires the
          taking of any action by any of them, without our prior written
          approval.
        </p>
      </Container>
    );
}

export default TOS;