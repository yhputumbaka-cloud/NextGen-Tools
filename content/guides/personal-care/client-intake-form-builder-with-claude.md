---
title: "Client Intake Form Builder with Claude"
slug: "client-intake-form-builder-with-claude"
industry: "personal-care-services"
category: "Client Relationships and Booking"
tier: 3
summary:
  - "How to turn your intake questions into an interactive digital form clients fill out before or during their visit"
  - "How to prompt Claude to build this as a reusable Claude Artifact, not a paper form you retype every time"
  - "How to handle what happens after a client submits it, without creating a privacy problem"
---

## What This Guide Covers
- How to turn your intake questions into an interactive digital form clients fill out before or during their visit
- How to prompt Claude to build this as a reusable Claude Artifact, not a paper form you retype every time
- How to handle what happens after a client submits it, without creating a privacy problem

---

## Why This Matters
A paper intake form has quiet costs, time to fill out, illegible handwriting on important fields like allergies, and someone eventually has to read and remember it. A digital version solves all three at once.

---

## Case Study: Verbena Day Spa
Verbena Day Spa, run by two estheticians, replaced a paper clipboard clients used to fill out in the waiting room with a digital intake form covering skin concerns, allergies, and product sensitivities.

**Result:** Check in time before first appointments dropped, and the practitioners stopped struggling to read handwritten answers on fields that actually mattered.

---

## Step-by-Step Guide

### Step 1: Write out your actual intake questions
List everything you currently ask new clients.

### Step 2: Decide what belongs on the form versus in conversation
Structured factual questions work well on a form. Anything requiring your judgment in the moment belongs in the actual consultation.

### Step 3: Prompt Claude to build the form as an Artifact

```
Build an interactive intake form as a self contained webpage for a 
[type of business, e.g. esthetician practice]. Here are the 
questions to include, in order:

[list your questions, noting which need a text answer, a yes/no, 
or multiple choice]

The form should:
- Show a few related questions per screen rather than one giant page
- End with a clean, readable summary of all the answers
- Use a simple, minimal visual style with [your brand color, e.g. 
navy blue] as the primary accent color
```

### Step 4: Test the form yourself end to end
Fill it out as if you were a new client.

### Step 5: Decide how clients will actually access it
Click Share on the finished artifact and choose Publish to turn it into a live link.
- Tablet at check in: open the published link on a tablet clients use while they wait
- Sent ahead of the appointment: include the link in your booking confirmation text or email

> Because intake answers often include health related information such as allergies or sensitivities, treat the summary as something to review together with the client and save into your own private records, rather than something meant to sit publicly accessible on the open link indefinitely.

### Step 6: Decide what happens to the answers after submission
The form's summary is meant to be read together during the consultation, then saved into wherever you keep client notes, such as the Client Preference Tracker.

---

## Frequently Asked Questions

**Q: Do clients need a Claude account to fill this out?**
No. A published artifact link opens as a regular webpage that anyone can use.

**Q: What if a client doesn't have a smartphone or isn't comfortable with a digital form?**
Keep a simple paper backup on hand.

**Q: Is it okay to ask about allergies and health related information on this form?**
Yes, standard for most personal care intake processes, but keep questions limited to what's relevant.

**Q: Can I reuse this form for existing clients, not just new ones?**
Yes, especially for refreshing allergy and preference information periodically.
