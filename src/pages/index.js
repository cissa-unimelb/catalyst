import React, { useRef, useState } from 'react';
import MetaTags from 'react-meta-tags';
import axios from 'axios';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import '../assets/sass/timeline.css';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import Sidebar from '../components/Sidebar';

import banner from '../assets/images/unijam_banner_final.png';
import fm from '../assets/img/firemonkeys_logo.png';
import msft from '../assets/img/sponsors/microsoft.png';
import janest from '../assets/img/sponsors/jane street.png';
import canva from '../assets/img/sponsors/canva-ar21.svg';
import optiver from '../assets/img/sponsors/optiver.png';
import submission_guide from '../assets/docs/UNIJAM_Game_Submission_Guide.pdf';

const sections = [
  { id: 'one', name: 'About' },
  { id: 'two', name: 'Prizes' },
  { id: 'three', name: 'Timeline' },
  { id: 'four', name: 'Sponsors' },
  { id: 'five', name: 'FAQs' },
  { id: 'six', name: 'Sign Up' },
  { id: 'seven', name: 'Submission Instructions' }
];

const IndexPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isCaptchaSolved, setCaptchaSolved] = useState(false);
  const recaptchaRef = useRef();

  const updateFormData = event => {
    switch (event.target.name) {
      case 'name':
        setFormData({ ...formData, name: event.target.value });
        break;
      case 'email':
        setFormData({ ...formData, email: event.target.value });
        break;
      case 'subject':
        setFormData({ ...formData, subject: event.target.value });
        break;
      case 'message':
        setFormData({ ...formData, message: event.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('https://api.cissa.org.au/contact', {
      ...formData,
      recipient: 'eventsg@cissa.org.au',
      'g-recaptcha-response': recaptchaRef.current.getValue()})
      .then(response => {
      console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    recaptchaRef.current.reset();
  };

  return (
    <div className="wrapper">
    <MetaTags>
      <title>UniJam</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta id="meta-description" name="description" content="Game Development Hackathon" />
      <meta property="og:description" content="Game Development Hackathon"/>
      <meta id="og-title" property="og:title" content="UniJam" />
      <meta id="og-image" property="og:image" content="../assets/img/logo.svg" />
    </MetaTags>
    <Layout>
      <Sidebar sections={sections} />
      <div id="wrapper">
        <div id="main">
          <section id="one">
            <div className="image main" data-position="75% 75%">
              <img src={banner} alt="" />
            </div>
            <div className="container">
              <header className="major">
                <h2>UniJam 2020</h2>
              </header>
              <h3>About</h3>
              <p>
                UniJam is an online computer game development hackathon for students at the University of Melbourne. The event is organised in collaboration with the Computing and Information Systems Students Association (<a className="text" href="https://cissa.org.au" target="_onblank">CISSA</a>), Society for Electronic Entertainment (<a className="text" href="https://facebook.com/groups/seegamers/" target="_onblank">SEE</a>), Anime and Manga Club (<a className="text" href="https://amc.moe" target="_onblank">AMC</a>), and Community for Digital Entertainment Creation (<a className="text" href="https://facebook.com/codec.unimelb/" target="_onblank">CODEC</a>). 
              </p>
              <p>
                For the hackathon, teams of up to four students develop and bring their own computer game to life. Afterwards, each creation will be submitted online, judged by participating clubs and made available to download.
              </p>
              <p>
                Students are given creative freedom around this year's theme, '<i>connections</i>', and are encouraged to get inspired creating art assets, music, and unique game features. Submissions will be judged on a variety of factors, including:
                <ul>
                  <li>
                    Playability
                  </li>
                  <li>
                    Originality
                  </li>
                  <li>
                    Relatedness to theme
                  </li>
                </ul>
              </p>
              <p>
                UniJam offers students an opportunity to:
                <ul>
                  <li>
                    Practise their skills and display their strengths within various disciplines (software development, game design, visual arts).
                  </li>
                  <li>
                    Learn and apply new skills and techniques related to game development.
                  </li>
                  <li>
                    Work as a team.
                  </li>
                  <li>
                    Create an exciting game!
                  </li>
                </ul>
              </p>
            </div>
          </section>

          <section id="two">
            <div className="container">
              <h3>Prizes</h3>
              <p>
                If you’re feeling competitive, multiple prizes are up for grabs for the most impressive games of the event. First, second and third places have first preferences of prize choice. Runner-up prizes are also available for most related to theme, most enjoyable and most creative.
              </p>
              <ul>
                <li>JB-Hi-Fi gift cards</li>
                <li>EA video games</li>
                <li>Crunchyroll memberships</li>
                <li>UberEats coupons</li>
                <li>Anime-related video games</li>
                <li>Abode Creative Cloud memberships</li>
              </ul>
            {/*<ul className="feature-icons">
              <li className="fa-code">Write all the code</li>
              <li className="fa-cubes">Stack small boxes</li>
              <li className="fa-book">Read books and stuff</li>
              <li className="fa-coffee">Drink much coffee</li>
              <li className="fa-bolt">Lightning bolt</li>
              <li className="fa-users">Shadow clone technique</li>
              </ul>} */}
            </div>
          </section>

          <section id="three">
            <div className="container">
              <h3>Timeline</h3>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className=""
                  date="&nbsp;&nbsp;&nbsp;&nbsp;3 August - 16 August"
                  iconStyle={{
                    background: '#ff8c14',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">Monday, Week 1 - Sunday, Week 2</h3>
                  <h4 className="vertical-timeline-element-subtitle">Registration and Team Formation Period</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className=""
                  date="17 August - 23 August&nbsp;&nbsp;&nbsp;&nbsp;"
                  iconStyle={{
                    background: '#218c14',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">Monday, Week 3 - Sunday, Week 3</h3>
                  <h4 className="vertical-timeline-element-subtitle">Development Period</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className=""
                  date="&nbsp;&nbsp;&nbsp;&nbsp;24 August - 27 August"
                  iconStyle={{
                    background: '#14218c',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">Monday, Week 4 - Thursday, Week 4</h3>
                  <h4 className="vertical-timeline-element-subtitle">Committee Shortlisting</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className=""
                  date="28 August - 4 September&nbsp;&nbsp;&nbsp;&nbsp;"
                  iconStyle={{
                    background: '#8c1421',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">Friday, Week 4 - Friday, Week 5</h3>
                  <h4 className="vertical-timeline-element-subtitle">Final 5 Teams Announced and Public Voting Period</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className=""
                  date="&nbsp;&nbsp;&nbsp;&nbsp;9 September"
                  iconStyle={{
                    background: '#7f148c',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">Wednesday, Week 6</h3>
                  <h4 className="vertical-timeline-element-subtitle">Winner Is Announced</h4>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                  className=""
                  date="1st September"
                  iconStyle={{ background: 'rgb(33, 140, 20)' }}
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
                </VerticalTimelineElement> */}
              </VerticalTimeline>
            </div>
          </section>
          <section id="four">
            <div className="container">
              <h3>Headline Partner</h3>
              <h4><img src={fm} alt="" width="100"/></h4>
              <p>
                Based in Melbourne, Australia, Firemonkeys Studios is an EA Studio focused on the development and delivery of video games, making them the perfect sponsor of our game jam event this August. 
                <br/>
                Read more about Firemonkeys <a className="text" href="https://ea.com/ea-studios/firemonkeys">here</a>.
              </p>

              <h3>Diamond</h3>
              <h4>
                <img src={msft} alt="" height="70"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={msft} alt="" height="70"/>
              </h4>

              <h3>Platinum</h3>
              <h4>
                <img src={janest} alt="" height="55"/>
              </h4>
            
              <h3>Gold</h3>
              <h4>
                <img src={canva} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={optiver} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={canva} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={optiver} alt="" width="100"/>
                <br/>
                <img src={canva} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={optiver} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={canva} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={optiver} alt="" width="100"/>
              </h4>
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
                      <td>How much does it cost?</td>
                      <td>
                        UniJam is a free game development hackathon! That's right - it's
                        100% free! The only thing you need to do is sign up for the event by filling out the relevant form outlined in the <u>Sign Up</u> section of this page!
                      </td>
                    </tr>
                    <tr>
                      <td>What is a hackathon?</td>
                      <td>
                        In a hackathon, developers and designers alike spend entire days hacking to create a prototype to present and pitch to a panel of judges. UniJam is a fun-filled week of designing and coding. It’s a place to improve your skills, meet new people and develop an awesome game.
                      </td>
                    </tr>
                    <tr>
                      <td>What is the theme?</td>
                      <td>
                        The theme this year is '<i>connections</i>'.
                      </td>
                    </tr>
                    <tr>
                      <td>Who can participate?</td>
                      <td>
                        All current students at the University of Melbourne can take part, regardless of discipline or level of experience.
                      </td>
                    </tr>
                    <tr>
                      <td>What if I’ve never developed a game before?</td>
                      <td>
                        Don’t worry! Hackathons are a great opportunity to learn new technologies as you go, and you’ll have teammates by your side. UniJam will help you submit your game, and we can also offer guidance if you don’t know where to start.
                      </td>
                    </tr>
                    <tr>
                      <td>How do I sign up?</td>
                      <td>
                        Just head over to the <u>Sign Up</u> section of this page and follow the instructions :)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section id="six">
            <div className="container">
              <h3>Sign up</h3>
              <p>
                <a className="text" href="https://unijam.org.au/signup" target="_onblank">Click here to sign up!</a>
              </p>
              <p>
                You are welcome to organise a team of up to four before the event. Only one member from your team should complete the above form.
              </p>
              <p>
                If you are signing up as an individual, complete the form and watch this space: we will have a Unijam Discord server where you can reach out to others also looking for a team! 
              </p>
              <p>
                <strong>Registration closes on the 16th of August.</strong>
              </p>
              <p>
                Ready to submit your game? See the <u>Submission Instructions</u> section of this page!
              </p>
            </div>
          </section>
          <section id="seven">
            <div className="container" >
              <h3>How to submit your game</h3>
              <p>
                There are certain requirements that teams are asked to follow in the submission of their games. For this reason, we have put together a step-by-step instruction guide to demonstrate the submission process.
              </p>
              <p>
                <a className="text" href={submission_guide} target="_onblank">Click here to view the Submission Guidelines.</a>
              </p>
              <p>
                We encourage you to read and understand the submission guidelines well before it becomes time to submit.
              </p>
            </div>
          </section>
          <section id="eight">
            <div className="container">
              <h3>Contact Us</h3>
              <p>
                Feel free to reach out to us via email!
              </p>
              <p>
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"28px"}}>&nbsp;</i>
                <a className="text" href="mailto:events@cissa.org.au">events@cissa.org.au</a> <br/> <br/>
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"28px"}}>&nbsp;</i>
                <a className="text" href="mailto:seegamers@gmail.com">seegamers@gmail.com</a> <br/> <br/>
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"28px"}}>&nbsp;</i>
                <a className="text" href="mailto:enquiries@amc.moe">enquiries@amc.moe</a> <br/> <br/>
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"28px"}}>&nbsp;</i>
                <a className="text" href="mailto:codec.unimelb@gmail.com">codec.unimelb@gmail.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <section id="footer">
        <PageFooter />
      </section>
    </Layout>
  </div>
  );
};

export default IndexPage;
