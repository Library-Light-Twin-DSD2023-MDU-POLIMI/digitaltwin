

export const formatDateTimestamp = (timestamp: string): string => {
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }).format(new Date(timestamp))
}

export const formatDatestamp = (timestamp: string): string => {
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).format(new Date(timestamp))
}

export const formatTimestamp = (timestamp: string): string => {
    return new Intl.DateTimeFormat('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }).format(new Date(timestamp))
}