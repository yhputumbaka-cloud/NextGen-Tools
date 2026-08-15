---
title: "Class and Instructor Profitability"
slug: "class-and-instructor-profitability"
industry: "sports-fitness-recreation"
category: "Data and Analytics"
tier: 3
summary:
  - "How to figure out which of your classes and formats actually make the most money, not just which are most popular"
  - "How to prompt Claude to build a persistent calculator that tracks cost, time, and margin per class"
  - "How to use real margin data to make pricing and scheduling decisions"
---

## What This Guide Covers
- How to figure out which of your classes and formats actually make the most money, not just which are most popular
- How to prompt Claude to build a persistent calculator that tracks cost, time, and margin per class
- How to use real margin data to make pricing and scheduling decisions

**Requires Claude Pro, Max, Team, or Enterprise.**

---

## Why This Matters
Your most popular class isn't necessarily your most profitable one. Most membership platforms track attendance and revenue, but very few calculate true profitability.

---

## Case Study: Anvil Athletics
Anvil Athletics assumed their most requested class, a specialized small group format with a premium price, was also their most profitable, since it always filled up first. Running the actual numbers showed a simpler, higher capacity class actually earned more per hour.

**Result:** The gym adjusted its schedule to run the higher capacity format more often.

---

## Step-by-Step Guide

### Step 1: Gather your real cost and time data per class

### Step 2: Prompt Claude to build the calculator as a persistent Artifact

```
Build a class and instructor profitability calculator as an 
interactive tool for a [type of business]. Use persistent storage 
so my class data is saved and still there the next time I open 
this tool.

Classes to include: [list your classes with price per session, 
coach pay, typical attendance, and capacity]

The tool should:
- Calculate profit margin and profit per hour of facility time 
for each class
- Let me sort or rank classes by profit per hour
- Let me add, edit, or remove classes as my schedule changes
- Use a simple, minimal visual style with [your brand color, e.g. 
navy blue] as the primary accent color
```

### Step 3: Publish the tool before entering real numbers

### Step 4: Enter your full class schedule

### Step 5: Look at profit per hour, not just total margin

### Step 6: Revisit scheduling or pricing based on what you find

```
Here's what my profitability calculator shows: [describe the 
findings]

Suggest a few realistic ways I could respond to this.
```

---

## Frequently Asked Questions

**Q: Do I need exact cost figures, or are estimates okay?**
Rough estimates work fine to start.

**Q: Should I include facility overhead, not just coach pay?**
That's a reasonable addition, just be consistent about whether every class includes it.

**Q: What if a low profit class is still worth keeping for other reasons?**
That's a legitimate call, this tool tells you the numbers, not the whole business decision.

**Q: How often should I update the numbers in this tool?**
Whenever your pricing or coach pay meaningfully changes.
