import React, {PropTypes} from 'react';

const ProductNavigation = ({previousTitle, nextTitle, previousFunction, nextFunction}) => {
    const sayHi = (event) => {
        alert('hi ${title}');
    };

    return (
            <div className="navigation">
                <div className="inner-content nav-link">
                {previousTitle &&
                    <div>
                        <span className="nav-arrows">&#x25C0;</span><a href="#" onClick={previousFunction}>{previousTitle}</a>
                    </div>
                }
                &nbsp;
                </div>
                <div className="inner-content nav-link nav-link-right">
                {nextTitle &&
                    <div>
                        <a href="#" onClick={nextFunction}>{nextTitle}</a> <span className="nav-arrows">&#x25BA;</span>
                    </div>
                }
                </div>
            </div>
    );
};

ProductNavigation.propTypes = {
    previousTitle: React.PropTypes.string.isRequired,
    nextTitle: React.PropTypes.string.isRequired,
    previousFunction: React.PropTypes.func.isRequired,
    nextFunction: React.PropTypes.func.isRequired
};

export default ProductNavigation;