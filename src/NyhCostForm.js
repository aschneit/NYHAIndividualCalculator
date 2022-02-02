import { Grid, Typography } from "@material-ui/core";
import TextInput from "./TextInput";
import React from "react";

const nyHealthFields = [
  {
    text: "Income from Job 1 (if any over $25,000)",
    key: "firstJobIncome",
  },
  {
    text: "Income from Job 2 (if any over $25,000)",
    key: "secondJobIncome",
  },
  {
    text: "Income from Job 3 (if any over $25,000)",
    key: "thirdJobIncome",
  },
  {
    text: "Self-Employment Income (taxable, with all expenses deducted, if over $25,000)",
    key: "selfEmploymentIncome",
  },
  {
    text: "Income from interest and/or dividends (if any over $25,000)",
    key: "interestIncome",
  },
];

const NyhCostForm = ({ type, onChange, formFields }) => (
  <>
    {nyHealthFields.map((field) => (
      <>
        <Grid item>
          <Typography variant="body1">{field.text}</Typography>
        </Grid>
        <Grid
          item
          xs={8}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <TextInput
              label="Annual"
              name={field.key}
              value={formFields?.nyHealth?.[type]?.annual?.[field.key] || ""}
              onChange={onChange("nyHealth", type, "annual")}
              disabled={!!formFields?.nyHealth?.[type]?.monthly?.[field.key]}
            />
          </Grid>
          <Grid item>
            <Typography variant="body1">OR</Typography>
          </Grid>
          <Grid item>
            <TextInput
              label="Monthly"
              name={field.key}
              value={formFields?.nyHealth?.[type]?.monthly?.[field.key] || ""}
              onChange={onChange("nyHealth", type, "monthly")}
              disabled={!!formFields?.nyHealth?.[type]?.annual?.[field.key]}
            />
          </Grid>
        </Grid>
      </>
    ))}
  </>
);

export default NyhCostForm;
