import { Box, Typography } from "@mui/material";
import React, { CSSProperties } from "react";

import Select, { GroupBase, Props as SelectProps } from "react-select";
import styles from "./index.module.css";
import clsx from "clsx";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles: CSSProperties = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data: GroupBase<unknown>) => (
  <Box style={groupStyles}>
    <Typography>{data.label}</Typography>
    <Typography style={groupBadgeStyles}>{data.options.length}</Typography>
  </Box>
);

type SelectGroupProps = SelectProps & {
  classBox?: string;
};

const SelectGroup = ({ classBox, options, ...rest }: SelectGroupProps) => {
  return (
    <Box className={classBox} position={"relative"}>
      <Select
        classNames={{
          container: (state) => clsx(state.className, styles.container),
          control: (state) =>
            clsx(state.className, styles.control, "!font-catamaran"),
          placeholder: (state) =>
            clsx(state.className, styles.placeholder, "font-catamaran"),
          option: (state) => clsx(state.className, "!font-catamaran"),
        }}
        options={options}
        {...rest}
        formatGroupLabel={formatGroupLabel}
      />
    </Box>
  );
};

export default SelectGroup;
