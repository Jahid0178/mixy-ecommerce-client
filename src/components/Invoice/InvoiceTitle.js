import { Text, View } from "@react-pdf/renderer";
import React from "react";

const InvoiceTitle = ({ title }) => {
  return (
    <View style={{ textAlign: "center" }}>
      <Text>{title}</Text>
    </View>
  );
};

export default InvoiceTitle;
