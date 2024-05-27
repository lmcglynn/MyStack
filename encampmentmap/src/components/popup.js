import React from 'react'
import './Popup.css'

const content = [
  {
    name: 'photo0',
    title: 'Royce Hall Aftermath',
    image: 'https://wp.dailybruin.com/images/2024/05/NG3.jpg',
    description: "Pieces of the barricade lie near the entrance of Royce Hall’s archway, covered in signage and graffiti. A section of the graffiti in white reads “ACAB,” an acronym for “All cops are bastards” while another reads “Fuck Fascism.” On two sides of a pillar, a piece of graffiti in green says, “In the darkness and the dawn, a red star rises,” a reference to the concluding lines of a Langston Hughes poem on the Bolshevik leader Vladimir Lenin."
  },
  {
    name: 'photo1',
    title: 'Powell Library Aftermath',
    image: 'https://wp.dailybruin.com/images/2024/05/NG4.jpg',
    description: "A large Palestinian flag lies on the ground in front of Powell Library. Around 5 a.m. Thursday, a law enforcement officer removed the flag from its mount toward the center of the encampment and threw it in the direction of Royce Hall. The flag rests beside the scattered remains of the encampment, sprawling out between the two buildings that are the hallmarks of UCLA’s campus."
  },
  {
    name: 'photo2',
    title: 'Defusing Tensions',
    image: 'https://wp.dailybruin.com/images/2024/05/3.attack.ZI_.1.jpg',
    description: "An individual walks between members of the encampment and counter-protest group in an attempt to defuse the tension and stave off fighting."
  }
]

function popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>{content[props.popupTitle].title}</h2>
        <br />
        <img src={content[props.popupTitle].image} alt='altText' width="100%" height="100%" />
        <br /><br />
        <p> {content[props.popupTitle].description} </p>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default popup