import { Text, View } from "@react-pdf/renderer";
import React from "react";

const InvoiceTitle = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default InvoiceTitle;
