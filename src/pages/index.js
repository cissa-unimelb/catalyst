import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import '../assets/sass/timeline.css';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import banner from '../assets/images/tech.jpg';

const sections = [
  { id: 'one', name: 'About' },
  { id: 'two', name: 'Prizes' },
  { id: 'three', name: 'Timeline' },
  { id: 'four', name: 'Sponsors' },
  { id: 'five', name: 'FAQs' },
];
const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <div id="wrapper">
      <div id="main">
        <section id="one">
          <div className="image main" data-position="75% 75%">
            <img src={banner} alt="" />
          </div>
          <div className="container">
            <header className="major">
              <h2>Catalyst 2019</h2>
              <p>Future of Wellness</p>
            </header>
            <p>
              Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus
              col. Commodo id in arcu ante lorem ipsum sed accumsan erat
              praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo.
              Vis aliquet tortor ultricies non ante erat nunc integer eu ante
              ornare amet commetus vestibulum blandit integer in curae ac
              faucibus integer non. Adipiscing cubilia elementum.
            </p>
          </div>
        </section>

        <section id="two">
          <div className="container">
            <h3>Prizes</h3>
            {/* <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer non. Adipiscing cubilia elementum
              integer lorem ipsum dolor sit amet.
            </p>
            <ul className="feature-icons">
              <li className="fa-code">Write all the code</li>
              <li className="fa-cubes">Stack small boxes</li>
              <li className="fa-book">Read books and stuff</li>
              <li className="fa-coffee">Drink much coffee</li>
              <li className="fa-bolt">Lightning bolt</li>
              <li className="fa-users">Shadow clone technique</li>
            </ul> */}
          </div>
        </section>

        <section id="three">
          <div className="container">
            <h3>Timeline</h3>
            <VerticalTimeline>
              <VerticalTimelineElement
                className=""
                date="31st August"
                iconStyle={{ background: 'rgb(243, 150, 120)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Saturday</h3>
                <h4 className="vertical-timeline-element-subtitle">Day 1</h4>
                <p>
                  <b>9:00am - 10:30am: </b>Sign-in, Morning Tea
                  <br />
                  <b>10:30am - 11:00am: </b>Opening presentation
                  <br />
                  <b>11:00am - 12:00pm: </b> Hacking
                  <br />
                  <b>12:30pm - 1:30pm</b> Lunch
                  <br />
                  <b>1:30pm - 6:00pm</b> Hacking (Snacks provided)
                  <br />
                  <b>6:00pm - 7:00pm</b> Dinner
                  <br />
                  <b>7:00pm - 8:00pm</b> Hacking
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className=""
                date="1st September"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Sunday</h3>
                <h4 className="vertical-timeline-element-subtitle">Day 2</h4>
                <p>
                  <b>9:00am - 10:00am: </b>Sign-in, Morning Tea
                  <br />
                  <b>10:00am - 12:30pm: </b>Hacking
                  <br />
                  <b>12:30pm - 1:30pm: </b>Lunch
                  <br />
                  <b>1:30pm - 3:00pm: </b>Hacking
                  <br />
                  <b>3:00pm - 4:00pm: </b>Pitching Expo
                  <br />
                  <b>4:00pm - 4:30pm: </b>Afternoon Tea
                  <br />
                  <b>4:30pm - 5:30pm: </b>Pitching Finals
                  <br />
                  <b>5:30pm - 6:00pm: </b>Wrap-up & Goodbye!
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section>
        <section id="four">
          <div className="container">
            <h3>Sponsors</h3>
            {/* <h4>Text</h4>
            <p>
              This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
              <i>italic</i> and this is <em>emphasized</em>. This is{' '}
              <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code:{' '}
              <code>for (;;) ... </code>. Finally,{' '}
              <a href="/#">this is a link</a>.
            </p>
            <hr />
            <header>
              <h4>Heading with a Subtitle</h4>
              <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
            </header>
            <br />
            <h5>
              This started contains all HTML elements
              <br />
              Checkout available styling
              <Link to="/Element"> here</Link>
            </h5> */}
          </div>
        </section>
        <section id="five">
          <div className="container">
            <h3>FAQs</h3>
            <div className="table-wrapper">
              <table>
                <tbody>
                  <tr>
                    <td>What is Catalyst?</td>
                    <td>
                      Catalyst is CISSA's FREE hackathon! That's right - it's
                      100% free! The only thing you need to do is APPLY by
                      filling out the relevant form at the top of this website.
                    </td>
                  </tr>
                  <tr>
                    <td>But... what is a hackathon?</td>
                    <td>
                      A hackathon is an event in which coders and designers get
                      together and spend many hours hacking to create a
                      prototype that is to be presented to a panel of judges.
                      Catalyst is a weekend of coding. So essentially, a
                      hackathon is a fun-filled weekend of coding and
                      prototyping. A code-fest!
                    </td>
                  </tr>
                  <tr>
                    <td>What are the prizes?</td>
                    <td>
                      It wouldn't be a hackathon without prizes!
                      {/* <ul>
                        <li>1st Place ($2000)</li>
                        <li> 2nd Place ($1000) </li>
                        <li> 3rd Place ($500)</li>
                      </ul>
                      Extras (TBC, but potentially):
                      <ul>
                        <li>Go Pro</li>
                        <li>Google Home Mini</li>
                        <li>UE Roll</li>
                      </ul>
                      Raffle (YES we're having a raffle!!):
                      <ul>
                        <li>guess you'll have to come to find out ;)</li>
                      </ul> */}
                    </td>
                  </tr>
                  <tr>
                    <td>What's the theme?</td>
                    <td>
                      The theme this year is...
                      {/* Empowering Education! Create
                      solutions that empower your peers to learn! Sick of LMS?
                      Create something better? Lecture capture's down? Think up
                      a better solution! */}
                    </td>
                  </tr>
                  <tr>
                    <td>How are teams formed?</td>
                    <td>
                      <ol>
                        <li>
                          Teams are ideally formed before the start of the
                          hackathon :)
                        </li>
                        <li>
                          Or...just rock up and join a team if you are so
                          inclined!
                        </li>
                      </ol>
                    </td>
                  </tr>
                  <tr>
                    <td>How do I apply?</td>
                    <td>Just click the button at the top of the page :)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="six">
          <div className="container">
            <h3>Contact Us</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer non. Adipiscing cubilia elementum
              integer. Integer eu ante ornare amet commetus.
            </p>
            <form method="post" action="#">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="6"
                  />
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        className="primary"
                        value="Send Message"
                      />
                    </li>
                    <li>
                      <input type="reset" value="Reset Form" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    <section id="footer">
      <PageFooter />
    </section>
  </Layout>
);

export default IndexPage;
