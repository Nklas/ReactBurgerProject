import React, {Component} from 'react';

import Au from '../../../hoc/Au';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
        });

        return (
            <Au>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to chechout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Au>
        );
    }
}

export default OrderSummary;