import React from 'react';
import Layout from '../components/Layout/Layout'
import InvoiceList from '../components/Invoice/InvoiceList';

function OrderPage(props) {
    return (
        <Layout>
            <InvoiceList/>
        </Layout>
    );
}

export default OrderPage;