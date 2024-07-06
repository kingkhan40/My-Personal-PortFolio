import React, {useState} from 'react';
import './Qualifecation.css';

const Qualifecation = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }
    
  return (
    <section className="qualifectaion section " id='qualifectaion'>
       <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualifaction__container container">
        <div className="qualifaction__tab">
          <div className={toggleState === 1 ? "qualifaction__button qualification__active button--flex" : 
           "qualifaction__button button--flex "}
           onClick={() => toggleTab(1)}
           >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Eductaion
          </div>

          <div className={toggleState === 2 ? "qualifaction__button qualification__active button--flex" : 
           "qualifaction__button button--flex "}
           onClick={() => toggleTab(2)} >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experince
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : 
               "qualification__content" }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification title">Web Design</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023 - Present
                </div>

              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification__list"></span>
              </div>

            </div>
            <div className="qualification__data">
            <div></div>
            <div>
                <span className="qualification-rounder"></span>
                <span className="qualification__list"></span>
              </div>

              <div>
                <h3 className="qualification title">Art Director</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023 - Present
                </div>

              </div>

             

            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification title">Web Development</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023 - Present
                </div>

              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification__list"></span>
              </div>

            </div>
            <div className="qualification__data">
            <div></div>
            <div>
                <span className="qualification-rounder"></span>
                <span className="qualification__list"></span>
              </div>

              <div>
                <h3 className="qualification title">UI/UX Export</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - 2023
                </div>

              </div>

             

            </div>
          </div>
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : 
               "qualification__content" }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification title">Proudect Designer</h3>
                <span className="qualification__subtitle">Microsoft - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023 - Present
                </div>

              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification__list"></span>
              </div>

            </div>
            <div className="qualification__data">
            <div></div>
            <div>
                <span className="qualification-rounder"></span>
                <span className="qualification__list"></span>
              </div>

              <div>
                <h3 className="qualification title">UX Designer</h3>
                <span className="qualification__subtitle">Apple - USA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>

              </div>

             

            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - NewYork</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023 - Present
                </div>

              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification__list"></span>
              </div>

            </div>
           
          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualifecation;