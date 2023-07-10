export const formatTime = (time: Date | string): string => {
  return time.toLocaleString('en', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })
}
