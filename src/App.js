import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  FormControlLabel,
  Grid,
  Box,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import TextInput from "./TextInput";
import React from "react";

const useStyles = makeStyles({
  app: {
    padding: 40,
  },
  textPadding: {
    paddingBottom: 16,
  },
});

const individualWorksheetFields = [
  { text: "Premiums", twoFields: true, key: "premiums" },
  {
    text: "Dental Premiums (if covered separately)",
    twoFields: true,
    key: "dentalPremiums",
  },
  {
    text: "Vision Premiums (if covered separately)",
    twoFields: true,
    key: "visionPremiums",
  },
  {
    text: "Any other Premiums (e.g. long term care)",
    twoFields: true,
    key: "otherPremiums",
  },
  {
    text: "Total Annual Deductible (write in $100,000 if you are uninsured)",
    twoFields: false,
    key: "totalAnnualDeductible",
  },
  {
    text: "Deductible used last year (or on average)",
    twoFields: false,
    key: "deductibleLastYear",
  },
  {
    text: "Annual Out-of-Pocket Max (if any)",
    twoFields: false,
    key: "annualMax",
  },
  {
    text: "Estimate of Co-Pays or Coinsurance for medical visits, dental visits, eye-care visits, hearing visits, any other provider visits",
    twoFields: true,
    key: "visitCosts",
  },
  {
    text: "Estimate of Co-Pays or Coinsurance for drugs",
    twoFields: true,
    key: "drugsCosts",
  },
  {
    text: "Estimate of Co-Pays or Coinsurance for devices (for example, C-PAP, wheelchair, etc.)",
    twoFields: true,
    key: "devicesCosts",
  },
  {
    text: "Payments for home care or long term care not covered by insurance",
    twoFields: true,
    key: "homeCareCosts",
  },
  {
    text: "Any other health care payments you made for services normally covered by insurance plans",
    twoFields: true,
    key: "otherCoveredCosts",
  },
  {
    text: "Payments you made out of pocket for health care not covered by your insurance (These may or may not be covered by NY Health depending on why they were not covered, and will not be included in the total – but are important to consider. If you wish to share information about these expenses, there will be an opportunity to do so later.)",
    twoFields: true,
    key: "otherNotCoveredCosts",
  },
  {
    text: "Estimated cost of care or treatment that was recommended, but you could not afford it due to deductible of copay, and therefore did not receive it (This will be included in the total, since it would have been covered under NY Health.)",
    twoFields: true,
    key: "avoidedTreatmentCosts",
  },
];

function App() {
  const classes = useStyles();
  const [formFields, setFormFields] = React.useState({});

  const handleFormFieldChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleIndividualChange = (e) => {
    setFormFields({
      ...formFields,
      individual: { ...formFields.individual, [e.target.name]: e.target.value },
    });
  };

  const handleIndividualMonthlyChange = (e) => {
    setFormFields({
      ...formFields,
      individual: {
        ...formFields.individual,
        monthly: {
          ...formFields.individual?.monthly,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const handleIndividualAnnualChange = (e) => {
    setFormFields({
      ...formFields,
      individual: {
        ...formFields.individual,
        annual: {
          ...formFields.individual?.annual,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  console.log(formFields);
  return (
    <div className={classes.app}>
      <Typography variant="h4" gutterBottom align="center">
        NY Health Savings Calculator for Individuals
      </Typography>
      <Box mt={8} mx={12}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="body1">
              Is your current health coverage plan
            </Typography>
            <RadioGroup
              name="planType"
              value={formFields.planType || ""}
              onChange={handleFormFieldChange}
            >
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="individual"
              />
              <FormControlLabel
                value="family"
                control={<Radio />}
                label="family"
              />
            </RadioGroup>
          </Grid>
          {formFields.planType === "individual" && (
            <Grid item>
              <RadioGroup
                name="individualInputChoice"
                value={formFields.individualInputChoice || ""}
                onChange={handleFormFieldChange}
              >
                <FormControlLabel
                  value="total"
                  control={<Radio />}
                  label="I know my TOTAL health cost (use this if you usually reach
                     your job’s out-of-pocket maximum, use an HMO or Medical Home with 
                     comprehensive monthly fees[1], or want to put in a quick estimate)"
                />
                <FormControlLabel
                  value="worksheet"
                  control={<Radio />}
                  label="I want to use a worksheet to get a more accurate answer"
                />
              </RadioGroup>
            </Grid>
          )}
          {formFields.planType === "individual" &&
            formFields.individualInputChoice === "total" && (
              <Grid
                item
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <TextInput
                    label="Annual Cost"
                    name="annualCost"
                    value={formFields?.individual?.annualCost || ""}
                    onChange={handleIndividualChange}
                    disabled={formFields?.individual?.monthlyPayment}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">OR</Typography>
                </Grid>
                <Grid item>
                  <TextInput
                    label="Monthly Payment"
                    name="monthlyPayment"
                    value={formFields?.individual?.monthlyPayment || ""}
                    onChange={handleIndividualChange}
                    disabled={formFields?.individual?.annualCost}
                  />
                </Grid>
              </Grid>
            )}
          {formFields.planType === "individual" &&
            formFields.individualInputChoice === "worksheet" && (
              <>
                <Grid item>
                  <Typography variant="h5">Worksheet</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Please use this worksheet to add up total health care cost.
                    You may put in either last year’s actual costs or estimates
                    of average costs in each line. If you use this worksheet,
                    you will also receive an estimate of total cost in case of
                    serious accident or illness.
                  </Typography>
                </Grid>
                {individualWorksheetFields.map((field) => {
                  return (
                    <>
                      <Grid item>
                        <Typography variant="body1">{field.text}</Typography>
                      </Grid>
                      {field.twoFields ? (
                        <Grid
                          item
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <TextInput
                              label="Annual"
                              name={field.key}
                              value={
                                formFields?.individual?.annual?.[field.key] ||
                                ""
                              }
                              onChange={handleIndividualAnnualChange}
                              disabled={
                                formFields?.individual?.monthly?.[field.key]
                              }
                            />
                          </Grid>
                          <Grid item>
                            <Typography variant="body1">OR</Typography>
                          </Grid>
                          <Grid item>
                            <TextInput
                              label="Monthly"
                              name={field.key}
                              value={
                                formFields?.individual?.monthly?.[field.key] ||
                                ""
                              }
                              onChange={handleIndividualMonthlyChange}
                              disabled={
                                formFields?.individual?.annual?.[field.key]
                              }
                            />
                          </Grid>
                        </Grid>
                      ) : (
                        <Grid item>
                          <TextInput
                            name={field.key}
                            value={formFields?.individual?.[field.key] || ""}
                            onChange={handleIndividualChange}
                          />
                        </Grid>
                      )}
                    </>
                  );
                })}
              </>
            )}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
