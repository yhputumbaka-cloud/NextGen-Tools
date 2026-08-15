---
title: "Class or Program Fit Quiz with Claude"
slug: "class-or-program-fit-quiz-with-claude"
industry: "sports-fitness-recreation"
category: "Marketing and Branding"
tier: 3
summary:
  - "How to turn your class and program lineup into a short quiz that recommends the right fit based on a prospect's goals"
  - "How to prompt Claude to build this as an interactive tool you can actually use, not just a written document"
  - "How to place and use the quiz so it supports real sign up conversations, not just sits unused"
---

## What This Guide Covers
- How to turn your class and program lineup into a short quiz that recommends the right fit based on a prospect's goals
- How to prompt Claude to build this as an interactive tool you can actually use, not just a written document
- How to place and use the quiz so it supports real sign up conversations, not just sits unused

---

## Why This Matters
A prospective member browsing your class schedule for the first time often doesn't know which option fits them, and that uncertainty is a real reason people don't sign up at all.

---

## Case Study: Elevate Movement Studio
Elevate Movement Studio, which offers everything from beginner mobility classes to advanced strength programming, built a short quiz using Claude that asked about current fitness level, primary goal, and schedule availability.

**Result:** The studio's front desk started hearing prospective members reference their quiz result by name when booking a trial class.

---

## Step-by-Step Guide

### Step 1: List your actual classes and programs and who each fits

### Step 2: Decide on 3 to 5 quiz questions that meaningfully narrow the recommendation

### Step 3: Prompt Claude to build the quiz as an interactive Artifact

```
Build an interactive quiz as a self contained webpage that 
recommends a class or program based on a few short questions. 
Here are the details:

Business type: [e.g. independent gym, boutique studio]
Questions to ask (in order): [list your 3 to 5 questions, with 
the answer options for each]
Classes and programs and who they're for: [list each class or 
program and what type of answer combination should lead to it]

The quiz should:
- Show one question at a time with a clean, simple design
- Recommend one primary class or program at the end, with a short 
one or two sentence explanation of why it fits their answers
- Include a "take the quiz again" option
- Use a simple, minimal visual style with [your brand color, e.g. 
navy blue] as the primary accent color
```

### Step 4: Test the logic yourself before showing prospects

```
When I answer [describe the specific answers], the quiz 
recommends [class/program], but that doesn't fit because [explain 
the issue]. Please adjust the logic so this combination leads to 
a more appropriate recommendation.
```

### Step 5: Publish and decide where it lives
Click Share on the finished artifact and choose Publish to get a live link.
- A tablet at your front desk for walk in prospects
- A link on your website's class schedule page
- A QR code on a flyer or trial class signup card

### Step 6: Revisit the quiz whenever your class lineup changes

---

## Frequently Asked Questions

**Q: Do I need any technical skill to build this?**
No.

**Q: Does this need Claude Pro to work?**
No. This quiz doesn't need to remember anything between visits, so it works on any plan, including free, once published.

**Q: Can I update the quiz later without starting over?**
Yes, return to the same conversation and describe the specific change you want, then republish.

**Q: Can this replace an actual conversation with a prospective member?**
It shouldn't fully replace it.
