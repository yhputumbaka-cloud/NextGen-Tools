---
title: "Build an Allergen Reference Tool for Your Team"
slug: "build-an-allergen-reference-tool-for-your-team"
industry: "restaurants"
category: "Operations and Efficiency"
tier: 2
summary:
  - "How to have Claude build a fast, filterable allergen reference tool your staff can search by dish or by allergen, directly in your Artifacts tab"
  - "How to structure it so a staff member can find an accurate answer during live service in seconds"
  - "Why human verification of every single entry matters more in this guide than in any other guide in this library"
---

## What This Guide Covers
- How to have Claude build a **fast, filterable allergen reference tool** your staff can search by dish or by allergen, directly in your Artifacts tab
- How to structure it so a staff member can find an accurate answer **during live service in seconds**
- Why **human verification of every single entry** matters more in this guide than in any other guide in this library

---

## Why This Matters
Allergen and dietary information is one of the few places in a restaurant where a mistake doesn't just disappoint a customer, it can genuinely harm them. Claude is genuinely useful for building the structure of this tool. **It cannot taste your food, see your actual kitchen setup, or know about cross-contamination risks specific to your restaurant. The human verification step in this guide is not optional.**

---

## Case Study: Hawthorne Table
Hawthorne Table had allergen information scattered across a few sticky notes and the head chef's memory. The owner worked with Claude to build a filterable allergen reference tool, then had every single entry verified against actual ingredient labels and kitchen practices before it went live.

**Result:** Staff could answer allergy questions confidently and immediately, and the verification process itself caught two packaged ingredients that contained allergens the owner hadn't realized were present.

---

## Step-by-Step Guide

### Step 1: Build a Complete Ingredient List First
Compile a real, complete list of every dish on your menu and every ingredient that goes into it, including components that might seem minor.

### Step 2: Generate the Initial Reference with Claude

```
Help me build an allergen reference guide for my restaurant. Here
is every dish and its full ingredient list: [paste your complete
list]. For each dish, identify which of the 14 major allergens are
present: celery, cereals containing gluten, crustaceans, eggs,
fish, lupin, milk, molluscs, mustard, peanuts, sesame, soybeans,
sulphur dioxide and sulphites, and tree nuts. Also note whether
each dish could be adapted for vegetarian, vegan, or gluten-free
dietary needs.
```

### Step 3: Verify Every Single Entry Against Reality

> This is the step that cannot be skipped or rushed under any circumstances. Go through every dish and every allergen flag and confirm it against actual ingredient labels, current supplier information, and real kitchen practices. Where anything is uncertain, mark it as "cannot confirm" rather than guessing in either direction.

### Step 4: Build the Tool Directly in the Artifacts Tab

```
Build me an interactive allergen reference tool for my restaurant
team. Here is our verified allergen data by dish: [paste verified
data].

Include two ways to search: by dish name, showing all allergens
present in that dish, and by allergen, showing every dish that
contains it. Staff need to be able to search either direction
quickly during service. Make it fast to use on a phone screen
and clear enough to read at a glance.
```

### Step 5: Name It and Make It Immediately Accessible
Name the artifact something unambiguous like "[Restaurant Name] Allergen Reference, Verified [Month Year]."

### Step 6: Make This One of the First Things New Staff Are Shown
A reference tool only works if the people who need it know it exists and trust that what's in it is accurate.

---

## Frequently Asked Questions

**Q: Can I trust the AI-generated draft without doing the full verification step?**
No. This is the one place in this entire library where that answer is unambiguous.

**Q: How often does this tool need to be updated?**
Immediately whenever a menu item changes, a new dish is added, or a supplier or ingredient changes.

**Q: Should this be shared with customers directly, or kept internal for staff?**
The full reference is better kept as an internal staff tool that informs how staff answer questions in person.

**Q: What if a customer asks about an allergen or ingredient not covered in the tool?**
Train staff to say they will check rather than guess, and bring the question directly to the kitchen.

**Q: Who on staff should have access to this tool?**
Everyone who might field a customer question, not just kitchen staff.
