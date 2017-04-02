import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import ProductWidget from '../widgets/ProductWidget';
import ProductHeader from '../widgets/ProductHeader';

class HomePage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            contentIndex: 0,
            contentClass: 'content-opened'
        };

        //action binders
        this.nextContent = this.nextContent.bind(this);
        this.previousContent = this.previousContent.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    
    //functions
    nextContent() {
        this.setState({contentIndex: this.state.contentIndex+1});
    }

    previousContent() {
        this.setState({contentIndex: this.state.contentIndex-1});
    }

    toggle() {
        if(this.state.contentClass == 'content-opened') {
            this.setState({contentClass: 'content-closed'});
            return;
        }
        this.setState({contentClass: 'content-opened'});
    }

    render() {
        const {contentClass, contentIndex} = this.state;
        if(this.props.product[0]) {
            return ( 
                <div className="product-widget-container">
                    <ProductHeader
                        toggleFunction={this.toggle}
                        title={this.props.product[0].title}
                        contentClass={contentClass}
                    />
                    <ProductWidget 
                        thumbnail={this.props.product[0].content[contentIndex].thumbnail} 
                        description={this.props.product[0].content[contentIndex].description}
                        previousTitle={this.props.product[0].content[contentIndex-1] ? this.props.product[0].content[contentIndex-1].title : undefined}
                        nextTitle={this.props.product[0].content[contentIndex+1] ? this.props.product[0].content[contentIndex+1].title : undefined}
                        previousFunction={this.previousContent}
                        nextFunction={this.nextContent}
                        contentClass={contentClass} />
                </div>
            );
        } else {
            return false;
        }
    }
}

HomePage.propTypes = {
    product: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        product: state.product
    };
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);