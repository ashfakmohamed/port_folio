import assert from "node:assert/strict";
import test from "node:test";
import { achievements, expertiseGroups, experiences, navLinks, personal, projects, stats } from "../src/data/index.js";

test("portfolio data has the required contact details", () => {
  assert.match(personal.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  assert.match(personal.linkedin, /^https:\/\//);
  assert.ok(personal.name);
});

test("navigation targets are unique and match section ids", () => {
  const targets = navLinks.map(({ href }) => href);
  assert.equal(new Set(targets).size, targets.length);
  assert.deepEqual(targets, ["#about", "#projects", "#experience", "#skills", "#achievements", "#contact"]);
});

test("portfolio collections contain complete display data", () => {
  assert.ok(stats.every(({ label, value }) => label && Number.isFinite(value)));
  assert.ok(expertiseGroups.every(({ title, items }) => title && items.length));
  assert.ok(experiences.every(({ role, company, achievements: items }) => role && company && items.length));
  assert.ok(projects.every(({ title, features, stack }) => title && features.length && stack.length));
  assert.ok(achievements.every(({ title, company }) => title && company));
});
