import React, {PropTypes} from 'react';
import '../../styles/ProductWidget.scss';
import img from '../../images/ipad-mini.jpg';
import ProductNavigation from './ProductNavigation';

const ProductWidget = ({thumbnail, description, contentClass, previousTitle, nextTitle, previousFunction, nextFunction}) => {
    const renderHtml = () => {
        return {__html: description};
    };

    return (
            <div className={contentClass}>
                <div className="content">
                    <div className="inner-content inner-content-30"><img src={thumbnail} />&nbsp;</div>
                    <div className="inner-content inner-content-70">
                        <div className="content-text" dangerouslySetInnerHTML={renderHtml()}></div>
                    </div>
                </div>
                <ProductNavigation
                    previousTitle={previousTitle}
                    nextTitle={nextTitle}
                    previousFunction={previousFunction}
                    nextFunction={nextFunction} />
            </div>
    );
};

ProductWidget.propTypes = {
    thumbnail: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    contentClass: React.PropTypes.string.isRequired,
    previousTitle: React.PropTypes.string.isRequired,
    nextTitle: React.PropTypes.string.isRequired,
    previousFunction: React.PropTypes.func.isRequired,
    nextFunction: React.PropTypes.func.isRequired
};

ProductWidget.defaultProps = { 
    thumbnail: '',
    description: '',
    previousTitle: '',
    nextTitle: '',
    contentClass: ''
};

export default ProductWidget;