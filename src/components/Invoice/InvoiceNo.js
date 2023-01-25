import { Text, View } from "@react-pdf/renderer";
import React, { Fragment } from "react";

const InvoiceNo = ({ date, id }) => {
  return (
    <Fragment>
      <View>
        <Text>Invoice No:</Text>
        <Text>{id}</Text>
      </View>
      <View>
        <Text>Date:</Text>
        <Text>{date}</Text>
      </View>
    </Fragment>
  );
};

export default InvoiceNo;
