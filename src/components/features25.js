import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text5">
                      <span>{/*locale-text_hpfsme*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text1">
                      <span>{/*locale-text_Xb8Wbs*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text6">
                      <span>{/*locale-text_Ncs1P1*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text4">
                      <span>{/*locale-text_WtI9uH*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text2">
                      <span>{/*locale-text_G1mX0o*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text3">
                      <span>{/*locale-text_K2YeR_*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1584433144697-205892243f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYxNTEzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature3Title: undefined,
  feature1ImgAlt: 'Cybersecurity Services Image Alt Text',
  feature3Description: undefined,
  feature2ImgAlt: 'Educational Resources Image Alt Text',
  feature3ImgAlt: 'Client Attraction Image Alt Text',
  feature2Description: undefined,
  feature1Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1676364423874-19c785db3e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYxNTEzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1677790931097-597f80785ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYxNTEzMHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features25.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
}

export default Features25
