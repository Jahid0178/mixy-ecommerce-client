import React from "react";
import Head from "next/head";
import Invoice from "../../../components/Invoice/Invoice";
import { PDFViewer } from "@react-pdf/renderer";
import styles from "./style.module.css";

const invoiceData = {
  id: "5df3180a09ea16dc4b95f910",
  invoice_no: "201906-28",
  balance: "$2,283.74",
  company: "MANTRIX",
  email: "susanafuentes@mantrix.com",
  phone: "+1 (872) 588-3809",
  address: "922 Campus Road, Drytown, Wisconsin, 1986",
  trans_date: "2019-09-12",
  due_date: "2019-10-12",
  items: [
    {
      sno: 1,
      desc: "ad sunt culpa occaecat qui",
      qty: 5,
      rate: 405.89,
    },
    {
      sno: 2,
      desc: "cillum quis sunt qui aute",
      qty: 5,
      rate: 373.11,
    },
    {
      sno: 3,
      desc: "ea commodo labore culpa irure",
      qty: 5,
      rate: 458.61,
    },
    {
      sno: 4,
      desc: "nisi consequat et adipisicing dolor",
      qty: 10,
      rate: 725.24,
    },
    {
      sno: 5,
      desc: "proident cillum anim elit esse",
      qty: 4,
      rate: 141.02,
    },
  ],
};

const InvoiceDocument = () => {
  return (
    <>
      <Head>
        <title>Invoice</title>
      </Head>
      <main>
        <section>
          <PDFViewer width={1000} height="800">
            <Invoice invoiceData={invoiceData} />
          </PDFViewer>
        </section>
      </main>
    </>
  );
};

export default InvoiceDocument;
