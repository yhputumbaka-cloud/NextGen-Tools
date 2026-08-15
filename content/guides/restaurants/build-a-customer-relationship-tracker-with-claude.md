---
title: "Build a Customer Relationship Tracker with Claude"
slug: "build-a-customer-relationship-tracker-with-claude"
industry: "restaurants"
category: "Customer Engagement and Communication"
tier: 3
summary:
  - "How to have Claude build an interactive customer relationship tool that actually remembers every customer you add, visit after visit"
  - "How to log visits, preferences, and notes in a way that builds into something genuinely useful over months"
  - "How to use accumulated history to spot lapsed regulars and personalize outreach, backed by a real system"
---

## What This Guide Covers
- How to have Claude build an interactive customer relationship tool that **actually remembers every customer** you add, visit after visit
- How to log **visits, preferences, and notes** in a way that builds into something genuinely useful over months
- How to use accumulated history to **spot lapsed regulars and personalize outreach**, backed by a real system

**Requires Claude Pro, Max, Team, or Enterprise.** This guide relies on persistent storage to remember every customer and visit you add, which is only available on paid plans. On a Free account, every customer you add would disappear the moment you closed the artifact.

---

## Why This Matters
A customer relationship tool is only as good as its memory. A list of regulars that resets every time you close the tab isn't a CRM, it's a form. **The entire value of tracking customer relationships comes from what accumulates over time.**

---

## Case Study: The Wandering Fox
The Wandering Fox had been managing customer relationships informally. After building a persistent customer tracker in the Artifacts tab, the owner started logging every notable visit, a first-timer, a celebration, a regular's order preferences.

**Result:** Three months in, the tool held genuine, accumulated history on dozens of regulars, and the owner could pull up a customer's past visits and preferences in seconds.

---

## Step-by-Step Guide

### Step 1: Decide What You Actually Want to Track Per Customer
Keep the first version focused: name, contact info if you have it, visit dates, notable preferences, and a free-text notes field.

### Step 2: Build the Tool Directly in the Artifacts Tab

```
Build me an interactive customer relationship tracker for my
restaurant. For each customer I want to store: name, contact info,
visit dates, notable preferences, and a free-text notes field.
Let me add a new customer, add a new visit entry to an existing
customer, and search or filter by name.

Important: use persistent storage so every customer and every visit
I add is actually saved and still there the next time I open this
artifact, not lost when I close the session. Store each customer
as their own record so adding a new customer never overwrites an
existing one.
```

### Step 3: Publish the Artifact Before Adding Real Customers

> Storage only activates once published. Click Publish before entering a single real customer, then test: add one customer, close the artifact fully, reopen it, and confirm that customer is still there.

### Step 4: Add Your Existing Regulars

```
I want to add a new customer: [name]. Contact info: [if available].
Notable preferences: [what you know]. Notes: [any relevant detail
about past visits or interactions].
```

### Step 5: Build the Habit of Logging After Notable Visits

```
Add a new visit for [customer name] on [date]. Notes: [what
happened, what they ordered, anything worth remembering].
```

### Step 6: Use What's Accumulated
Search for regulars who haven't visited in a while, or pull up a returning customer's preferences before they sit down.

---

## Frequently Asked Questions

**Q: What happens to my data if I'm on a Free plan?**
It won't be there when you come back, which defeats the entire purpose of this guide.

**Q: I added customers and they disappeared. What happened?**
Almost certainly either the artifact wasn't published before you entered data, or you're on a Free plan.

**Q: How is this different from a spreadsheet?**
This tool is built for fast searching, structured entry, and a UI designed around adding and reviewing customer records quickly.

**Q: What if two staff members need to see the same customer data?**
Mention this when building the artifact, since Claude can set records to be visible to anyone who opens the artifact.

**Q: How many customers can this realistically hold?**
Generally far more than an independent restaurant's regular customer base would need.
