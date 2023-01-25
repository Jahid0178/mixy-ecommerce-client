import React from "react";
import { Document, Image, Page } from "@react-pdf/renderer";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceNo";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";

const Invoice = ({ invoiceData }) => {
  const {
    address,
    balance,
    company,
    due_date,
    email,
    id,
    invoice_no,
    items,
    phone,
    trans_date,
  } = invoiceData;
  console.log(invoiceData);
  return (
    <Document>
      <Page>
        <Image
          source="https://tech.shutterstock.com/assets/img/posts/2019/0312-02.jpg"
          alt={name}
          style={{ width: 100, height: 100 }}
        />
        <InvoiceTitle title="Invoice" />
        <InvoiceNo date={trans_date} id={invoice_no} />
        <BillTo
          company={company}
          address={address}
          phone={phone}
          email={email}
        />
        <InvoiceItemsTable items={items} />
        <InvoiceThankYouMsg />
      </Page>
    </Document>
  );
};

export default Invoice;
