---
title: "Automated Class Waitlist"
slug: "automated-class-waitlist"
industry: "sports-fitness-recreation"
category: "Member Relationships and Scheduling"
tier: 3
summary:
  - "How to fill an open class spot automatically when someone cancels, instead of relying on you checking manually"
  - "How to use your membership platform's native waitlist feature, if it has one"
  - "How to build a persistent Claude Artifact waitlist tool as a fallback that generates the outreach text with one click"
---

## What This Guide Covers
- How to fill an open class spot automatically when someone cancels, instead of relying on you checking manually
- How to use your membership platform's native waitlist feature, if it has one
- How to build a persistent Claude Artifact waitlist tool as a fallback that generates the outreach text with one click

---

## Why This Matters
A canceled class booking that goes unfilled is a lost spot in a capped class. Many platforms built for class based businesses now include native waitlist functionality, check what you already have.

---

## Case Study: Lumen Pilates Studio
Lumen Pilates Studio found that their booking platform had a native waitlist feature with automatic notifications, something the owner had never turned on.

**Result:** Canceled spots started filling automatically, without the owner needing to check or manage a waitlist at all.

---

## Step-by-Step Guide

### Step 1: Check whether your platform has a native waitlist feature

### Step 2: Turn it on and configure notifications

### Step 3: Write the notification content with Claude

```
Write a short text to notify waitlist members when a class spot 
opens up.

Business type: [type of business]
Details to include: the class, time, and a clear first come first 
served instruction

Keep it under 250 characters and make it feel like good news, not 
a chore.
```

### Step 4: If your platform doesn't support this, build a tracker instead
**Requires Claude Pro, Max, Team, or Enterprise.**

```
Build a private waitlist tool as an interactive tool for a [type 
of business]. Use persistent storage so the list is saved and 
still there the next time I open this tool.

The tool should:
- Let me add a member to the waitlist for a specific class, with 
their name and contact info
- Generate a ready to send outreach message when I mark a spot as 
open, using the member's name
- Let me remove a member once they've booked or declined
- Use a simple, minimal visual style with [your brand color, e.g. 
navy blue] as the primary accent color
```

### Step 5: Decide your fairness rule

### Step 6: Test it before relying on it

---

## Frequently Asked Questions

**Q: What if my platform's waitlist doesn't let me control the message wording?**
The Artifact version from Step 4 gives you full control, on a Pro plan or higher.

**Q: How many people should be on a class waitlist?**
As many as are genuinely interested.

**Q: Should I overbook classes slightly to account for no shows?**
That's a judgment call specific to your space and safety considerations.

**Q: Is this worth setting up for a business without capped class sizes?**
If your classes aren't capacity limited, this matters less.
