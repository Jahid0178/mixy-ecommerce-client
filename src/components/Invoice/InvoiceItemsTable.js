import { Text, View } from "@react-pdf/renderer";
import React from "react";

const InvoiceItemsTable = ({ items }) => {
  console.log(items);
  return (
    <View>
      <View>
        <Text>Item Description</Text>
        <Text>Qty</Text>
        <Text>@</Text>
        <Text>Amount</Text>
      </View>
      {items.map((item) => {
        const { sno, qty, rate, desc } = item;
        return (
          <View key={sno}>
            <Text>{sno}</Text>
            <Text>{desc}</Text>
            <Text>{qty}</Text>
            <Text>{rate}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default InvoiceItemsTable;
