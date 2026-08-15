---
title: "Retail Product Recommendation Quiz with Claude"
slug: "retail-product-recommendation-quiz-with-claude"
industry: "personal-care-services"
category: "Marketing and Branding"
tier: 3
summary:
  - "How to turn your retail product knowledge into a short quiz that recommends products based on a client's answers"
  - "How to prompt Claude to build this as an interactive tool you can actually use, not just a written document"
  - "How to publish the quiz and put it in front of clients, on a tablet, a QR code, or a booking text"
---

## What This Guide Covers
- How to turn your retail product knowledge into a short quiz that recommends products based on a client's answers
- How to prompt Claude to build this as an interactive tool you can actually use, not just a written document
- How to publish the quiz and put it in front of clients, on a tablet, a QR code, or a booking text

---

## Why This Matters
Retail product sales are a meaningful revenue stream for a lot of personal care businesses, but recommending the right product often depends on a conversation that only happens if you remember to have it during a busy appointment. A short quiz gives clients a way to get a personalized recommendation on their own, whether they're in your waiting area or browsing your website afterward.

This is also one of the clearest examples of what Claude can do beyond writing text. Instead of asking Claude to write a static product guide, you can ask it to build an actual interactive tool, a quiz with a few questions that leads to a specific recommendation.

---

## Case Study: Bloom Studio
Bloom Studio, a hair salon carrying a small retail line of shampoos and styling products, built a short quiz using Claude that asked about hair type, main concern, and styling routine, then recommended one or two products from their actual shelf. The quiz was displayed on a tablet in the waiting area.

**Result:** The owner noticed clients bringing up specific products by name at checkout that they had not previously been asking about.

---

## Step-by-Step Guide

### Step 1: List out your actual retail products and what each one solves
Write out your real product lineup with a short note on what each product is best for.

### Step 2: Decide on 3 to 5 quiz questions that meaningfully narrow the recommendation
For a hair salon this might be hair type, main concern, and styling habits. For a skincare focused business it might be skin type, primary concern, and current routine.

### Step 3: Prompt Claude to build the quiz as an interactive Artifact

```
Build an interactive quiz as a self contained webpage that 
recommends a retail product based on a few short questions. Here 
are the details:

Business type: [e.g. independent hair salon]
Questions to ask (in order): [list your 3 to 5 questions, with the 
answer options for each]
Products and what they're for: [list each product name and what 
type of answer combination should lead to it]

The quiz should:
- Show one question at a time with a clean, simple design
- Recommend one primary product at the end, with a short one or 
two sentence explanation of why it fits their answers
- Include a "take the quiz again" option
- Use a simple, minimal visual style with [your brand color, e.g. 
navy blue] as the primary accent color
```

### Step 4: Test the logic yourself before showing clients

```
When I answer [describe the specific answers], the quiz 
recommends [product], but that doesn't fit because [explain the 
issue]. Please adjust the logic so this combination leads to a 
more appropriate recommendation.
```

### Step 5: Publish the quiz and get it in front of clients
Once the quiz works the way you want, click the Share button on the artifact and choose Publish. This turns your quiz into a live web page with its own link that anyone can open and interact with, no Claude account required on their end.

From there:
- Tablet in your waiting area: open the published link in the tablet's browser, and turn on your device's guided access or kiosk mode
- QR code near your retail display or at checkout: paste the published link into a free QR code generator and print the code
- Booking confirmation text: include the published link directly in the message clients already receive when they book

If you make changes to the quiz later, publishing again creates a new version with a link of its own. If you've printed a QR code, regenerate and reprint it whenever the quiz meaningfully changes.

### Step 6: Revisit the quiz whenever your product line changes
Update the quiz prompt with the new lineup rather than letting it recommend something you no longer carry, and republish so the live link reflects the update.

*Tip:* If you have photos of your actual product packaging, upload them alongside your prompt.

---

## Frequently Asked Questions

**Q: Do I need any technical skill to build this?**
No. You are describing what you want in plain language, and Claude generates the actual interactive tool.

**Q: Can I update the quiz later without starting over?**
Yes. Return to the same conversation or describe the existing quiz and the specific change you want, then republish to update the live link.

**Q: Is this only useful for businesses with a big retail line?**
No. Even a business with four or five products can benefit.

**Q: Can this replace an actual retail conversation with clients?**
It shouldn't fully replace it. Think of the quiz as a conversation starter, not a substitute for a staff member who knows the products well.

**Q: Do I need a paid Claude plan to publish the quiz?**
No. Publishing artifacts publicly is available on the free plan as well as Pro and Max. If your business uses a Claude Team or Enterprise account instead, an admin may need to turn on public sharing first.
