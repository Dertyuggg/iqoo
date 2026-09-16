import { calculateConsistencyScore } from '../scoring';

describe('calculateConsistencyScore', () => {
  it('should return 0 for an empty array', () => {
    expect(calculateConsistencyScore([])).toBe(0);
  });

  it('should return 0 for null', () => {
    // @ts-expect-error Testing edge case where null might be passed at runtime
    expect(calculateConsistencyScore(null)).toBe(0);
  });

  it('should return 0 for undefined', () => {
    // @ts-expect-error Testing edge case where undefined might be passed at runtime
    expect(calculateConsistencyScore(undefined)).toBe(0);
  });

  it('should calculate score correctly for unique days', () => {
    const events = [
      { event_timestamp: '2023-10-25T10:00:00Z' },
      { event_timestamp: '2023-10-26T10:00:00Z' },
      { event_timestamp: '2023-10-27T10:00:00Z' },
    ];
    // 3 unique days * 5 = 15
    expect(calculateConsistencyScore(events)).toBe(15);
  });

  it('should only count duplicate dates once', () => {
    const events = [
      { event_timestamp: '2023-10-25T10:00:00Z' },
      { event_timestamp: '2023-10-25T12:00:00Z' }, // Same day
      { event_timestamp: '2023-10-26T10:00:00Z' },
      { event_timestamp: '2023-10-26T14:00:00Z' }, // Same day
    ];
    // 2 unique days * 5 = 10
    expect(calculateConsistencyScore(events)).toBe(10);
  });

  it('should cap the score at 40 points', () => {
    const events = Array.from({ length: 10 }, (_, i) => ({
      event_timestamp: `2023-10-${(i + 1).toString().padStart(2, '0')}T10:00:00Z`,
    }));
    // 10 unique days * 5 = 50, but capped at 40
    expect(calculateConsistencyScore(events)).toBe(40);
  });
});
