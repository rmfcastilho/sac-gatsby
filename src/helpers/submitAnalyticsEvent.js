export const submitAnalyticsEvent = (eventType, eventData) => {
  if (typeof window === "undefined") {
    return null
  }

  window.gtag("event", eventType, { ...eventData });
}