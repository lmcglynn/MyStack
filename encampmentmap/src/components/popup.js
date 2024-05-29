import React from 'react'
import './Popup.css'

const content = [
  {
    name: 'photo0',
    title: 'Royce Hall Aftermath',
    image: 'https://wp.dailybruin.com/images/2024/05/NG3.jpg',
    description: "Pieces of the barricade lie near the entrance of Royce Hall’s archway, covered in signage and graffiti. A section of the graffiti in white reads “ACAB,” an acronym for “All cops are bastards” while another reads “Fuck Fascism.” On two sides of a pillar, a piece of graffiti in green says, “In the darkness and the dawn, a red star rises,” a reference to the concluding lines of a Langston Hughes poem on the Bolshevik leader Vladimir Lenin.",
    byline: "(Nicolas Greamo/Daily Bruin senior staff)",
    date: "May 2, 2024 6:15 a.m."
  },
  {
    name: 'photo1',
    title: 'Powell Library Aftermath',
    image: 'https://wp.dailybruin.com/images/2024/05/NG4.jpg',
    description: "A large Palestinian flag lies on the ground in front of Powell Library. Around 5 a.m. Thursday, a law enforcement officer removed the flag from its mount toward the center of the encampment and threw it in the direction of Royce Hall. The flag rests beside the scattered remains of the encampment, sprawling out between the two buildings that are the hallmarks of UCLA’s campus.",
    byline: "(Nicolas Greamo/Daily Bruin senior staff)",
    date: "May 2, 2024 6:17 a.m."
  },
  {
    name: 'photo2',
    title: 'Defusing Tensions',
    image: 'https://wp.dailybruin.com/images/2024/05/3.attack.ZI_.1.jpg',
    description: "An individual walks between members of the encampment and counter-protest group in an attempt to defuse the tension and stave off fighting.",
    byline: "(Zoraiz Irshad/Daily Bruin senior staff)",
    date: "May 1, 2024 1:04 a.m."
  },
  {
    name: 'photo3',
    title: 'Press Conference',
    image: 'https://wp.dailybruin.com/images/2024/05/7.sweep_.BJM_1.jpg',
    description: "With the towers of Royce Hall in the background, protesters hold Palestinian flags and signs up. The protesters appeared at the top of Janss Steps during the press conference held by the encampment at 3 p.m. Wednesday.",
    byline: "(Brandon Morquecho/Photo editor)",
    date: "May 1, 2024 6:46 p.m."
  },
  {
    name: 'photo4',
    title: 'Barrier Removal',
    image: 'https://wp.dailybruin.com/images/2024/05/15.sweep_.ZI_5.jpg',
    description: "A division of CHP uses tools to cut through the ropes and zip ties holding together the metal barricades around the encampment.",
    byline: "(Zoraiz Irshad/Daily Bruin senior staff)",
    date: "May 2, 2024 3:08 a.m."
  },
  {
    name: 'photo5',
    title: 'Setting Up',
    image: 'https://wp.dailybruin.com/images/2024/04/1.NG2_.jpg',
    description: "A cross-section of the encampment from above on Friday afternoon shows two sprawling groups of tents separated by a walkway, and surrounded by wooden barricades and metal fencing.",
    byline: "(Nicolas Greamo/Daily Bruin senior staff)",
    date: "April 26, 2024 6:16 p.m."
  },
  {
    name: 'photo6',
    title: 'Stand Off',
    image: 'https://wp.dailybruin.com/images/2024/05/web.news_.studentsdenounce.BJM_.jpg',
    description: "Police officers outside the back of Royce Hall are pictured wearing riot gear. Law enforcement cleared the Palestine solidarity encampment at UCLA in the early hours of Thursday morning after a dispersal order was issued.",
    byline: "(Brandon Morquecho/Photo editor)",
    date: "May 1, 2024 9:13 p.m."
  },
  {
    name: 'photo7',
    title: 'Fence',
    image: 'https://wp.dailybruin.com/images/2024/04/web.news_.encampment.midnight.4.28.24JCC.jpg',
    description: "A counter-protester attempts to breach a fence outside the encampment in Dickson Plaza early Sunday morning. The fence was placed Thursday night by security in front of the encampment organized by Students for Justice in Palestine and the UC Divest Coalition at UCLA.",
    byline: "(Joseph Crosby/Daily Bruin senior staff)",
    date: "April 27, 2024 11:09 p.m."
  },
  {
    name: 'photo8',
    title: 'Cleanup',
    image: 'https://wp.dailybruin.com/images/2024/05/web.news_.encampmentcleanup.JC_.jpg',
    description: "UCLA staff clears Dickson Plaza of debris following Thursday morning’s police sweep of the Palestine solidarity encampment.",
    byline: "(Jeremy Chen/Photo editor)",
    date: "May 2, 2024 11:14 a.m."
  },
  {
    name: 'photo9',
    title: 'Dodd Hall March',
    image: 'https://wp.dailybruin.com/images/2024/05/web.news_.UCPDrelease5.8.ADL_.jpg',
    description: "Individuals are pictured in front of Dodd Hall on Monday. Individuals, including students, marched from Moore Hall to Dodd Hall after 44 people were arrested in Parking Structure 2, according to a UCPD news release Wednesday.",
    byline: "(Anna Dai-Liu/Daily Bruin senior staff)",
    date: "May 6, 2024 9:36 a.m."
  },
  {
    name: 'photo10',
    title: 'Chants',
    image: 'https://wp.dailybruin.com/images/2024/05/12.sweep_.MF_4.jpg',
    description: "A pro-Palestine protester chants at the top of Janss Steps after a group of police officers initially retreated from the encampment.",
    byline: "(Myka Fromm/Photo Editor)",
    date: "May 2, 2024 12:56 a.m."
  },
  {
    name: 'photo11',
    title: 'LASD Buses',
    image: 'https://wp.dailybruin.com/images/2024/05/NG11.jpg',
    description: "Law enforcement officers from the LA County Sheriff’s Department and California Highway Patrol gather near a bus being used to transport detained protesters after the sweep of the encampment Thursday morning.",
    byline: "(Nicolas Greamo/Daily Bruin senior staff)",
    date: "May 2, 2024 6:49 a.m."
  },
  {
    name: 'photo12',
    title: 'Livestream',
    image: 'https://wp.dailybruin.com/images/2024/05/14.sweep_.BJM_5.jpg',
    description: "A man wearing a jacket that reads “Anti Genocide Social Club” records a livestream of a line of CHP officers between Royce Hall and Haines Hall. The line of officers ordered a clearing of the area and threatened to arrest three Daily Bruin reporters.",
    byline: "(Brandon Morquecho/Photo editor)",
    date: "May , 2024"
  },
  {
    name: 'photo13',
    title: 'Prayer',
    image: 'https://wp.dailybruin.com/images/2024/04/4.AGS2_.jpg',
    description: "Some protesters in the Dickson Plaza encampment participate in Jumaa prayer while other members of the protest form a circle around those praying.",
    byline: "(Aidan Sun/Daily Bruin)",
    date: "April 26, 2024 12:23 p.m."
  },
  {
    name: 'photo14',
    title: 'Banner',
    image: 'https://wp.dailybruin.com/images/2024/04/8.DS4_-1.jpg',
    description: "A banner that reads “Palestine Solidarity Encampment” features a watermelon, and stands across a food and necessities tent. The watermelon has become an unofficial symbol of protest for Palestine supporters, representing defiance and resistance against the occupation of Palestine.",
    byline: "(Darlene Sanzon/Daily Bruin)",
    date: "April 25, 2024 9:29 a.m."
  },
  {
    name: 'photo15',
    title: 'Posters',
    image: 'https://wp.dailybruin.com/images/2024/04/9.AGS1_.jpg',
    description: "Protesters place homemade signs with pro-Palestinian slogans around a second layer of metal fencing that was erected by UCLA officials Friday morning after constructing an initial layer Thursday night.",
    byline: "(Aidan Sun/Daily Bruin)",
    date: "April 26, 2024 12:02 p.m."
  },
  {
    name: 'photo16',
    title: 'Solidarity',
    image: 'https://wp.dailybruin.com/images/2024/04/12.JZH3_.jpg',
    description: "Protesters encircle Dickson Plaza with arms intertwined in display of solidarity.",
    byline: "(Julia Zhou/Photo editor)",
    date: "April 25, 2024 5:32 p.m."
  },
  {
    name: 'photo17',
    title: 'Counter-Protesters',
    image: 'https://wp.dailybruin.com/images/2024/04/17.JZH1_.jpg',
    description: "Counter-protesters gather in front of Royce Hall on Thursday afternoon. The counter-protesters and protesters, separated by Contemporary Services Corporation security officers, confronted each other at Dickson Plaza.",
    byline: "(Julia Zhou/Photo editor)",
    date: "April 25, 2024 5:47 p.m."
  },
  {
    name: 'photo18',
    title: 'Pro-Israel Rally',
    image: 'https://wp.dailybruin.com/images/2024/04/3-ZI2.jpg',
    description: "Following a musical performance at the pro-Israel rally – which was organized in response to the encampment – a singer shares an embrace with another event speaker.",
    byline: "(Zoraiz Irshad/Daily Bruin senior staff)",
    date: "April 28, 2024 2:47 p.m."
  },
  {
    name: 'photo19',
    title: 'Ripped Poster',
    image: 'https://wp.dailybruin.com/images/2024/04/10-SS1.jpg',
    description: "A crowd watches a counter-protester rip through a poster displaying support for Palestine with a switchblade during a rally Sunday that was led by the IAC.",
    byline: "(Sharla Steinman/Daily Bruin senior staff)",
    date: "April 28, 2024 11:58 a.m."
  },
  {
    name: 'photo20',
    title: 'Confrontation',
    image: 'https://wp.dailybruin.com/images/2024/04/11-SS2.jpg',
    description: "A counter-protester wearing a Donald Trump 2024 hat and holding a half-Israeli and half-American flag confronts Palestine supporters.",
    byline: "(Sharla Steinman/Daily Bruin senior staff)",
    date: "April 28, 2024"
  },
  {
    name: 'photo21',
    title: 'Flag',
    image: 'https://wp.dailybruin.com/images/2024/04/13-JC2.jpg',
    description: "Pro-Palestine demonstrators wave a large Palestinian flag.",
    byline: "(Jeremy Chen/Photo editor)",
    date: "April 28, 2024 12:17 p.m."
  },
  // {
  //   name: 'photo',
  //   title: '',
  //   image: '',
  //   description: "",
  //   byline: "",
  //   date: "May 1, 2024"
  // },

]

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <div className='date'>
          {content[props.popupTitle].date}
        </div>
        <h2>{content[props.popupTitle].title}</h2>
        <br />
        <img src={content[props.popupTitle].image} alt='altText' width="100%" height="100%" />
        <br /><br />
        <p> {content[props.popupTitle].description} </p>
        <div className='byline'>
          {content[props.popupTitle].byline}
        </div>
        <div className='close-btn' onClick={() => props.setTrigger(false)}>
          <svg xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
            alt='Close'>
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
        </div>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup