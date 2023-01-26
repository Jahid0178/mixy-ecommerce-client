import { Text, View } from "@react-pdf/renderer";
import React, { Fragment } from "react";

const InvoiceNo = ({ date, id }) => {
  return (
    <Fragment>
      <View style={{ textAlign: "right" }}>
        <Text>Invoice No:</Text>
        <Text>{id}</Text>
      </View>
      <View style={{ textAlign: "right" }}>
        <Text>Date:</Text>
        <Text>{date}</Text>
      </View>
    </Fragment>
  );
};

export default InvoiceNo;
