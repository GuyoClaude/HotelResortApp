import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'


export default class Services extends Component {
    state= {
        services:[
        {
            icon: <FaCocktail />,
            title:'Free cocktails',
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, maxime'

        },
        {
            icon:<FaHiking />,
            title:'Endless Hiking',
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, maxime'

        },
        {
            icon:<FaShuttleVan />,
            title:'Free rides',
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, maxime'

        },
        {
            icon:<FaBeer />,
            title:'Free drinkes',
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, maxime'

        }
    ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services'/>
                <div className="services-center">
                 {this.state.services.map((item, index) => {
                     return (
                         <article key={index} className='service'>
                         <span>{item.icon}</span>
                         <h6>{item.title}</h6>
                         <p>{item.info}</p>
                         
                         </article>
                     )
                 })}
                </div>
            </section>
        )
    }
}
