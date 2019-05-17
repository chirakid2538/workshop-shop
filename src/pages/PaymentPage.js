import React from 'react';
import { Box } from 'grommet';
import PaymentForm from '../components/PaymentForm';

class PaymentPage extends React.Component{
    render(){
        return(
            <Box pad="xlarge">
                <PaymentForm />
            </Box>
        )
    }
}

export default PaymentPage;