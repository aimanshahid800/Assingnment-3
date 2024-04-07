// Initial guest list
let guests = ["Kim Teayoung", "Khalfan", "Grandma"];

// First guest can't make it
console.log(`${guests[0]} can't make it to the dinner.`);

// Replace first guest
guests[0] = "David";

// Print new invitations
guests.forEach((guest) =>
  console.log(`Dear ${guest}, you are invited to dinner.`)
);
