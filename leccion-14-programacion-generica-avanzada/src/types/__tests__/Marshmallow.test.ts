import {availableCandies} from '../Candy'

test("Retrieving all marshmallows for sale", () => {
  expect(availableCandies.length).toBe(3);

  expect(availableCandies[0].priceCents()).toBe(99);
  expect(availableCandies[0].name()).toBe("Fluffy");
  expect(availableCandies[1].priceCents()).toBe(199);
  expect(availableCandies[1].name()).toBe("Not So Fluffy");
  expect(availableCandies[2].priceCents()).toBe(499);
  expect(availableCandies[2].name()).toBe("Extra Fluffy");
});