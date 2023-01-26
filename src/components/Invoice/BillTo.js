import React from "react";
import { Text, View } from "@react-pdf/renderer";

const BillTo = ({ company, address, phone, email }) => {
  return (
    <View style={{ fontSize: 16 }}>
      <Text>Bill To: </Text>
      <Text>{company}</Text>
      <Text>{address}</Text>
      <Text>{phone}</Text>
      <Text>{email}</Text>
    </View>
  );
};

export default BillTo;
