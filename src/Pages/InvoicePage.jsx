import React from 'react';
import Layout from '../components/Layout/Layout';
import InvoiceDetails from '../components/Invoice/InvoiceDetails';

function InvoicePage(props) {
    return (
        <Layout>
            <InvoiceDetails/>
        </Layout>
    );
}

export default InvoicePage;