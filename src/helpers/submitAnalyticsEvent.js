export const submitAnalyticsEvent = (eventType, eventData) => {
  if (typeof window === "undefined" || !window.gtag) {
    return null
  }

  window.gtag("event", eventType, { ...eventData });
}