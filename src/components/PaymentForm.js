import React from 'react';
import CreditCardInput from 'react-credit-card-input';
import { Form, FormField, Button } from 'grommet';
import omise from '../utils/omise';
import { withRouter } from 'react-router-dom';

import request from '../utils/request';

const baseUrl = "https://aumza.localtunnel.me";

class PaymentForm extends React.Component {
    state = {
        cardNumber: '',
        expiry: '',
        cvc: '',
        name: '',
        city: '',
        postal: '',

    }
    handleChange = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    }

    handleSubmit = async () => {
        const { orderId } = this.props.match.params;
        const { cardNumber, expiry, cvc, name, city, postal } = this.state;
        const exp = expiry.split(' / ');

        try {
            const result = await new Promise((resolve, reject) => {
                omise.createToken('card', {
                    name,
                    postal_code: postal,
                    security_code: cvc,
                    city,
                    number: cardNumber.replace(/ /g, ''),
                    expiration_month: exp[0],
                    expiration_year: exp[1]
                }, (statusCode, response) => {
                    if (statusCode === 200) {
                        resolve(response);
                    } else {
                        reject(new Error(response.message));
                    }
                    // console.log('createTokenStatusCode', statusCode);
                    // console.log('createTokenResponse', response);
                })
            });

            const cardToken = result.id;
            const resMoltinPayment = await request.post(`${baseUrl}/moltinPayment/${orderId}`, { card: cardToken });
            console.log(resMoltinPayment);
            // console.log('data', orderId, cardToken);
            // console.log('resultPromise', result);
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        const { cardNumber, expiry, cvc } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormField label="Card">
                    <CreditCardInput
                        cardNumberInputProps={{ value: cardNumber, onChange: this.handleChange('cardNumber') }}
                        cardExpiryInputProps={{ value: expiry, onChange: this.handleChange('expiry') }}
                        cardCVCInputProps={{ value: cvc, onChange: this.handleChange('cvc') }}
                        fieldClassName="input"
                    />
                </FormField>
                <FormField label="Name" name="name" onChange={this.handleChange('name')} />
                <FormField label="City" name="city" onChange={this.handleChange('city')} />
                <FormField label="Postal" name="postal" onChange={this.handleChange('postal')} />
                <Button type="submit" label="Pay now" />
            </Form>
        )
    }
}

export default withRouter(PaymentForm);