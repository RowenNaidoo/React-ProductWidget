import React, {PropTypes} from 'react';

const ProductHeader = ({toggleFunction, title, contentClass}) => {
    return (
        <div className="header" onClick={toggleFunction}>
                <div className="header-icon">
                &#x1F5CB;
            </div>
            <div>
                {title}
            </div>
            <div className="text-align-right">                    
                <a href="#">{contentClass == 'content-opened' ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}</a>
            </div>
        </div>
    );
};

ProductHeader.propTypes = {
    title: React.PropTypes.string.isRequired,
    contentClass: React.PropTypes.string.isRequired,
    toggleFunction: React.PropTypes.func.isRequired
};

export default ProductHeader;