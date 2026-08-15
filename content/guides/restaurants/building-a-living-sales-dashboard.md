---
title: "Building a Living Sales Dashboard"
slug: "building-a-living-sales-dashboard"
industry: "restaurants"
category: "Data and Analytics"
tier: 3
summary:
  - "How to build an interactive sales dashboard directly in your Artifacts tab, with data that actually persists week to week"
  - "How to set it up so updating it weekly takes a few minutes, not a rebuild"
  - "How to see trends visually over time, not just as a list of numbers to mentally compare"
---

## What This Guide Covers
- How to build an **interactive sales dashboard** directly in your Artifacts tab, with data that actually persists week to week
- How to set it up so **updating it weekly takes a few minutes**, not a rebuild
- How to see trends **visually over time**, not just as a list of numbers to mentally compare

**Requires Claude Pro, Max, Team, or Enterprise.** This guide relies on persistent storage to remember your weekly numbers between visits, which is only available on paid plans.

---

## Why This Matters
A spreadsheet of weekly sales numbers technically contains all the same information as a dashboard, but a long column of numbers doesn't make a trend obvious the way a simple chart does. Claude can build this directly as an interactive Artifact, with the numbers you enter each week actually saved.

---

## Case Study: Harbour Street Grill
The owner of Harbour Street Grill had been logging weekly sales in a basic spreadsheet for over a year but had never gone back to look for any pattern. Building a living dashboard with a simple chart showing revenue over time made a slow seasonal decline visible immediately.

**Result:** The owner caught the seasonal dip early enough to plan a targeted promotion before the slow period fully set in.

---

## Step-by-Step Guide

### Step 1: Decide What You Actually Want to Track
Weekly total revenue is a strong starting point.

### Step 2: Create the Dashboard Directly in the Artifacts Tab

```
Build me an interactive sales dashboard. I want to enter my weekly
revenue number each week, and have the dashboard show a simple line
chart of revenue over time, along with the percentage change from
the previous week.

Important: use persistent storage so my data is saved and still
there the next time I open this artifact, not just held in memory
for this session. Store each week's entry as its own record so
nothing gets overwritten, and make it easy to add a new week's
number without losing any previous data.
```

### Step 3: Publish the Artifact Before Testing It

> Persistent storage only activates once an artifact is published, not while it's still in draft. Click Publish before entering any real data.

### Step 4: Enter Your Existing Historical Data

```
Here's my sales data from the past [number] weeks: [paste your
data]. Add all of this to the dashboard's stored data so the chart
reflects our actual history.
```

### Step 5: Test the Weekly Update Process
Close the artifact entirely, reopen it, and confirm the data you entered is still there.

### Step 6: Build the Weekly Habit
Pick a consistent day and update the dashboard with the past week's number.

---

## Frequently Asked Questions

**Q: What happens to my data if I'm on a Free plan?**
The dashboard will still function during that session, but nothing is saved once you close it.

**Q: I published the artifact and entered data, but it's not showing up when I reopen it. What went wrong?**
Double check you're opening the exact same artifact, and confirm you're on a Pro plan or higher.

**Q: What happens if I forget to update it for a week or two?**
Simply add the missing weeks' numbers whenever you return, noting any gap.

**Q: Can this dashboard connect directly to my POS system?**
Not automatically, this relies on you entering the number manually each week.

**Q: Should I track revenue, profit, or both?**
Revenue is the simplest starting point. Adding a profit line alongside revenue is a reasonable next step once the basic habit is established.
