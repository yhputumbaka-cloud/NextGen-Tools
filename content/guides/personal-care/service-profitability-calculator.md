---
title: "Service Profitability Calculator"
slug: "service-profitability-calculator"
industry: "personal-care-services"
category: "Data and Analytics"
tier: 3
summary:
  - "How to figure out which of your services actually make the most money, not just which sell the most"
  - "How to prompt Claude to build a persistent calculator that tracks cost, time, and margin per service"
  - "How to use real margin data to make pricing and scheduling decisions"
---

## What This Guide Covers
- How to figure out which of your services actually make the most money, not just which sell the most
- How to prompt Claude to build a persistent calculator that tracks cost, time, and margin per service
- How to use real margin data to make pricing and scheduling decisions

**Requires Claude Pro, Max, Team, or Enterprise.** This tool needs to save your service data between visits.

---

## Why This Matters
Your most popular service isn't necessarily your most profitable one. Very few platforms calculate true profitability, since that requires your cost and time inputs, which only you know.

---

## Case Study: Indigo Nail Studio
Indigo Nail Studio assumed their most requested service was also their most profitable, since it was always booked out. Running the actual numbers showed the service's high product cost and long chair time meant a simpler service actually earned more per hour.

**Result:** The studio adjusted pricing on the nail art add on.

---

## Step-by-Step Guide

### Step 1: Gather your real cost and time data per service

### Step 2: Prompt Claude to build the calculator as a persistent Artifact

```
Build a service profitability calculator as an interactive tool 
for a [type of business]. Use persistent storage so my service 
data is saved and still there the next time I open this tool.

Services to include: [list your services with price, time, and 
estimated cost per service]

The tool should:
- Calculate profit margin and profit per hour for each service
- Let me sort or rank services by profit per hour
- Let me add, edit, or remove services as my menu changes
- Use a simple, minimal visual style with [your brand color, e.g. 
navy blue] as the primary accent color
```

### Step 3: Publish the tool before entering real numbers

### Step 4: Enter your full service menu

### Step 5: Look at profit per hour, not just total margin

### Step 6: Revisit pricing or scheduling based on what you find

```
Here's what my profitability calculator shows: [describe the 
findings, e.g. service X earns the most per hour, service Y is 
barely breaking even]

Suggest a few realistic ways I could respond to this.
```

---

## Frequently Asked Questions

**Q: Do I need exact cost figures, or are estimates okay?**
Rough estimates work fine to start.

**Q: Should I include my own labor cost, not just supplies?**
That's a reasonable addition, just be consistent about whether every service includes it.

**Q: What if a low profit service is still worth keeping for other reasons?**
That's a legitimate call, this tool tells you the numbers, not the whole business decision.

**Q: How often should I update the numbers in this tool?**
Whenever your pricing or supply costs meaningfully change.
