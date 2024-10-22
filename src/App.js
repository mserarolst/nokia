import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaMobileAlt, FaApple, FaWindows, FaArrowAltCircleRight, FaCamera, FaAndroid } from 'react-icons/fa';
import { IoApps } from "react-icons/io5";
import { TiVendorMicrosoft } from "react-icons/ti";
import { MdAttachMoney } from "react-icons/md";
import { IoBusinessSharp } from "react-icons/io5";

import './App.css';  // Afegim CSS personalitzat
import logo1 from './images/logo1.webp';
import logo2 from './images/logocorporation.webp';
import cityman from './images/cityman.jpg';
import nokia1011 from './images/nokia1011.jpg';
import nokia3310 from './images/nokia3310.jpg';
import quota from './images/quota.png';
import symbian from './images/symbian.svg';
import nokia7650 from './images/nokia7650.jpg';
import iphone from './images/iphone.jpeg';
import android from './images/android.jpeg';
import lumia from './images/lumia.png';
import microsoft from './images/microsoft.jpeg';



const events = [
  {
    date: '1865',
    title: 'Fundació de Nokia',
    description: 'Fredrik Idestam estableix una fàbrica de paper a Finlàndia.',
    icon: <FaArrowAltCircleRight />,
    image: logo1,
    iconStyle: { background: '#E91E63', color: '#fff' }
  },
  {
    date: '1967',
    title: 'Neix Nokia Corporation',
    description: "Nokia es va diversificar de manera significativa, entrant en sectors com l'electrònica i les telecomunicacions. Aquesta nova direcció va ser impulsada per la creació de Nokia Corporation l'any 1967, quan es va fusionar amb altres dues companyies finlandeses: Finnish Rubber Works i Finnish Cable Works.",
    icon: <IoBusinessSharp />,
    image: logo2,
    iconStyle: { background: '#333', color: '#fff' }
  },
  {
    date: '1987',
    title: 'Llançament del Nokia Mobira Cityman',
    description: 'Primer telèfon mòbil portàtil de Nokia.',
    icon: <FaMobileAlt />,
    image: cityman,
    iconStyle: { background: '#333', color: '#fff' }
  },
  {
    date: '1992',
    title: 'Llançament del Nokia 1011',
    description: "El llançament del Nokia 1011 l'any 1992 va ser un moment clau, ja que aquest model va ser un dels primers telèfons mòbils de la història a utilitzar la xarxa GSM.",
    icon: <FaMobileAlt />,
    image: nokia1011,
    iconStyle: { background: '#E91E63', color: '#fff' }
  },
  {
    date: '2000',
    title: 'Llançament del Nokia 3310',
    description: "Un dels seus majors èxits va ser el Nokia 3310, llançat el 2000, que es va convertir en un fenomen cultural. Aquest model va ser un dels telèfons més venuts de la història, amb més de 126 milions d'unitats comercialitzades, conegut pel joc Snake.",
    icon: <FaMobileAlt />,
    image: nokia3310,
    iconStyle: { background: '#333', color: '#fff' }
  },
  {
    date: '2001',
    title: 'Nokia domina el mercat',
    description: "Amb més del 40% de la quota de mercat, la companyia finlandesa controlava gairebé la meitat de les vendes mundials de telèfons mòbils, superant amb escreix la competència.",
    icon: <MdAttachMoney />,
    image: quota,
    iconStyle: { background: '#E91E63', color: '#fff' }
  },
  {
    date: '2002',
    title: 'Adopció de Symbian',
    description: "Symbian va ser un sistema operatiu pioner que permetia als usuaris gaudir d'una interfície avançada, gestionar correus electrònics, navegar per internet i utilitzar una àmplia gamma d'aplicacions, molt abans de l'arribada dels smartphones moderns.",
    icon: <IoApps />,
    image: symbian,
    iconStyle: { background: '#333', color: '#fff' }
  },
  {
    date: '2002',
    title: 'Nokia 7650, el primer mòbil amb càmara',
    description: "Nokia va ser pionera en la integració de càmeres en els telèfons mòbils. Amb models com el Nokia 7650 (llançat el 2002), que incorporava una càmera integrada.",
    icon: <FaCamera />,
    image: nokia7650,
    iconStyle: { background: '#E91E63', color: '#fff' }
  },
  {
    date: '2007',
    title: 'Arribada de l\'iPhone',
    description: "El 2007 va marcar un abans i un després en la indústria de la telefonia mòbil amb l'arribada de l'iPhone d'Apple, un dispositiu que va revolucionar completament el concepte de telèfon mòbil.",
    icon: <FaApple />,
    image: iphone,
    iconStyle: { background: '#E91E63', color: '#fff' }
  },
  {
    date: '2008',
    title: 'Google llança el sistema operatiu Android',
    description: "Google va llançar el sistema operatiu Android, que es va convertir en l'estàndard obert per a molts fabricants de telèfons intel·ligents, oferint una alternativa accessible i versàtil a l'ecosistema d'Apple.",
    icon: <FaAndroid />,
    image: android,
    iconStyle: { background: '#333', color: '#fff' }
  },
  {
    date: '2011',
    title: 'Associació amb Microsoft',
    description: 'En un intent per ressorgir i recuperar el terreny perdut, el 2011, Nokia va prendre una decisió estratègica molt important: va abandonar Symbian i va anunciar una associació amb Microsoft per utilitzar el sistema operatiu Windows Phone en els seus dispositius mòbils per competir amb iOS i Android.',
    icon: <FaWindows />,
    image: lumia,
    iconStyle: { background: '#333', color: '#fff' }
  },
  {
    date: '2014',
    title: 'Venda a Microsoft',
    description: "La situació es va tornar insostenible per a Nokia, i l'any 2014, la companyia va prendre la decisió de vendre la seva divisió de mòbils a Microsoft. Aquesta venda va posar punt final a l'era de Nokia com a líder mundial de la telefonia mòbil.",
    icon: <TiVendorMicrosoft />,
    image: microsoft,
    iconStyle: { background: '#E91E63', color: '#fff' }
  }
];

function App() {
  return (
    <div className="App">
      <h1>Cronologia: L'ascens i caiguda de Nokia</h1>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.date}
            iconStyle={event.iconStyle}
            icon={event.icon}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <p>{event.description}</p>
            <img src={event.image} alt={event.title} style={{ width: '100%' }} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default App;
