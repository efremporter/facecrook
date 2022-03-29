import React from 'react';

const OtherProjects = props => {
  return (
    <div className='feed-left-side'>
        <div className='other-projects-div'>
          <div className='mini-friend-index-header' id="other-projects-header">
            <span className='mini-friend-index-title' id="other-projects-title">Other Projects</span>
          </div>
          <ul className='other-projects-ul'>
            <li className='other-projects-li'>
              <a href="https://efrem-porter.com/" target="_blank"><img className="other-projects-img" src={window.portfolioWebsite}/></a>
              <a className="other-projects-name-anchor" href="https://efrem-porter.com/" target="_blank"><div>Portfolio Website</div></a>
            </li>
            <li className='other-projects-li'>
              <a href="https://collab-aa.herokuapp.com/#/" target="_blank"><img className="other-projects-img" src={window.collab}/></a>
              <a className="other-projects-name-anchor" href="https://collab-aa.herokuapp.com/#/" target="_blank"><div>ColLab</div></a>
            </li>
            <li className='other-projects-li'>
            <a href="https://efremporter.github.io/fruit_slicer/" target="_blank"><img className="other-projects-img" src={window.fruitSlicer}/></a>
              <a className="other-projects-name-anchor" href="https://efremporter.github.io/fruit_slicer/" target="_blank"><div>Fruit Slicer</div></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default OtherProjects