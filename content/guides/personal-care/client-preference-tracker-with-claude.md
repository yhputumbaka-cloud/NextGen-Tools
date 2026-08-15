---
title: "Client Preference Tracker with Claude"
slug: "client-preference-tracker-with-claude"
industry: "personal-care-services"
category: "Client Relationships and Booking"
tier: 3
summary:
  - "How to build a private, searchable record of each client's preferences, formulas, and visit notes"
  - "How to prompt Claude to build this as a Claude Artifact that remembers information between visits, not one that resets every time you open it"
  - "How to keep this tool useful and private, since it's for you, not something clients or the public ever see"
---

## What This Guide Covers
- How to build a private, searchable record of each client's preferences, formulas, and visit notes
- How to prompt Claude to build this as a Claude Artifact that remembers information between visits, not one that resets every time you open it
- How to keep this tool useful and private, since it's for you, not something clients or the public ever see

**Requires Claude Pro, Max, Team, or Enterprise.** The whole value of this guide is data that's still there the next time you open it, and that specific feature is not available on a free account.

---

## Why This Matters
Remembering the details of a repeat client, their exact color formula, how much pressure they like during a massage, which product caused a reaction last time, is one of the clearest ways personal care businesses build trust.

---

## Case Study: Ashgrove Hair Studio
Ashgrove Hair Studio, run by a single colorist with a large repeat client base, used to rely on handwritten formula cards kept in a card box that occasionally went missing.

**Result:** Pulling up a returning client's exact formula before they sat down took seconds instead of digging through a card box.

---

## Step-by-Step Guide

### Step 1: Decide what fields matter for your specific service
A colorist might track base formula, developer volume, and processing time. A massage therapist might track pressure preference, areas to avoid, and product sensitivities.

### Step 2: Prompt Claude to build the tracker as a persistent Artifact

```
Build a private client tracker as an interactive tool for a [type 
of business]. Use persistent storage so client records are saved 
and still there the next time I open this tool, not reset each 
session.

Fields to track per client: [list your fields, e.g. name, base 
formula, processing time, last visit date, notes]

The tool should:
- Let me add a new client record
- Let me search or select an existing client quickly by name
- Let me edit a client's record after a visit
- Use a simple, minimal visual style with [your brand color, e.g. 
navy blue] as the primary accent color
```

### Step 3: Publish the tool before testing storage
Persistent storage only activates once an artifact is published.

### Step 4: Add your existing clients to get started
Enter your regulars first.

### Step 5: Build a simple habit of updating it after every visit

*Tip:* If anything changed from the client's usual routine, note it clearly.

### Step 6: Decide who else, if anyone, should have access

> Never publish this tracker as a public link. It holds real client information, and a public link can be opened by anyone who has it, not just you.

---

## Frequently Asked Questions

**Q: Will the information stay saved if I close the conversation and come back later?**
Yes, as long as you're on Pro or higher, the tool was built with persistent storage, and it's been published. On a free account, the data resets when the session ends.

**Q: Can more than one staff member use the same tracker?**
It's possible, but think through access carefully first.

**Q: Is this a medical record system?**
No. This is a business tool for tracking service preferences and formulas.

**Q: What happens if I need to find a specific client quickly during a busy day?**
That's what the search or select feature is for.

**Q: Can I export this information if I switch to different software later?**
Ask Claude to add an export option when you're building or updating the tool.
