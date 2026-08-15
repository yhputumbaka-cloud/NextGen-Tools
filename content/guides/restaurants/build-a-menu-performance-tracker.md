---
title: "Build a Menu Performance Tracker"
slug: "build-a-menu-performance-tracker"
industry: "restaurants"
category: "Data and Analytics"
tier: 1
summary:
  - "How to have Claude build an interactive weekly tracker that ranks your menu items and shows trends over time, with data that actually persists between visits"
  - "How to enter each week's numbers in a few minutes and have the tool surface patterns automatically"
  - "How to use what you find to make specific, low-risk menu decisions rather than relying on gut feel alone"
---

## What This Guide Covers
- How to have Claude build an **interactive weekly tracker** that ranks your menu items and shows trends over time, with data that actually persists between visits
- How to enter each week's numbers in a few minutes and have the tool **surface patterns automatically**
- How to use what you find to make **specific, low-risk menu decisions** rather than relying on gut feel alone

**Requires Claude Pro, Max, Team, or Enterprise.** This guide relies on persistent storage to remember your weekly rankings and trend history, which is only available on paid plans. On a Free account, you'd need to re-paste all prior weeks' numbers every time you reopen the tracker, which defeats the purpose of it.

---

## Why This Matters
Most restaurant owners have a rough sense of what's popular, shaped by recent memory. That gut sense rarely reflects the full picture across weeks and months. A tracker built as an interactive Artifact with real persistence does the comparison automatically.

---

## Case Study: Founders Row Tavern
The manager at Founders Row Tavern assumed the fish tacos were one of the kitchen's most popular dishes. After building a weekly tracking tool and logging actual order counts for six weeks, a clear pattern emerged: the fish tacos were solidly mid-tier, while a pasta special nobody talked about much was quietly outselling almost everything else.

**Result:** The owner adjusted prep quantities accordingly, reducing waste on the overestimated item and avoiding the pasta special running out early.

---

## Step-by-Step Guide

### Step 1: List Every Menu Item You Want to Track
Start with your current menu, every dish you want to include.

### Step 2: Decide How You Will Get the Numbers Each Week
Most POS systems can produce a basic sales-by-item report at the end of each week.

### Step 3: Build the Tool Directly in the Artifacts Tab

```
Build me an interactive weekly menu performance tracker for my
restaurant. Here is my menu item list: [paste your list of dishes].
Each week I will enter the number of times each dish was ordered.
The tool should automatically rank dishes from most to least ordered
for that week, show the change in rank compared to the previous
week, and flag any item that has risen or fallen significantly.
After several weeks of data, show a simple trend line or summary
for each item so I can see patterns over time.

Important: use persistent storage so each week's data is actually
saved and still there the next time I open this artifact. Store
each week as its own dated record so nothing gets overwritten when
I add a new week.
```

### Step 4: Publish the Artifact Before Entering Real Data

> Storage only activates once the artifact is published. Click Publish before entering your first week of numbers.

### Step 5: Enter Your First Few Weeks and Test the Persistence
Name the artifact something clear like "[Restaurant Name] Menu Tracker." At least three to four weeks of data are needed before patterns become meaningful.

### Step 6: Review and Act on What You Find
Items that rank consistently lower than expected are worth investigating before automatically removing them. Make one small change at a time and keep tracking.

---

## Frequently Asked Questions

**Q: What happens to my data if I'm on a Free plan?**
The tracker will work within that single session, but nothing carries over once you close it.

**Q: I entered data and it's gone when I reopen the tracker. What happened?**
Most likely the artifact wasn't published before you entered data, or you're on a Free plan.

**Q: How many weeks of data do I need before this is actually useful?**
Three to four weeks is a reasonable minimum.

**Q: What if a dish sells well but is genuinely a hassle to make?**
That's exactly the kind of judgment call worth bringing into a separate conversation directly.

**Q: What if I want to track specials that change week to week, not just the permanent menu?**
Ask Claude to build in a section for weekly specials when you create the artifact.
