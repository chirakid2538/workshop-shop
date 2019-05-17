import React from 'react';
import { Layer, Box, Button } from 'grommet';

class paymentModal extends React.Component {

    render() {
        const  { setShow } = this.props;
        return (
            <Layer 
                onEsc={ () => setShow( false ) } 
                onClickOutside={ () => setShow( false ) }>
                <Box pad="small">
                    <Button label="Pay now" />
                </Box>

                <Box pad="small">
                    <Button label="COD" />
                </Box>
            </Layer>
        )
    }
}

export default paymentModal;