---
title: "Automated Referral and Loyalty Program"
slug: "automated-referral-and-loyalty-program"
industry: "personal-care-services"
category: "Marketing and Branding"
tier: 3
summary:
  - "How to set up a referral or loyalty system that tracks itself, instead of relying on a notebook or memory"
  - "How to use your booking platform's built in features, if it has them, before building anything from scratch"
  - "How to build a simple Claude Artifact tracker as a fallback when your platform doesn't support this natively"
---

## What This Guide Covers
- How to set up a referral or loyalty system that **tracks itself**, instead of relying on a notebook or memory
- How to use your **booking platform's built in features**, if it has them, before building anything from scratch
- How to build a **simple Claude Artifact tracker** as a fallback when your platform doesn't support this natively

**Requires Claude Pro, Max, Team, or Enterprise for the fallback tracker in Step 4.** That version needs to save data between visits, which free accounts can't do. If your booking platform already has a referral feature, Steps 1 through 3 work on any plan.

---

## Why This Matters
A notebook or spreadsheet referral system depends entirely on you remembering to log every referral and checking who's earned a reward. That works for the first week. It quietly falls apart the first busy month, and once it does, clients who were promised a reward may not get tracked at all.

A real system either lives inside a tool that's already tracking your bookings, or it's built once and keeps working without you manually maintaining it. **Check what you already have before building something new.** A surprising number of booking platforms include referral or loyalty tracking that's simply never been turned on.

---

## Case Study: Steel City Barber Co
Steel City Barber Co had been tracking referrals by hand until the owner checked the settings in their booking platform and found a referral tracking feature already available, just never turned on.

**Result:** Reward tracking happened automatically going forward, with no manual bookkeeping and no risk of a referral getting missed during a busy week.

---

## Step-by-Step Guide

### Step 1: Check whether your booking platform already has this
Look under settings, marketing, or a rewards or loyalty tab, whatever your platform calls it. Many personal care booking tools include some version of this feature even when it's not obvious from the main dashboard.

### Step 2: If yes, configure it directly
Set your reward type and amount inside the platform's own settings rather than building anything separately.

### Step 3: Write the client facing explanation with Claude

```
Here's how my referral or loyalty program works: [describe the 
mechanics, whether platform native or custom].

Write a short explanation I can say out loud to clients, plus a 
slightly longer written version for a card or text message.
```

### Step 4: If your platform doesn't support this, build a tracker instead

```
Build a private referral tracker as an interactive tool for a 
[type of business]. Use persistent storage so records are saved 
and still there the next time I open this tool.

The tool should:
- Let me log a new referral with the referring client's name and 
the new client's name
- Automatically flag when a client has earned a reward, based on 
[describe your reward rule, e.g. every 3 referrals]
- Let me mark a reward as given
- Use a simple, minimal visual style with [your brand color, e.g. 
navy blue] as the primary accent color
```

### Step 5: Publish and decide who has access

> Don't publish a referral or loyalty tracker as a public link if it holds real client names. Keep it under your own account, or shared within your team only if your plan supports that.

### Step 6: Promote it without overdoing it
Whether native or custom built, mention the program at natural moments, like checkout after a great appointment, rather than pushing it in every interaction.

---

## Frequently Asked Questions

**Q: What if my booking platform doesn't have this feature at all?**
Build the Artifact version from Step 4, on a Pro plan or higher.

**Q: What's a reasonable referral discount to offer?**
It depends on your margins and average ticket size. A useful starting point is asking what discount you'd be comfortable giving without feeling like you're losing money on the visit.

**Q: How do I keep track of referrals without special software?**
That's exactly the gap this guide is meant to close. A notebook system is what to move away from, not a fallback to lean on.

**Q: What if a client refers someone but forgets to mention it?**
Ask every new client "how did you hear about us" at their first visit, so referrals get caught even if the referring client forgot to say anything.
