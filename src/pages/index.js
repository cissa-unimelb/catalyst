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
import ea from '../assets/img/Electronic_Arts_2020.svg';

const sections = [
  { id: 'one', name: 'About' },
  { id: 'two', name: 'Prizes' },
  { id: 'three', name: 'Timeline' },
   { id: 'four', name: 'Sign up' },
  { id: 'five', name: 'FAQ' }
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
                <p>About</p>
              </header>
              <p>
                UniJam is an online video game development hackathon for students at the University of Melbourne. The event is organised in collaboration with the Computing and Information Systems Students Association (CISSA), Society for Electronic Entertainment (SEE), Anime and Manga Club (AMC) and Community for Digital Entertainment Creation (CODEC).
              </p>
              <p>
                For the hackathon, teams of up to four students develop and bring their own computer game to life. Afterwards, each creation will be submitted online, judged by participating clubs and made available to download.
              </p>
              <p>
                Students are given creative freedom around this year’s theme, <i>‘connections’</i>, and are encouraged to get inspired creating art assets, music and unique game features. Submissions will be judged on a variety of factors, including:
                <ul>
                  <li>
                    Playability.
                  </li>
                  <li>
                    Originality.
                  </li>
                  <li>
                    Relatedness to theme.
                  </li>
                </ul>
              </p>
              <p>
                UniJam offers an opportunity for students to:
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
              The prizes are:
              <ul>
                <li>JB Hi-Fi gift cards</li>
                <li>EA video games</li>
                <li>Crunchyroll memberships</li>
                <li>Uber Eats gift cards</li>
                <li>Anime-related video games</li>
                <li>Adobe Creative Cloud memberships</li>
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
                  date="17th August"
                  iconStyle={{
                    background: 'rgb(243, 150, 120)',
                    color: '#fff',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">Monday</h3>
                  <h4 className="vertical-timeline-element-subtitle">Development Week</h4>
                  The Hackathon begins! Week 3 of Semester 2 marks the start of a week of hacking to develop your game.
{/*                   <p>
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
                  </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className=""
                  date="23rd August"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                  <h3 className="vertical-timeline-element-title">Friday</h3>
                  <h4 className="vertical-timeline-element-subtitle">Development Week Ends</h4>
                  You're done! All games are submitted.
{/*                   <p>
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
                  </p> */}
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </section>
          <section id="four">
            <div className="container">
              <h3>Sign up</h3>
              <p style={{fontWeight: 'bold'}}><a className="text" href="https://docs.google.com/forms/d/e/1FAIpQLScBo1ITQc0iD-rm_llcT1D4WEwtJc7X43ZjmZNRWVb0EuX71g/viewform?usp=sf_link">Click here to sign up!</a></p>

              <p>You are welcome to organise a team of up to four before the event. Only one member of each team should complete the above form.</p>

              <p>If you are signing up as an individual, complete the form and keep your eyes on this space: we'll soon have a UniJam Discord server where you can reach out to others also looking for a team!</p>

              <p>To submit your game, follow the <a className="text" href="https://drive.google.com/file/d/1WcJVRGmTXb6dYZnuBhPH4vMF41SZGFA2/view">instructions here.</a></p>

              <p>Registration closes on the 16th of August.</p>
             {/*  <h4><img src={ea} alt="" height="40"/></h4>
              <p>
                Electronic Arts Inc (EA) is a global leader in digital interactive entertainment. EA is in the business of developing and publishing sports video games, making them the perfect sponsor of our game jam event this August. 
                <br/>
                Read more about EA <a className="text" href="https://www.ea.com/about">here</a>.
              </p>
              <h4>Text</h4> */}
             {/*  <p>
                This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
                <i>italic</i> and this is <em>emphasized</em>. This is{' '}
                <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                This is <u>underlined</u> and this is code:{' '}
                <code>for (;;) ... </code>. Finally,{' '}
                <a href="/#">this is a link</a>.
              </p>
              <hr /> */}
{/*               <header>
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
              <h3>FAQ</h3>
              <div className="table-wrapper">
                <table>
                  <tbody>
                    <tr>
                      <td>How much does it cost?</td>
                      <td>
                        UniJam is a free game development hackathon! That's right - it's 100% free! The only thing you need to do is sign up for the event by filling out the form at the top of this website.
                      </td>
                    </tr>
                    <tr>
                      <td>But... what is a hackathon?</td>
                      <td>
                        In a hackathon, developers and designers alike spend entire days hacking to create a prototype to present and pitch to a panel of judges. UniJam is a fun-filled week of designing and coding. It’s a place to improve your skills, meet new people and develop an awesome game.     
                      </td>
                    </tr>
                    <tr>
                      <td>What's the theme?</td>
                      <td>
                        The theme this year is <i>‘connections’</i>.
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
