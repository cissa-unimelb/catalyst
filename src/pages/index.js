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
import umsu from '../assets/img/umsu.png';
import banner from '../assets/images/unijam_banner_final.png';
import fm from '../assets/img/firemonkeys_logo_updated.png';
import msft from '../assets/img/sponsors/microsoft.png';
import anz from '../assets/img/sponsors/anz.png';
import rome2rio from '../assets/img/sponsors/rome2rio.png';
import imc from '../assets/img/sponsors/imc.png';
import telstra from '../assets/img/sponsors/telstra_new.png';
import atlassian from '../assets/img/sponsors/atlassian.png';
import akuna from '../assets/img/sponsors/akuna.png';
import deloitte from '../assets/img/sponsors/deloitte.png';
import mcgrath from '../assets/img/sponsors/mcgrathnicol.png';
import facebook from '../assets/img/sponsors/facebook.png';
import ey from '../assets/img/sponsors/ey.png';
import commbank from '../assets/img/sponsors/commbank.png';
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
  { id: 'seven', name: 'Submit Your Game' },
  { id: 'eight', name: 'Contact Us' }
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
                For the hackathon, teams of up to four students develop and bring their own computer game to life. Afterwards, each creation will be submitted online, judged by participating clubs and sponsors, and made available to download.
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
                Bonus points are awarded for including the suprise twist elements of teddy bears, masks and pancakes.
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
                If you’re feeling competitive, multiple prizes are up for grabs for the most impressive games of the event. There are prizes for the top 3 teams, as well as three runner-up prizes for most enjoyable, most creative and most related to theme. 
              </p>
              <p>The prizes are:</p>
  
              <ul>
                <li><b>1st place:</b> A game from EA and $200 worth of vouchers each.</li>
                <li><b>2nd place:</b> $150 worth of vouchers each.</li>
                <li><b>3rd place:</b> $100 worth of vouchers each.</li>
                <li><b>Runner-up prizes:</b> A 3-month AnimeLab membership and an anime-related video game for PC each.</li>
              </ul>
              <p>Vouchers include JB Hi-Fi gift cards and UberEats vouchers.</p>
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
                  iconStyle={{
                    background: '#0d98ba',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">3rd August - 16th August</h3>
                  <h4 className="vertical-timeline-element-subtitle">Registration and Team Formation Period</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className=""
                  iconStyle={{
                    background: '#0d98ba',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">17th August - 23rd August</h3>
                  <h4 className="vertical-timeline-element-subtitle">Development and Submission Period</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className=""
                  iconStyle={{
                    background: '#0d98ba',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">4th September</h3>
                  <h4 className="vertical-timeline-element-subtitle">Winners Announced</h4>
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
              <h3>Prizes By</h3>
              <h4><img src={fm} alt="" width="100"/></h4>
              <p>
                Based in Melbourne, Australia, Firemonkeys Studios is an EA Studio focused on the development and delivery of video games, making them the perfect headline partner of our game jam event. 
                <br/>
                Read more about Firemonkeys <a className="text" href="https://ea.com/ea-studios/firemonkeys" target="_onblank">here</a>.
              </p>

              <h3>Sponsors</h3>
              <h4>Diamond</h4>
              <h4>
                <img src={msft} alt="" height="60"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={anz} alt="" height="40" style={{transform:'translateY(-15px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h4>
              <hr/>
              <h4>Platinum</h4>
              <h4>
                <img src={janest} alt="" height="40"/>
              </h4>
              <hr/>
              <h4>Gold</h4>
              <h4>
                <img src={canva} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={optiver} alt="" width="100" style={{transform:'translateY(-10px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={rome2rio} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={imc} alt="" width="100" style={{transform:'translateY(-10px'}}/>
                <br/>
                <img src={telstra} alt="" width="40"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={atlassian} alt="" width="125" style={{transform:'translateY(-10px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={akuna} alt="" width="125"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={deloitte} alt="" width="100" style={{transform:'translateY(-10px'}}/>
              </h4>
              <hr/>
              <h4>Silver</h4>
              <h4>
                <img src={mcgrath} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={facebook} alt="" width="150"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={ey} alt="" width="50" style={{transform:'translateY(-15px'}}/>
              </h4>
              <hr/>
              <h4>Bronze</h4>
              <h4>
                <img src={commbank} alt="" width="100"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h4>
              <hr/>

              <h3>Affiliations</h3>
              <br/>
              <h4>
                <img src={umsu} alt="" width="200"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                        UniJam is a free game development hackathon! The only thing you need to do is <a className="text" href="#seven">Sign Up</a>.
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
                        The theme this year is '<i>connections</i>'. Bonus points are available for including the suprise twist elements of teddy bears, masks and pancakes.
                      </td>
                    </tr>
                    <tr>
                      <td>Who can participate?</td>
                      <td>
                        All students can take part, regardless of discipline or level of experience. At least one member of each team must be a current student at the University of Melbourne. Prizes will only be distributed to University of Melbourne students. If you are not sure if your team is eligible, please <a className="text" href="#eight">contact us</a>.
                      </td>
                    </tr>
                    <tr>
                      <td>What if I’ve never developed a game before?</td>
                      <td>
                        Don’t worry! Hackathons are a great opportunity to learn new technologies as you go, and you’ll have teammates by your side. UniJam will help you submit your game, and we can also offer guidance if you don’t know where to start.
                      </td>
                    </tr>
                    <tr>
                      <td>What do I do if I don't have a team?</td>
                      <td>
                        You can find a team on the <a className="text" href="https://discord.gg/82B9z7A">UniJam Discord</a>. In the "general channel", you can find others who are also looking for a team. Once you have found your teammates, you can add a reaction in the "team-allocation channel" to be placed into a private team chat with your teammates where you can talk privately and discuss ideas. If you accidentally reacted to the wrong team and were added to the wrong team chat, you can simply react again to leave.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        How many people can be in a team?
                      </td>
                      <td>
                        Teams can have 2 to 4 members.
                      </td>
                    </tr>
                    <tr>
                      <td>How will the prizes be announced and distributed?</td>
                      <td>
                        All of our prizes will be distributed digitally. Winning teams will be announced on the <a className="text" href="https://www.facebook.com/events/311994066613856/">UniJam Facebook page</a> and contacted individually.
                      </td>
                    </tr>
                    <tr>
                      <td>What does submission look like?</td>
                      <td>
                        You will find a step-by-step instruction guide in the <a className="text" href="#seven">Submit Your Game</a> section of the page!
                      </td>
                    </tr>
                    <tr>
                      <td>What can't I include in the game?</td>
                      <td>
                        Nothing you would be ashamed to show your grandma :)
                      </td>
                    </tr>
                    <tr>
                      <td>What are the rules in regards to copyright?</td>
                      <td>
                        You are free to use any public resource either of your own work or under an open license. However, the judging panel will take originality into account whilst judging your game.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section id="six">
            <div className="container">
              <h3>Sign Up</h3>
              <p>
                <b>Sign ups are now closed.</b>
              </p>
              <p>
                You are welcome to organise a team of up to four before the event. Only one member of your team should complete the above form.
              </p>
              <p>
                If you don’t have a team, join the <a className="text" href="https://discord.gg/82B9z7A">UniJam Discord server</a>. In the "general channel", you can find others who are also looking for a team. Once you have found your teammates, you can add a reaction in the "team-allocation channel" to be placed into a private team chat with your teammates.
              </p>
              <p>
                Feel free to <a className="text" href="#eight">reach out to us</a> if you are having any problems finding or registering a team.
              </p>
            </div>
          </section>
          <section id="seven">
            <div className="container" >
              <h3>Submit Your Game</h3>
              <p>
                The below how-to guide describes the steps for game submission.
              </p>
              <p>
                <a href={submission_guide} target="_onblank">Click here to view the Submission Guidelines.</a>
              </p>
              <p>
                This guide highlights the restrictions we place on submissions and demonstrates the submission process. Submissions should include an executable file and set-up instructions. To demonstrate key features, you can also choose to add a video up to 5 minutes long to your itch.io submission.
              </p>
              <p>
                We encourage teams to read and understand the submission guidelines well before it becomes time to submit.
              </p>
            </div>
          </section>
          <section id="eight">
            <div className="container">
              <h3>Contact Us</h3>
              <p>
                Any further questions? Reach out to us at <a href="mailto:unijam@unijam.org.au">unijam@unijam.org.au</a>.
              </p>
              <p>You can connect with individual clubs through our Facebook pages.
              </p>
              <p>
                <i className="fa fa-facebook-square" aria-hidden="true" style={{fontSize: "28px"}}>&nbsp;</i>
                <a className="text" href="https://facebook.com/cissa.unimelb/" target="_onblank">CISSA</a> <br/> <br/>
                <i className="fa fa-facebook-square" aria-hidden="true" style={{fontSize: "28px"}}>&nbsp;</i>
                <a className="text" href="https://facebook.com/codec.unimelb/" target="_onblank">CODEC</a> <br/> <br/>
                <i className="fa fa-facebook-square" aria-hidden="true" style={{fontSize: "28px"}}>&nbsp;</i>
                <a className="text" href="https://www.facebook.com/UoMAMC/" target="_onblank">AMC</a> <br/> <br/>
                <i className="fa fa-facebook-square" aria-hidden="true" style={{fontSize: "28px"}}>&nbsp;</i>
                <a className="text" href="https://facebook.com/groups/seegamers/" target="_onblank">SEE</a> <br/> <br/>
              </p>
              {/* <p>
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"28px"}}>&nbsp;</i>
                <a className="text" href="mailto:events@cissa.org.au">events@cissa.org.au</a> <br/> <br/>
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"28px"}}>&nbsp;</i>
                <a className="text" href="mailto:seegamers@gmail.com">seegamers@gmail.com</a> <br/> <br/>
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"28px"}}>&nbsp;</i>
                <a className="text" href="mailto:enquiries@amc.moe">enquiries@amc.moe</a> <br/> <br/>
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:"28px"}}>&nbsp;</i>
                <a className="text" href="mailto:codec.unimelb@gmail.com">codec.unimelb@gmail.com</a>
              </p> */}
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
