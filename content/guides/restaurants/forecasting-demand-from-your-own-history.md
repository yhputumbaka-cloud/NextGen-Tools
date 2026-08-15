---
title: "Forecasting Demand From Your Own History"
slug: "forecasting-demand-from-your-own-history"
industry: "restaurants"
category: "Data and Analytics"
tier: 3
summary:
  - "How to use your own historical sales data to identify real seasonal and weekly patterns"
  - "How to build a reasonable forecast for upcoming slow and busy periods based on those patterns"
  - "How to use that forecast to make smarter staffing and ordering decisions in advance, rather than reacting after the fact"
---

## What This Guide Covers
- How to use your own historical sales data to identify **real seasonal and weekly patterns**
- How to build a **reasonable forecast** for upcoming slow and busy periods based on those patterns
- How to use that forecast to make **smarter staffing and ordering decisions in advance**, rather than reacting after the fact

---

## Why This Matters
Every other Data and Analytics guide in this library looks backward. Forecasting uses that same historical data to make an informed prediction about what's coming next. With enough historical data, Claude can identify genuine patterns and turn them into a forecast specific to your restaurant.

---

## Case Study: Pelican Point Seafood
The owner of Pelican Point Seafood had always staffed somewhat reactively. After uploading a full year of sales history, a clear pattern emerged, a reliable, sustained dip in the three weeks following the local boating season's end, every single year.

**Result:** The owner planned staffing and a targeted promotion for that specific window the following year, rather than discovering the dip in real time.

---

## Step-by-Step Guide

### Step 1: Gather as Much Historical Data as You Have
This guide works best with at least a full year of data.

### Step 2: Upload the Data and Ask for Seasonal Patterns

```
I've uploaded [timeframe] of sales data. Analyze this for seasonal
or recurring patterns, are there specific times of year, specific
weeks, or specific days that consistently over- or under-perform
compared to the rest of the year?
```

### Step 3: Connect Patterns to Likely Causes

```
For the patterns you found, what context might explain them, local
events, weather patterns, holidays, or anything else worth considering?
I want to understand not just what the pattern is, but why it might
be happening.
```

### Step 4: Build a Forecast for the Upcoming Period

```
Based on these patterns, build a reasonable forecast for the next
[timeframe, e.g. three months]. I want a realistic range, not a
single overly precise number, and a note on which weeks are most
likely to be busier or slower than average.
```

### Step 5: Translate the Forecast Into Practical Decisions

```
Based on this forecast, what should I consider adjusting for staffing
and ordering in the weeks flagged as likely to be slower or busier
than usual?
```

### Step 6: Compare the Forecast Against What Actually Happens

```
Here's what actually happened during the period we forecasted:
[paste real data]. How did this compare to the forecast, and is
there anything we should adjust about how we're identifying patterns
going forward?
```

---

## Frequently Asked Questions

**Q: How much historical data do I need before forecasting is actually reliable?**
At least one full year, two or more makes the forecast meaningfully more reliable.

**Q: What if something unprecedented happens that wouldn't be in my historical data?**
Mention it directly, Claude can reason about a known disruption even without historical precedent.

**Q: Is this the same as the benchmarking guide earlier in this category?**
Different focus, benchmarking compares against external standards, forecasting uses your own internal history.

**Q: How specific should I expect the forecast to be, an exact number or a general range?**
Expect and ask for a reasonable range rather than a single overly precise figure.

**Q: What if my restaurant is too new to have a full year of historical data?**
Even a few months of data can surface early useful patterns, treat any forecast as more tentative.
