---
title: "Turning a Recipe Photo Into a Scaling Dashboard"
slug: "turning-a-recipe-photo-into-a-scaling-dashboard"
industry: "restaurants"
category: "Operations and Efficiency"
tier: 2
summary:
  - "How to take a photo of a handwritten recipe card and turn it into a clean, standardized recipe"
  - "How to build that recipe directly into an interactive dashboard in your Artifacts tab, with a live scaling slider"
  - "How to end up with a permanent tool your kitchen can reopen anytime, adjusting batch size on the fly"
---

## What This Guide Covers
- How to take a photo of a handwritten recipe card and turn it into a **clean, standardized recipe**
- How to build that recipe directly into an **interactive dashboard** in your Artifacts tab, with a live scaling slider
- How to end up with a **permanent tool** your kitchen can reopen anytime, adjusting batch size on the fly

---

## Why This Matters
Most independent restaurant kitchens have at least a few recipes that only exist as a handwritten card or knowledge passed down verbally. Claude can go a step further than a normal conversation, building an actual interactive dashboard, a recipe card with a slider you drag to instantly see ingredient amounts recalculated for any number of covers.

---

## Case Study: Maple & Char
The signature braise at Maple & Char had only ever existed on a stained, decades-old recipe card, scaled by feel. After photographing the card and transcribing it with Claude, the owner built it directly into the Artifacts tab as an interactive dashboard with a servings slider.

**Result:** Cooks could adjust a batch from 10 covers to 50 in seconds without doing any manual math, and the head chef no longer worried about the recipe living only in one person's memory.

---

## Step-by-Step Guide

### Step 1: Photograph the Recipe Card Clearly
Take the photo in good light, straight on, making sure all the handwriting is legible.

### Step 2: Upload the Photo and Ask for a Clean Transcription

```
Here's a photo of a handwritten recipe card. Please transcribe it
exactly as written first, then flag anything that's unclear or hard
to read so I can confirm it.
```

Confirm or correct anything Claude flags as unclear.

### Step 3: Standardize the Recipe and Confirm the Original Yield

```
Now convert this into a standardized recipe with clear ingredient
measurements, equipment needed, and numbered preparation steps.
Confirm the original yield this recipe was written for, in number
of portions, before we move on.
```

### Step 4: Create the Dashboard Directly in the Artifacts Tab

```
Build this into an interactive dashboard I can use in the kitchen.
Here is the standardized recipe: [paste the transcribed recipe and
confirmed yield from the previous steps].

Include a slider or input field to set the number of servings, with
every ingredient amount automatically recalculating based on that
number. Keep the original yield as the default starting point. Display
the ingredient list and the numbered steps clearly, formatted for
quick scanning on a phone or tablet screen.
```

### Step 5: Name It Clearly and Test the Slider
Give the artifact a clear, specific name, like "Short Rib Braise, Scaling Dashboard." Spot-check the math yourself before trusting it in the kitchen.

### Step 6: Build a Library of These in Your Artifacts Tab

> Before relying on it in the kitchen, taste-test a batch made strictly from the dashboard's instructions at its default yield, ideally with whoever knows the dish best.

---

## Frequently Asked Questions

**Q: What if the handwriting is genuinely too messy to read in parts?**
Be upfront about it when Claude flags an unclear section, and fill in the correct detail yourself.

**Q: If I close the app or come back days later, is the dashboard still there?**
Yes, since it was created directly in the Artifacts tab, it's a permanent item in your Artifacts list.

**Q: Can I build one dashboard that holds multiple recipes?**
Start with one recipe per dashboard while you're getting used to this.

**Q: What if a recipe doesn't scale perfectly linearly?**
Mention that directly when building the dashboard, Claude can build in that kind of exception.

**Q: Can this same approach work for non-recipe documents?**
Transcription works the same way for any handwritten document, but the slider format is specifically useful for scalable quantities.
