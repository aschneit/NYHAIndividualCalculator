(this["webpackJsonpnyha-health-savings-calculator"]=this["webpackJsonpnyha-health-savings-calculator"]||[]).push([[0],{69:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),l=a.n(o),s=(a(69),a(14)),r=a(10),c=a(23),d=a(113),u=a(114),h=a(55),m=a(108),b=a(116),j=a(109),v=a(115),y=a(110),f=a(112),O=a(107),x=a(2),p=Object(d.a)((function(e){return{}})),g=function(e){p();return Object(x.jsx)(f.a,Object(r.a)(Object(r.a)({},e),{},{variant:"outlined",color:"secondary",size:"small",InputLabelProps:{shrink:!0},InputProps:{startAdornment:Object(x.jsx)(O.a,{position:"start",children:"$"})}}))},w=[{text:"Self-Employment Income (taxable, with all expenses deducted, if over $25,000)",key:"selfEmploymentIncome"},{text:"Income from Job 1 (if any over $25,000)",key:"firstJobIncome"},{text:"Income from Job 2 (if any over $25,000)",key:"secondJobIncome"},{text:"Income from Job 3 (if any over $25,000)",key:"thirdJobIncome"},{text:"Income from interest and/or dividends (if any over $25,000)",key:"interestIncome"}],C=function(e){var t=e.type,a=e.onChange,n=e.formFields;return Object(x.jsx)(x.Fragment,{children:w.map((function(e){var i,o,l,s,r,c,d,u,b,j,v,y;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:e.text})}),Object(x.jsxs)(m.a,{item:!0,xs:8,container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Annual",name:e.key,value:(null===n||void 0===n||null===(i=n.nyHealth)||void 0===i||null===(o=i[t])||void 0===o||null===(l=o.annual)||void 0===l?void 0:l[e.key])||"",onChange:a("nyHealth",t,"annual"),disabled:!!(null===n||void 0===n||null===(s=n.nyHealth)||void 0===s||null===(r=s[t])||void 0===r||null===(c=r.monthly)||void 0===c?void 0:c[e.key])})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"OR"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Monthly",name:e.key,value:(null===n||void 0===n||null===(d=n.nyHealth)||void 0===d||null===(u=d[t])||void 0===u||null===(b=u.monthly)||void 0===b?void 0:b[e.key])||"",onChange:a("nyHealth",t,"monthly"),disabled:!!(null===n||void 0===n||null===(j=n.nyHealth)||void 0===j||null===(v=j[t])||void 0===v||null===(y=v.annual)||void 0===y?void 0:y[e.key])})})]})]})}))})},k=a.p+"static/media/CNYH_logo.5e9c055c.jpeg",I=Object(d.a)((function(e){return{app:{},textPadding:{paddingBottom:16},header:{backgroundColor:e.palette.common.white,zIndex:100},logo:{width:180,height:"auto"},calculations:{fontWeight:"bold"}}})),F=[{text:"Premiums",twoFields:!0,key:"premiums"},{text:"Dental Premiums (if covered separately)",twoFields:!0,key:"dentalPremiums"},{text:"Vision Premiums (if covered separately)",twoFields:!0,key:"visionPremiums"},{text:"Any other Premiums (e.g. long term care)",twoFields:!0,key:"otherPremiums"},{text:"Total Annual Deductible (write in $100,000 if you are uninsured)",twoFields:!1,key:"totalAnnualDeductible"},{text:"Deductible used last year (or on average)",twoFields:!1,key:"deductibleLastYear"},{text:"Annual Out-of-Pocket Max (if any)",twoFields:!1,key:"annualMax"},{text:"Estimate of Co-Pays or Coinsurance for medical visits, dental visits, eye-care visits, hearing visits, any other provider visits",twoFields:!0,key:"visitCosts"},{text:"Estimate of Co-Pays or Coinsurance for drugs",twoFields:!0,key:"drugsCosts"},{text:"Estimate of Co-Pays or Coinsurance for devices (for example, C-PAP, wheelchair, etc.)",twoFields:!0,key:"devicesCosts"},{text:"Payments for home care or long term care not covered by insurance",twoFields:!0,key:"homeCareCosts"},{text:"Any other health care payments you made for services normally covered by insurance plans",twoFields:!0,key:"otherCoveredCosts"},{text:"Payments you made out of pocket for health care not covered by your insurance (These may or may not be covered by NY Health depending on why they were not covered, and will not be included in the total \u2013 but are important to consider. If you wish to share information about these expenses, there will be an opportunity to do so later.)",twoFields:!0,key:"otherNotCoveredCosts"},{text:"Estimated cost of care or treatment that was recommended, but you could not afford it due to deductible or copay, and therefore did not receive it (This will be included in the total, since it would have been covered under NY Health.)",twoFields:!0,key:"avoidedTreatmentCosts"}],N=[{lowerBound:0,upperBound:24999,baseCost:0,rate:0},{lowerBound:25e3,upperBound:49999,baseCost:0,rate:.138},{lowerBound:5e4,upperBound:74999,baseCost:3450,rate:.169},{lowerBound:75e3,upperBound:99999,baseCost:7675,rate:.184},{lowerBound:1e5,upperBound:199999,baseCost:12275,rate:.216},{lowerBound:2e5,upperBound:Number.POSITIVE_INFINITY,baseCost:33875,rate:.246}];var H=function(){var e,t,a,n,o,l,d,f,O=I(),p=i.a.useState(1),w=Object(c.a)(p,2),H=w[0],P=w[1],T={planType:"individual",individualInputChoice:"total",familyInputChoice:"total"},Y=i.a.useState(T),B=Object(c.a)(Y,2),$=B[0],A=B[1],S=i.a.useState(0),M=Object(c.a)(S,2),E=M[0],R=M[1],L=i.a.useState(0),J=Object(c.a)(L,2),q=J[0],D=J[1],U=i.a.useState(0),W=Object(c.a)(U,2),z=W[0],V=W[1],_=i.a.useState(0),G=Object(c.a)(_,2),K=G[0],Q=G[1],X=i.a.useState(0),Z=Object(c.a)(X,2),ee=Z[0],te=Z[1],ae=function(e){return e.reduce((function(e,t){return e+ +t}),0)},ne=function(e){if(e.length<=6)return e;for(var t="",a=0,n=e.length-3;n>=0;n--)t+=e[n],a%3===0&&0!==a&&0!==n&&(t+=","),a++;return(t=t.split("").reverse().join(""))+e.slice(-2)},ie=function(e){var t,a,n,i,o,l=0;if("total"===(null===$||void 0===$?void 0:$["".concat(e,"InputChoice")]))l=((null===$||void 0===$||null===(a=$[e])||void 0===a?void 0:a.monthlyPayment)?12*+(null===$||void 0===$||null===(n=$[e])||void 0===n?void 0:n.monthlyPayment):0)+((null===$||void 0===$||null===(i=$[e])||void 0===i?void 0:i.annualCost)?+(null===$||void 0===$||null===(o=$[e])||void 0===o?void 0:o.annualCost):0);else if("worksheet"===(null===$||void 0===$?void 0:$["".concat(e,"InputChoice")])){var s,r,c,d,u;l=((null===$||void 0===$||null===(s=$[e])||void 0===s?void 0:s.monthly)?12*ae(Object.values(null===$||void 0===$||null===(r=$[e])||void 0===r?void 0:r.monthly)):0)+((null===$||void 0===$||null===(c=$[e])||void 0===c?void 0:c.annual)?ae(Object.values(null===$||void 0===$||null===(d=$[e])||void 0===d?void 0:d.annual)):0)+ +((null===$||void 0===$||null===(u=$[e])||void 0===u?void 0:u.deductibleLastYear)||0)}var h,m,b,j,v,y,f=0;(null===$||void 0===$||null===(t=$[e])||void 0===t?void 0:t.annualMax)?f=+(null===$||void 0===$||null===(h=$[e])||void 0===h?void 0:h.annualMax)+ +((null===$||void 0===$||null===(m=$[e])||void 0===m||null===(b=m.annual)||void 0===b?void 0:b.otherNotCoveredCosts)||0)+12*+((null===$||void 0===$||null===(j=$[e])||void 0===j||null===(v=j.monthly)||void 0===v?void 0:v.otherNotCoveredCosts)||0):f=l+ +((null===$||void 0===$||null===(y=$[e])||void 0===y?void 0:y.totalAnnualDeductible)||0);R(ne((l/12).toFixed(2))),D(ne(l.toFixed(2))),V("total"===(null===$||void 0===$?void 0:$["".concat(e,"InputChoice")])?"N/A":ne(f.toFixed(2)))},oe=function(e){var t,a=[],n=[];return(null===$||void 0===$||null===(t=$.nyHealth)||void 0===t?void 0:t[e])&&Object.keys($.nyHealth[e]).forEach((function(t){Object.keys($.nyHealth[e][t]).forEach((function(i){var o=$.nyHealth[e][t][i];"selfEmploymentIncome"===i||"interestIncome"===i?n.push("annual"===t?+o:12*+o):a.push("annual"===t?+o:12*+o)}))})),a.reduce((function(e,t){var a=N.find((function(e){return t<=e.upperBound&&t>=e.lowerBound}));return e+.2*(a.baseCost+(t-a.lowerBound)*a.rate)}),0)+n.reduce((function(e,t){var a=N.find((function(e){return t<=e.upperBound&&t>=e.lowerBound}));return e+(a.baseCost+(t-a.lowerBound)*a.rate)}),0)},le=function(){if("individual"===(null===$||void 0===$?void 0:$.planType))Q(ne(oe("individual").toFixed(2))),te(ne((oe("individual")/12).toFixed(2)));else{var e=((null===$||void 0===$?void 0:$.nyHealth)?Object.keys($.nyHealth).filter((function(e){return"individual"!==e})):[]).reduce((function(e,t){return e+oe(t)}),0);Q(ne(e.toFixed(2))),te(ne((e/12).toFixed(2)))}},se=function(e){A(Object(r.a)(Object(r.a)({},$),{},Object(s.a)({},e.target.name,e.target.value)))},re=function(e){return function(t){var a=t.target.value.replace(/[^\d.-]/g,"");A(Object(r.a)(Object(r.a)({},$),{},Object(s.a)({},e,Object(r.a)(Object(r.a)({},null===$||void 0===$?void 0:$[e]),{},Object(s.a)({},t.target.name,a)))))}},ce=function(e,t){return function(a){var n,i=a.target.value.replace(/[^\d.-]/g,"");A(Object(r.a)(Object(r.a)({},$),{},Object(s.a)({},e,Object(r.a)(Object(r.a)({},null===$||void 0===$?void 0:$[e]),{},Object(s.a)({},t,Object(r.a)(Object(r.a)({},null===$||void 0===$||null===(n=$[e])||void 0===n?void 0:n[t]),{},Object(s.a)({},a.target.name,i)))))))}},de=function(e,t,a){return function(n){var i,o,l,c=n.target.value.replace(/[^\d.-]/g,"");A(Object(r.a)(Object(r.a)({},$),{},Object(s.a)({},e,Object(r.a)(Object(r.a)({},null===$||void 0===$?void 0:$[e]),{},Object(s.a)({},t,Object(r.a)(Object(r.a)({},null===$||void 0===$||null===(i=$[e])||void 0===i?void 0:i[t]),{},Object(s.a)({},a,Object(r.a)(Object(r.a)({},null===$||void 0===$||null===(o=$[e])||void 0===o||null===(l=o[t])||void 0===l?void 0:l[a]),{},Object(s.a)({},n.target.name,c)))))))))}},ue=![1,2,3].includes(H),he="end"===H;return Object(x.jsxs)("div",{className:O.app,children:[Object(x.jsxs)(u.a,{p:3,borderBottom:1,position:"sticky",top:0,className:O.header,children:[Object(x.jsx)(h.a,{variant:"h5",gutterBottom:!0,align:"center",children:"NY Health Savings Calculator for Individuals"}),Object(x.jsxs)(m.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)("img",{src:k,className:O.logo,alt:"CNYH logo"})}),Object(x.jsxs)(m.a,{item:!0,children:[Object(x.jsxs)(h.a,{variant:"body1",align:"left",color:"secondary",className:O.calculations,children:["Cost of Current Coverage (Annually):",ue?" $".concat(q):""]}),Object(x.jsxs)(h.a,{variant:"body1",align:"left",color:"secondary",className:O.calculations,children:["Cost of Current Coverage (Monthly):",ue?" $".concat(E):""]}),Object(x.jsxs)(h.a,{variant:"body1",align:"left",color:"secondary",className:O.calculations,children:["Cost in case of serious illness or accident:",ue?" $".concat(z):""]}),Object(x.jsxs)(h.a,{variant:"body1",align:"left",color:"secondary",className:O.calculations,children:["Cost for NY Health (Annually):",he?" $".concat(K):""]}),Object(x.jsxs)(h.a,{variant:"body1",align:"left",color:"secondary",className:O.calculations,children:["Cost for NY Health (Monthly):",he?" $".concat(ee):""]})]})]})]}),Object(x.jsx)(u.a,{p:6,children:Object(x.jsxs)(m.a,{container:!0,direction:"column",spacing:2,children:[1===H&&Object(x.jsxs)(m.a,{item:!0,children:[Object(x.jsx)(h.a,{variant:"body1",children:"Is your current health coverage plan"}),Object(x.jsxs)(b.a,{name:"planType",value:$.planType||"",onChange:se,children:[Object(x.jsx)(j.a,{value:"individual",control:Object(x.jsx)(v.a,{}),label:"individual"}),Object(x.jsx)(j.a,{value:"family",control:Object(x.jsx)(v.a,{}),label:"family"})]})]}),2===H&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"h6",children:"Current Health Care Costs"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsxs)(b.a,{name:"individualInputChoice",value:$.individualInputChoice||"",onChange:se,children:[Object(x.jsx)(j.a,{value:"total",control:Object(x.jsx)(v.a,{}),label:"I know my TOTAL health cost (use this if you usually reach your job\u2019s out-of-pocket maximum, use an HMO or Medical Home with  comprehensive monthly fees, or want to put in a quick estimate)"}),Object(x.jsx)(j.a,{value:"worksheet",control:Object(x.jsx)(v.a,{}),label:"I want to use a worksheet to get a more accurate answer"})]})}),"individual"===$.planType&&"total"===$.individualInputChoice&&Object(x.jsxs)(m.a,{item:!0,container:!0,xs:8,justifyContent:"space-between",alignItems:"center",children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Annual Cost",name:"annualCost",value:(null===$||void 0===$||null===(e=$.individual)||void 0===e?void 0:e.annualCost)||"",onChange:re("individual"),disabled:!!(null===$||void 0===$||null===(t=$.individual)||void 0===t?void 0:t.monthlyPayment)})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"OR"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Monthly Payment",name:"monthlyPayment",value:(null===$||void 0===$||null===(a=$.individual)||void 0===a?void 0:a.monthlyPayment)||"",onChange:re("individual"),disabled:!!(null===$||void 0===$||null===(n=$.individual)||void 0===n?void 0:n.annualCost)})})]}),"individual"===$.planType&&"worksheet"===$.individualInputChoice&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"h5",children:"Worksheet"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"Please use this worksheet to add up total health care cost. You may put in either last year\u2019s actual costs or estimates of average costs in each line. If you use this worksheet, you will also receive an estimate of total cost in case of serious accident or illness."})}),F.map((function(e){var t,a,n,i,o,l,s,r,c;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:e.text})}),e.twoFields?Object(x.jsxs)(m.a,{item:!0,xs:8,container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Annual",name:e.key,value:(null===$||void 0===$||null===(t=$.individual)||void 0===t||null===(a=t.annual)||void 0===a?void 0:a[e.key])||"",onChange:ce("individual","annual"),disabled:!!(null===$||void 0===$||null===(n=$.individual)||void 0===n||null===(i=n.monthly)||void 0===i?void 0:i[e.key])})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"OR"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Monthly",name:e.key,value:(null===$||void 0===$||null===(o=$.individual)||void 0===o||null===(l=o.monthly)||void 0===l?void 0:l[e.key])||"",onChange:ce("individual","monthly"),disabled:!!(null===$||void 0===$||null===(s=$.individual)||void 0===s||null===(r=s.annual)||void 0===r?void 0:r[e.key])})})]}):Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{name:e.key,value:(null===$||void 0===$||null===(c=$.individual)||void 0===c?void 0:c[e.key])||"",onChange:re("individual")})})]})}))]})]}),3===H&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"h6",children:"Current Family Health Care Costs"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"New York Health covers every individual with payment based on income, with no payment for individuals whose income is below $25,000. This means that there is no \u201cfamily plan\u201d under NY Health, but for the purposes of the cost comparison, this estimator will compare total cost per family."})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsxs)(b.a,{name:"familyInputChoice",value:$.familyInputChoice||"",onChange:se,children:[Object(x.jsx)(j.a,{value:"total",control:Object(x.jsx)(v.a,{}),label:"I know my family\u2019s TOTAL health cost (use this if you usually reach your job\u2019s out-of-pocket maximum, use an HMO or Medical Home with  comprehensive monthly fees, or want to put in a quick estimate)"}),Object(x.jsx)(j.a,{value:"worksheet",control:Object(x.jsx)(v.a,{}),label:"I want to use a worksheet to get a more accurate answer"})]})}),"family"===$.planType&&"total"===$.familyInputChoice&&Object(x.jsxs)(m.a,{item:!0,container:!0,xs:8,justifyContent:"space-between",alignItems:"center",children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Annual Cost",name:"annualCost",value:(null===$||void 0===$||null===(o=$.family)||void 0===o?void 0:o.annualCost)||"",onChange:re("family"),disabled:!!(null===$||void 0===$||null===(l=$.family)||void 0===l?void 0:l.monthlyPayment)})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"OR"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Monthly Payment",name:"monthlyPayment",value:(null===$||void 0===$||null===(d=$.family)||void 0===d?void 0:d.monthlyPayment)||"",onChange:re("family"),disabled:!!(null===$||void 0===$||null===(f=$.family)||void 0===f?void 0:f.annualCost)})})]}),"family"===$.planType&&"worksheet"===$.familyInputChoice&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"h5",children:"Worksheet"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"Please use this worksheet to add up total health care cost. You may put in either last year\u2019s actual costs or estimates of average costs in each line. If you use this worksheet, you will also receive an estimate of total cost in case of serious accident or illness."})}),F.map((function(e){var t,a,n,i,o,l,s,r,c;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:e.text})}),e.twoFields?Object(x.jsxs)(m.a,{item:!0,xs:8,container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Annual",name:e.key,value:(null===$||void 0===$||null===(t=$.family)||void 0===t||null===(a=t.annual)||void 0===a?void 0:a[e.key])||"",onChange:ce("family","annual"),disabled:!!(null===$||void 0===$||null===(n=$.family)||void 0===n||null===(i=n.monthly)||void 0===i?void 0:i[e.key])})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"OR"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{label:"Monthly",name:e.key,value:(null===$||void 0===$||null===(o=$.family)||void 0===o||null===(l=o.monthly)||void 0===l?void 0:l[e.key])||"",onChange:ce("family","monthly"),disabled:!!(null===$||void 0===$||null===(s=$.family)||void 0===s||null===(r=s.annual)||void 0===r?void 0:r[e.key])})})]}):Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(g,{name:e.key,value:(null===$||void 0===$||null===(c=$.family)||void 0===c?void 0:c[e.key])||"",onChange:re("family")})})]})}))]})]}),4===H&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"h6",children:"Estimated Cost Under New York Health"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"Your cost of New York Health is based on your income, not your health care needs. As the legislation currently exists, income is broken down into employment (for which the premium will be taken out with taxes withheld from your paycheck), self-employment (for which the premiums will be included in annual taxes or quarterly estimated payments) and dividend and capital gains income (for which the premiums will be included with quarterly estimated tax payments)."})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"There is a floor in each category of $25,000. For the purposes of this estimator, you may omit any job, interest income or dividend income that is less than $25,000 annually, but for those more than that, please enter the full amount, and the software will do the calculation, including subtracting the first $25,000."})}),Object(x.jsx)(C,{onChange:de,type:"individual",formFields:$})]}),5===H&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"h6",children:"Estimated Cost Under New York Health"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"Your cost of New York Health is based on your income, not your health care needs. As the legislation currently exists, income is broken down into employment (for which the premium will be taken out with taxes withheld from your paycheck), self-employment (for which the premiums will be included in annual taxes or quarterly estimated payments) and dividend and capital gains income (for which the premiums will be included with quarterly estimated tax payments)."})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"There is a floor in each category of $25,000. For the purposes of this estimator, you may omit any job, interest income or dividend income that is less than $25,000 annually, but for those more than that, please enter the full amount, and the software will do the calculation, including subtracting the first $25,000."})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsxs)(h.a,{variant:"body1",style:{marginTop:12},children:[Object(x.jsx)(u.a,{component:"span",fontWeight:"bold",children:"Self"}),"\xa0(you will enter income for other family members in the next screen. If you had no income over $25,000, click on the \u201cContinue\u201d button below.)"]})}),Object(x.jsx)(C,{onChange:de,type:"self",formFields:$})]}),6===H&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"h6",children:"Estimated Cost Under New York Health"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsxs)(h.a,{variant:"body1",style:{marginTop:12},children:[Object(x.jsx)(u.a,{component:"span",fontWeight:"bold",children:"Spouse"}),"\xa0(or other family member earning over $25,000. If you are the only earner for the family click the \u201cContinue\u201d button below)"]})}),Object(x.jsx)(C,{onChange:de,type:"spouse",formFields:$})]}),H>6&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"h6",children:"Estimated Cost Under New York Health"})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsxs)(h.a,{variant:"body1",style:{marginTop:12},children:[Object(x.jsx)(u.a,{component:"span",fontWeight:"bold",children:"Other family member earning over $25,000"}),"\xa0(if no other family members earns more than $25,000, click the \u201cContinue\u201d button below))"]})}),Object(x.jsx)(C,{onChange:de,type:H-7,formFields:$})]}),"end"===H&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"h6",children:"Congratulations! Your comparison is complete."})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"The figures used to estimate the cost of the New York Health plan are based on calculations made by the Rand corporation for the cost required to cover comprehensive medical, dental, eye, ear, mental and substance abuse care for ALL New York residents, if the New York Health Act passes as the bill is currently written."})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"The Rand study did not include the $25,000 income floor that is included in the bill in its calculations for payments, so this estimator has been adapted to include that floor in covering the full costs as estimated by the Rand study."})}),Object(x.jsx)(m.a,{item:!0,children:Object(x.jsx)(h.a,{variant:"body1",children:"Both the costs and the income are only estimates, but they are the best estimates available at this time. The Rand study provided detailed information to back up its estimate of what it will cost to cover all health care for all New York residents if insurance profits are not covered, the state bargains as a single unit with pharmaceutical and device companies, and payments are channeled through a single payer to make the system more efficient and accountable and save on the cost of CEO salaries for multiple insurance companies. By their estimates on this basis, comprehensive health care coverage for all New Yorkers will cost $11 billion less per year than the partial coverage we currently experience costs today."})})]}),Object(x.jsxs)(m.a,{item:!0,container:!0,justifyContent:"space-between",children:[1!==H&&Object(x.jsx)(y.a,{color:"secondary",variant:"contained",onClick:function(){switch(!0){case 2===H||3===H:P(1);break;case 4===H:P(2);break;case 5===H:P(3);break;case H>5:P(H-1);break;case"end"===H:P(1),A(T);break;default:P(H)}},children:"end"===H?"Start Over":"Go Back"}),"end"!==H&&Object(x.jsx)(y.a,{color:"secondary",variant:"contained",onClick:function(){switch(!0){case 1===H&&"individual"===(null===$||void 0===$?void 0:$.planType):P(2);break;case 1===H&&"family"===(null===$||void 0===$?void 0:$.planType):P(3);break;case 2===H:P(4),ie($.planType);break;case 3===H:P(5),ie($.planType);break;case 4===H:P("end"),le();break;case 5===H:0===oe("self")?(le(),P("end")):P(6);break;case 6===H:0===oe("spouse")?(le(),P("end")):P(7);break;case H>6:0===oe(H-7)?(le(),P("end")):P(H+1);break;default:P(H)}},children:"Continue"})]})]})})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),i(e),o(e),l(e)}))},T=a(53),Y=a(111),B=Object(T.a)({palette:{primary:{main:"#ce002c"},secondary:{main:"#3d8ceb"}},typography:{fontFamily:"'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif"}});l.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(Y.a,{theme:B,children:Object(x.jsx)(H,{})})}),document.getElementById("root")),P()}},[[76,1,2]]]);
//# sourceMappingURL=main.189581a0.chunk.js.map