import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  FormControlLabel,
  Grid,
  Box,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import TextInput from "./TextInput";
import React from "react";
import NyhCostForm from "./NyhCostForm";
import logo from "./CNYH_logo.jpeg";

const useStyles = makeStyles((theme) => ({
  app: {},
  textPadding: {
    paddingBottom: 16,
  },
  header: {
    backgroundColor: theme.palette.common.white,
    zIndex: 100,
  },
  logo: {
    width: 180,
    height: "auto",
  },
  calculations: {
    fontWeight: "bold",
  },
}));

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
    text: "Estimated cost of care or treatment that was recommended, but you could not afford it due to deductible or copay, and therefore did not receive it (This will be included in the total, since it would have been covered under NY Health.)",
    twoFields: true,
    key: "avoidedTreatmentCosts",
  },
];

const brackets = [
  { lowerBound: 0, upperBound: 24999, baseCost: 0, rate: 0 },
  { lowerBound: 25000, upperBound: 49999, baseCost: 0, rate: 0.138 },
  { lowerBound: 50000, upperBound: 74999, baseCost: 3450, rate: 0.169 },
  { lowerBound: 75000, upperBound: 99999, baseCost: 7675, rate: 0.184 },
  { lowerBound: 100000, upperBound: 199999, baseCost: 12275, rate: 0.216 },
  {
    lowerBound: 200000,
    upperBound: Number.POSITIVE_INFINITY,
    baseCost: 33875,
    rate: 0.246,
  },
];

function App() {
  const classes = useStyles();
  const [step, setStep] = React.useState(1);
  const initialFormState = {
    planType: "individual",
    individualInputChoice: "total",
    familyInputChoice: "total",
  };
  const [formFields, setFormFields] = React.useState(initialFormState);
  const [monthlyCost, setMonthlyCost] = React.useState(0);
  const [annualCost, setAnnualCost] = React.useState(0);
  const [illnessCost, setIllnessCost] = React.useState(0);
  const [nyhCost, setNyhCost] = React.useState(0);
  const [nyhMonthlyCost, setNyhMonthlyCost] = React.useState(0);

  const add = (arr) => {
    return arr.reduce((acc, val) => {
      return acc + +val;
    }, 0);
  };

  const addCommas = (str) => {
    if (str.length <= 6) return str;
    let newString = "";
    let j = 0;
    for (let i = str.length - 3; i >= 0; i--) {
      newString += str[i];
      if (j % 3 === 0 && j !== 0 && i !== 0) {
        newString += ",";
      }
      j++;
    }
    newString = newString.split("").reverse().join("");
    return newString + str.slice(-2);
  };

  const makeCalculations = (key) => {
    let monthlyTotal = 0;
    let annualTotal = 0;
    let combinedTotal = 0;
    if (formFields?.[`${key}InputChoice`] === "total") {
      monthlyTotal = formFields?.[key]?.monthlyPayment
        ? +formFields?.[key]?.monthlyPayment * 12
        : 0;
      annualTotal = formFields?.[key]?.annualCost
        ? +formFields?.[key]?.annualCost
        : 0;
      combinedTotal = monthlyTotal + annualTotal;
    } else if (formFields?.[`${key}InputChoice`] === "worksheet") {
      monthlyTotal = formFields?.[key]?.monthly
        ? add(Object.values(formFields?.[key]?.monthly)) * 12
        : 0;
      annualTotal = formFields?.[key]?.annual
        ? add(Object.values(formFields?.[key]?.annual))
        : 0;
      combinedTotal =
        monthlyTotal +
        annualTotal +
        +(formFields?.[key]?.deductibleLastYear || 0);
    }
    let illnessCost = 0;
    if (formFields?.[key]?.annualMax) {
      illnessCost =
        +formFields?.[key]?.annualMax +
        +(formFields?.[key]?.annual?.otherNotCoveredCosts || 0) +
        +(formFields?.[key]?.monthly?.otherNotCoveredCosts || 0) * 12;
    } else {
      illnessCost =
        combinedTotal + +(formFields?.[key]?.totalAnnualDeductible || 0);
    }
    setMonthlyCost(addCommas((combinedTotal / 12).toFixed(2)));
    setAnnualCost(addCommas(combinedTotal.toFixed(2)));
    setIllnessCost(
      formFields?.[`${key}InputChoice`] === "total"
        ? "N/A"
        : addCommas(illnessCost.toFixed(2))
    );
  };

  const makeNyhCalculation = (key) => {
    let regularIncome = [];
    let otherIncome = [];
    if (formFields?.nyHealth?.[key]) {
      Object.keys(formFields.nyHealth[key]).forEach((k) => {
        Object.keys(formFields.nyHealth[key][k]).forEach((k2) => {
          const value = formFields.nyHealth[key][k][k2];
          if (k2 === "selfEmploymentIncome" || k2 === "interestIncome") {
            otherIncome.push(k === "annual" ? +value : +value * 12);
          } else {
            regularIncome.push(k === "annual" ? +value : +value * 12);
          }
        });
      });
    }
    const regularCost = regularIncome.reduce((acc, r) => {
      const regularBracket = brackets.find(
        (b) => r <= b.upperBound && r >= b.lowerBound
      );
      return (
        acc +
        (regularBracket.baseCost +
          (r - regularBracket.lowerBound) * regularBracket.rate) *
          0.2
      );
    }, 0);

    const otherCost = otherIncome.reduce((acc, o) => {
      const otherBracket = brackets.find(
        (b) => o <= b.upperBound && o >= b.lowerBound
      );
      return (
        acc +
        (otherBracket.baseCost +
          (o - otherBracket.lowerBound) * otherBracket.rate)
      );
    }, 0);

    return regularCost + otherCost;
  };

  const makeNyhCalculations = () => {
    if (formFields?.planType === "individual") {
      setNyhCost(addCommas(makeNyhCalculation("individual").toFixed(2)));
      setNyhMonthlyCost(
        addCommas((makeNyhCalculation("individual") / 12).toFixed(2))
      );
    } else {
      const familyKeys = formFields?.nyHealth
        ? Object.keys(formFields.nyHealth).filter((el) => el !== "individual")
        : [];
      const total = familyKeys.reduce((acc, k) => {
        return acc + makeNyhCalculation(k);
      }, 0);
      setNyhCost(addCommas(total.toFixed(2)));
      setNyhMonthlyCost(addCommas((total / 12).toFixed(2)));
    }
  };

  const handleFormFieldChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleOnceNestedFormChange = (key) => (e) => {
    const value = e.target.value.replace(/[^\d.-]/g, "");
    setFormFields({
      ...formFields,
      [key]: { ...formFields?.[key], [e.target.name]: value },
    });
  };

  const handleTwiceNestedFormChange = (key1, key2) => (e) => {
    const value = e.target.value.replace(/[^\d.-]/g, "");
    setFormFields({
      ...formFields,
      [key1]: {
        ...formFields?.[key1],
        [key2]: {
          ...formFields?.[key1]?.[key2],
          [e.target.name]: value,
        },
      },
    });
  };

  const handleThriceNestedFormChange = (key1, key2, key3) => (e) => {
    const value = e.target.value.replace(/[^\d.-]/g, "");
    setFormFields({
      ...formFields,
      [key1]: {
        ...formFields?.[key1],
        [key2]: {
          ...formFields?.[key1]?.[key2],
          [key3]: {
            ...formFields?.[key1]?.[key2]?.[key3],
            [e.target.name]: value,
          },
        },
      },
    });
  };

  const onBackClick = () => {
    switch (true) {
      case step === 2 || step === 3:
        setStep(1);
        break;
      case step === 4:
        setStep(2);
        break;
      case step === 5:
        setStep(3);
        break;
      case step > 5:
        setStep(step - 1);
        break;
      case step === "end":
        setStep(1);
        setFormFields(initialFormState);
        break;
      default:
        setStep(step);
    }
  };

  const onContinueClick = () => {
    switch (true) {
      case step === 1 && formFields?.planType === "individual":
        setStep(2);
        break;
      case step === 1 && formFields?.planType === "family":
        setStep(3);
        break;
      case step === 2:
        setStep(4);
        makeCalculations(formFields.planType);
        break;
      case step === 3:
        setStep(5);
        makeCalculations(formFields.planType);
        break;
      case step === 4:
        setStep("end");
        makeNyhCalculations();
        break;
      case step === 5:
        setStep(6);
        break;
      case step === 6:
        if (makeNyhCalculation("spouse") === 0) {
          makeNyhCalculations();
          setStep("end");
        } else {
          setStep(7);
        }
        break;
      case step > 6:
        if (makeNyhCalculation(step - 7) === 0) {
          makeNyhCalculations();
          setStep("end");
        } else {
          setStep(step + 1);
        }
        break;
      default:
        setStep(step);
    }
  };

  const showCalculations = ![1, 2, 3].includes(step);
  const showNyhCalculations = step === "end";

  return (
    <div className={classes.app}>
      <Box
        p={3}
        borderBottom={1}
        position="sticky"
        top={0}
        className={classes.header}
      >
        <Typography variant="h5" gutterBottom align="center">
          NY Health Savings Calculator for Individuals
        </Typography>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <img src={logo} className={classes.logo} alt="CNYH logo" />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="left"
              color="secondary"
              className={classes.calculations}
            >
              Cost of Current Coverage (Annually):
              {showCalculations ? ` $${annualCost}` : ""}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="secondary"
              className={classes.calculations}
            >
              Cost of Current Coverage (Monthly):
              {showCalculations ? ` $${monthlyCost}` : ""}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="secondary"
              className={classes.calculations}
            >
              Cost in case of serious illness or accident:
              {showCalculations ? ` $${illnessCost}` : ""}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="secondary"
              className={classes.calculations}
            >
              Cost for NY Health (Annually):
              {showNyhCalculations ? ` $${nyhCost}` : ""}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="secondary"
              className={classes.calculations}
            >
              Cost for NY Health (Monthly):
              {showNyhCalculations ? ` $${nyhMonthlyCost}` : ""}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box p={6}>
        <Grid container direction="column" spacing={2}>
          {step === 1 && (
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
          )}

          {step === 2 && (
            <>
              <Grid item>
                <Typography variant="h6">Current Health Care Costs</Typography>
              </Grid>
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
                      comprehensive monthly fees, or want to put in a quick estimate)"
                  />
                  <FormControlLabel
                    value="worksheet"
                    control={<Radio />}
                    label="I want to use a worksheet to get a more accurate answer"
                  />
                </RadioGroup>
              </Grid>

              {formFields.planType === "individual" &&
                formFields.individualInputChoice === "total" && (
                  <Grid
                    item
                    container
                    xs={8}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <TextInput
                        label="Annual Cost"
                        name="annualCost"
                        value={formFields?.individual?.annualCost || ""}
                        onChange={handleOnceNestedFormChange("individual")}
                        disabled={!!formFields?.individual?.monthlyPayment}
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
                        onChange={handleOnceNestedFormChange("individual")}
                        disabled={!!formFields?.individual?.annualCost}
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
                        Please use this worksheet to add up total health care
                        cost. You may put in either last year’s actual costs or
                        estimates of average costs in each line. If you use this
                        worksheet, you will also receive an estimate of total
                        cost in case of serious accident or illness.
                      </Typography>
                    </Grid>
                    {individualWorksheetFields.map((field) => {
                      return (
                        <>
                          <Grid item>
                            <Typography variant="body1">
                              {field.text}
                            </Typography>
                          </Grid>
                          {field.twoFields ? (
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
                                  value={
                                    formFields?.individual?.annual?.[
                                      field.key
                                    ] || ""
                                  }
                                  onChange={handleTwiceNestedFormChange(
                                    "individual",
                                    "annual"
                                  )}
                                  disabled={
                                    !!formFields?.individual?.monthly?.[
                                      field.key
                                    ]
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
                                    formFields?.individual?.monthly?.[
                                      field.key
                                    ] || ""
                                  }
                                  onChange={handleTwiceNestedFormChange(
                                    "individual",
                                    "monthly"
                                  )}
                                  disabled={
                                    !!formFields?.individual?.annual?.[
                                      field.key
                                    ]
                                  }
                                />
                              </Grid>
                            </Grid>
                          ) : (
                            <Grid item>
                              <TextInput
                                name={field.key}
                                value={
                                  formFields?.individual?.[field.key] || ""
                                }
                                onChange={handleOnceNestedFormChange(
                                  "individual"
                                )}
                              />
                            </Grid>
                          )}
                        </>
                      );
                    })}
                  </>
                )}
            </>
          )}

          {step === 3 && (
            <>
              <Grid item>
                <Typography variant="h6">
                  Current Family Health Care Costs
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  New York Health covers every individual with payment based on
                  income, with no payment for individuals whose income is below
                  $25,000. This means that there is no “family plan” under NY
                  Health, but for the purposes of the cost comparison, this
                  estimator will compare total cost per family.
                </Typography>
              </Grid>
              <Grid item>
                <RadioGroup
                  name="familyInputChoice"
                  value={formFields.familyInputChoice || ""}
                  onChange={handleFormFieldChange}
                >
                  <FormControlLabel
                    value="total"
                    control={<Radio />}
                    label="I know my family’s TOTAL health cost (use this if you usually reach
                      your job’s out-of-pocket maximum, use an HMO or Medical Home with 
                      comprehensive monthly fees, or want to put in a quick estimate)"
                  />
                  <FormControlLabel
                    value="worksheet"
                    control={<Radio />}
                    label="I want to use a worksheet to get a more accurate answer"
                  />
                </RadioGroup>
              </Grid>

              {formFields.planType === "family" &&
                formFields.familyInputChoice === "total" && (
                  <Grid
                    item
                    container
                    xs={8}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <TextInput
                        label="Annual Cost"
                        name="annualCost"
                        value={formFields?.family?.annualCost || ""}
                        onChange={handleOnceNestedFormChange("family")}
                        disabled={!!formFields?.family?.monthlyPayment}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">OR</Typography>
                    </Grid>
                    <Grid item>
                      <TextInput
                        label="Monthly Payment"
                        name="monthlyPayment"
                        value={formFields?.family?.monthlyPayment || ""}
                        onChange={handleOnceNestedFormChange("family")}
                        disabled={!!formFields?.family?.annualCost}
                      />
                    </Grid>
                  </Grid>
                )}

              {formFields.planType === "family" &&
                formFields.familyInputChoice === "worksheet" && (
                  <>
                    <Grid item>
                      <Typography variant="h5">Worksheet</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        Please use this worksheet to add up total health care
                        cost. You may put in either last year’s actual costs or
                        estimates of average costs in each line. If you use this
                        worksheet, you will also receive an estimate of total
                        cost in case of serious accident or illness.
                      </Typography>
                    </Grid>
                    {individualWorksheetFields.map((field) => {
                      return (
                        <>
                          <Grid item>
                            <Typography variant="body1">
                              {field.text}
                            </Typography>
                          </Grid>
                          {field.twoFields ? (
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
                                  value={
                                    formFields?.family?.annual?.[field.key] ||
                                    ""
                                  }
                                  onChange={handleTwiceNestedFormChange(
                                    "family",
                                    "annual"
                                  )}
                                  disabled={
                                    !!formFields?.family?.monthly?.[field.key]
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
                                    formFields?.family?.monthly?.[field.key] ||
                                    ""
                                  }
                                  onChange={handleTwiceNestedFormChange(
                                    "family",
                                    "monthly"
                                  )}
                                  disabled={
                                    !!formFields?.family?.annual?.[field.key]
                                  }
                                />
                              </Grid>
                            </Grid>
                          ) : (
                            <Grid item>
                              <TextInput
                                name={field.key}
                                value={formFields?.family?.[field.key] || ""}
                                onChange={handleOnceNestedFormChange("family")}
                              />
                            </Grid>
                          )}
                        </>
                      );
                    })}
                  </>
                )}
            </>
          )}

          {step === 4 && (
            <>
              <Grid item>
                <Typography variant="h6">
                  Estimated Cost Under New York Health
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Your cost of New York Health is based on your income, not your
                  health care needs. As the legislation currently exists, income
                  is broken down into employment (for which the premium will be
                  taken out with taxes withheld from your paycheck),
                  self-employment (for which the premiums will be included in
                  annual taxes or quarterly estimated payments) and dividend and
                  capital gains income (for which the premiums will be included
                  with quarterly estimated tax payments).
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  There is a floor in each category of $25,000. For the purposes
                  of this estimator, you may omit any job, interest income or
                  dividend income that is less than $25,000 annually, but for
                  those more than that, please enter the full amount, and the
                  software will do the calculation, including subtracting the
                  first $25,000.
                </Typography>
              </Grid>
              <NyhCostForm
                onChange={handleThriceNestedFormChange}
                type="individual"
                formFields={formFields}
              />
            </>
          )}

          {step === 5 && (
            <>
              <Grid item>
                <Typography variant="h6">
                  Estimated Cost Under New York Health
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Your cost of New York Health is based on your income, not your
                  health care needs. As the legislation currently exists, income
                  is broken down into employment (for which the premium will be
                  taken out with taxes withheld from your paycheck),
                  self-employment (for which the premiums will be included in
                  annual taxes or quarterly estimated payments) and dividend and
                  capital gains income (for which the premiums will be included
                  with quarterly estimated tax payments).
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  There is a floor in each category of $25,000. For the purposes
                  of this estimator, you may omit any job, interest income or
                  dividend income that is less than $25,000 annually, but for
                  those more than that, please enter the full amount, and the
                  software will do the calculation, including subtracting the
                  first $25,000.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ marginTop: 12 }}>
                  <Box component="span" fontWeight="bold">
                    Self
                  </Box>
                  &nbsp;(you will enter income for other family members in the
                  next screen. If you had no income over $25,000, click on the
                  “Continue” button below.)
                </Typography>
              </Grid>
              <NyhCostForm
                onChange={handleThriceNestedFormChange}
                type="self"
                formFields={formFields}
              />
            </>
          )}

          {step === 6 && (
            <>
              <Grid item>
                <Typography variant="h6">
                  Estimated Cost Under New York Health
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ marginTop: 12 }}>
                  <Box component="span" fontWeight="bold">
                    Spouse
                  </Box>
                  &nbsp;(or other family member earning over $25,000. If you are
                  the only earner for the family click the “Continue” button
                  below)
                </Typography>
              </Grid>
              <NyhCostForm
                onChange={handleThriceNestedFormChange}
                type="spouse"
                formFields={formFields}
              />
            </>
          )}

          {step > 6 && (
            <>
              <Grid item>
                <Typography variant="h6">
                  Estimated Cost Under New York Health
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ marginTop: 12 }}>
                  <Box component="span" fontWeight="bold">
                    Other family member earning over $25,000
                  </Box>
                  &nbsp;(if no other family members earns more than $25,000,
                  click the “Continue” button below))
                </Typography>
              </Grid>
              <NyhCostForm
                onChange={handleThriceNestedFormChange}
                type={step - 7}
                formFields={formFields}
              />
            </>
          )}

          {step === "end" && (
            <>
              <Grid item>
                <Typography variant="h6">
                  Congratulations! Your comparison is complete.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  The figures used to estimate the cost of the New York Health
                  plan are based on calculations made by the Rand corporation
                  for the cost required to cover comprehensive medical, dental,
                  eye, ear, mental and substance abuse care for ALL New York
                  residents, if the New York Health Act passes as the bill is
                  currently written.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  The Rand study did not include the $25,000 income floor that
                  is included in the bill in its calculations for payments, so
                  this estimator has been adapted to include that floor in
                  covering the full costs as estimated by the Rand study.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Both the costs and the income are only estimates, but they are
                  the best estimates available at this time. The Rand study
                  provided detailed information to back up its estimate of what
                  it will cost to cover all health care for all New York
                  residents if insurance profits are not covered, the state
                  bargains as a single unit with pharmaceutical and device
                  companies, and payments are channeled through a single payer
                  to make the system more efficient and accountable and save on
                  the cost of CEO salaries for multiple insurance companies. By
                  their estimates on this basis, comprehensive health care
                  coverage for all New Yorkers will cost $11 billion less per
                  year than the partial coverage we currently experience costs
                  today.
                </Typography>
              </Grid>
            </>
          )}

          <Grid item container justifyContent="space-between">
            {step !== 1 && (
              <Button
                color="secondary"
                variant="contained"
                onClick={onBackClick}
              >
                {step === "end" ? "Start Over" : "Go Back"}
              </Button>
            )}
            {step !== "end" && (
              <Button
                color="secondary"
                variant="contained"
                onClick={onContinueClick}
              >
                Continue
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
