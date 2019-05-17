import React from 'react';
import { Form, FormField, Box, Heading, Button } from 'grommet';

class CheckoutForm extends React.Component {

    state = {
        name : '',
        email : '',
        first_name: '',
        last_name: '',
        company_name: '',
        line_1: '',
        line_2: '',
        city: '',
        postcode: '',
        county: '',
        country: '',
        instructions: ''
    }

    onChangeValue = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        const { onSubmit } = this.props;
        return (
            <Form onSubmit={() => onSubmit(this.state)}>
                <Box>
                    <Heading level={3}>Your Info</Heading>
                    <FormField label="Name" name="name" onChange={this.onChangeValue} />
                    <FormField label="Email" name="email" onChange={this.onChangeValue} />
                </Box>

                <Box>
                    <Heading level={3}>Shipping Address</Heading>
                    <FormField label="First Name" name="first_name" onChange={this.onChangeValue} />
                    <FormField label="Last Name" name="last_name" onChange={this.onChangeValue} />
                    <FormField label="Phone Number" name="phone_number" onChange={this.onChangeValue} />
                    <FormField label="Company Name" name="company_name" onChange={this.onChangeValue} />
                    <FormField label="Address line 1" name="line_1" onChange={this.onChangeValue} />
                    <FormField label="Address line 2" name="line_2" onChange={this.onChangeValue} />
                    <FormField label="City" name="city" onChange={this.onChangeValue} />
                    <FormField label="Postcode" name="postcode" onChange={this.onChangeValue} />
                    <FormField label="County" name="county" onChange={this.onChangeValue} />
                    <FormField label="Country" name="country" onChange={this.onChangeValue} />
                    <FormField label="Instructions" name="couinstructionsntry" onChange={this.onChangeValue} />

                    <Button primary label="Checkout" type="submit" />
                </Box>
            </Form>
        )
    }
}

export default CheckoutForm;