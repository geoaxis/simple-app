/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
export default function Logout(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1401px"
      height="55px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(229,229,229,1)"
      minWidth="100%"
      {...rest}
      {...getOverrideProps(overrides, "Logout")}
    >
      <Heading
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        height="21px"
        position="relative"
        padding="0px 0px 0px 0px"
        level="1"
        children="example@example.com"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="42px"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Logout"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
