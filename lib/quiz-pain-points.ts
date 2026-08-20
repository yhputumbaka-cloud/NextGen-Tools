export type QuizPainPoint = {
  phrase: string;
  category: string;
};

export const QUIZ_PAIN_POINTS: Record<string, QuizPainPoint[]> = {
  restaurants: [
    {
      phrase:
        "New customers aren't finding us, or our online presence doesn't look like it should",
      category: "Marketing and Branding",
    },
    {
      phrase:
        "I'm constantly answering the same customer messages, and reviews eat up my time",
      category: "Customer Engagement and Communication",
    },
    {
      phrase:
        "Behind the scenes is disorganized, checklists, training, day-to-day chaos",
      category: "Operations and Efficiency",
    },
    {
      phrase: "I have sales numbers but no real sense of what they're telling me",
      category: "Data and Analytics",
    },
  ],
  "personal-care-services": [
    {
      phrase:
        "New clients aren't finding us, or our online presence doesn't look like it should",
      category: "Marketing and Branding",
    },
    {
      phrase: "Bookings, reminders, and client communication eat up my day",
      category: "Client Relationships and Booking",
    },
    {
      phrase:
        "Behind the scenes is disorganized, protocols, training, day-to-day chaos",
      category: "Operations and Efficiency",
    },
    {
      phrase:
        "I have booking and sales numbers but no real sense of what they're telling me",
      category: "Data and Analytics",
    },
  ],
  "sports-fitness-recreation": [
    {
      phrase:
        "New members aren't finding us, or our online presence doesn't look like it should",
      category: "Marketing and Branding",
    },
    {
      phrase:
        "Keeping members engaged and classes filled feels like a constant struggle",
      category: "Member Relationships and Scheduling",
    },
    {
      phrase:
        "Behind the scenes is disorganized, safety checks, training, day-to-day chaos",
      category: "Operations and Efficiency",
    },
    {
      phrase:
        "I have attendance and membership numbers but no real sense of what they're telling me",
      category: "Data and Analytics",
    },
  ],
};
