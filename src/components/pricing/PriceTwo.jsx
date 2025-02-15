import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import ArrowMore from '../../assets/images/icon/icon_13.svg';

const PriceTwoContent = [
    {
        name: 'Standard',
        price: '0',
        className: '',
        features: [
            '1 Domain', '1 Year Premium Support', 'Team fundraising'
        ],
        fade: 'fade-right',
        dataDelay: ''
    }, {
        name: 'Gold',
        price: '27.',
        price2: '99',
        className: 'active',
        features: [
            '1 Domain', '1 Year Premium Support', 'Team fundraising'
        ],
        fade: 'fade-up',
        dataDelay: '100'
    }, {
        name: 'Diamond',
        price: '39.',
        price2: '99',
        className: '',
        features: [
            '1 Domain', '1 Year Premium Support', 'Team fundraising'
        ],
        fade: 'fade-left',
        dataDelay: ''
    }
]

const PriceTwo = ({content}) => {
    const replace = 'https://abacies.bettertomorrow.green/'
    return (
        <Fragment>
            <div className="row justify-content-center">
                {/*PriceTwoContent.map((val, i) => (
                    <div key={i} className="col-lg-4 col-sm-6" data-aos={val.fade} data-aos-delay={100}>
                        <div className={`pr-table-wrapper tran3s mt-40 ${val.className}`}>
                            <div className="pack-name">{val.name}</div>
                            <div className="price">
                                <sup>$</sup>{val.price}
                                <sup>{val.price2}</sup>
                            </div>
                            <ul className="pr-feature style-none">
                                {val.features.map((list, i)=>(
                                    <li key={i}>{list}</li>
                                ))}
                            </ul>
                            <a href="#" className="btn-seven w-100 mt-50 lg-mt-30">Choose Plan</a>
                        </div>
                    </div>
                ))*/}
                {content && content.map((val, i) => (
                    <div key={i} className="col-lg-4 col-sm-6" data-aos='fade-In' data-aos-delay={100 * i + 1}>
                        <div className={`pr-table-wrapper tran3s mt-40 ${i % 2 === 0 ? 'active' : ''}`}>
                            <div className="pack-name"><Link to={val.url.replace(replace, '/')}>{val.title}</Link></div>
                            {/* <div className="price">
                                <sup>$</sup>{val.price}
                                <sup>{val.price2}</sup>
                            </div> 
                            <ul className="pr-feature style-none">
                                {val.features.map((list, i)=>(
                                    <li key={i}>{list}</li>
                                ))}
                            </ul> */}
                            <Link to={val.url.replace(replace, '/')} className="more-btn"><img src={ArrowMore} alt="" className="tran3s"/></Link>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default PriceTwo