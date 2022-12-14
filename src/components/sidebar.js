import { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCode, faContactCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

import './sidebar.scss';

export default function Sidebar({height}) {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setLoading] = useState(true);

  const calculateElementHeight = () => {
    return [
      {height: height.home, tab: 'home'},
      {height: height.home + height.skills, tab: 'skills'},
      {height: height.home + height.skills + height.projects, tab: 'projects'},
      {height: height.home + height.skills + height.projects + height.contacts, tab: 'contacts'}
    ];
  }

  const calculation = useMemo(() => calculateElementHeight(), [height])

  const handleScroll = () => {
    const position = window.pageYOffset;
    calculation.every((element) => {
      
      if(position < element.height) {
        setActiveTab(element.tab);
        return false;
      }
      else return true;
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    setLoading(false);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, height]);

  return (
    <div className="sidebar">
        <div className="logo w-100">
          <img src={require('../assets/images/ja-logo.png')} alt='icon'/>
        </div>
        <ul className="nav flex-column mb-auto mt-auto">
          <li className={activeTab === 'home' ? 'nav-item active' : 'nav-item'}>
            <a href="#home">
              <FontAwesomeIcon icon={faHouse}/>
            </a>
          </li>
          <li className={activeTab === 'skills' ? 'nav-item active' : 'nav-item'}>
            <a href="#skills">
              <FontAwesomeIcon icon={faContactCard} />
            </a>
          </li>
          <li className={activeTab === 'projects' ? 'nav-item active' : 'nav-item'}>
            <a href="#projects">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </li>
          <li className={activeTab === 'contacts' ? 'nav-item active' : 'nav-item'}>
            <a href="#contacts">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
        </ul> 
        <div className="social-icons flex-column text-center">
            <SocialIcon url="https://www.linkedin.com/in/jade-andrie-rosales-2a4706223/" target='_blank' fgColor='white'/>
            <SocialIcon url="https://github.com/Frooge"  target='_blank' fgColor='white'/>
            <SocialIcon url="https://www.facebook.com/jade.rosales.90857/"  target='_blank' fgColor='white'/>
        </div>
    </div>
  )
}
