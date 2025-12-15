# Issue Tracking Template

---

## Issue Details

| Field | Value |
|-------|-------|
| **Issue ID** | PROJ-001 |
| **Title** | add delete endpoint for notes |
| **Type** | ✨ Feature  |
| **Priority** | 🟡 Medium |
| **Status** | 🔄 In Progress |
| **Assignee** | [Bassam Husam] |
| **Reporter** | [Bassam Husam] |
| **Created Date** | 2025-01-13 |
| **Due Date** | 2025-01-13 |

---

## Description

### Summary
> [the api that i have right now is extremely bare bones. it currently cant delete any notes so a delete feature would let me delete any notes for tasks that are completed or something I don't need anymore. the delete feature would be able to remove notes by index or id. ]

### For Bugs: Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Expected Behavior
> [What should happen]

### Actual Behavior
> [What actually happens]

### For Features: User Story
> s a user of the Notes api, I want to delete a specific note so that I can remove notes that are outdated, incorrect, or no longer needed..

---

## Technical Details

### Affected Components

- [ ] Backend API


### Error Messages/Logs
```
[Paste any relevant error messages here]
```

---

## Acceptance Criteria

- [ ] Criterion 1: a new DELETE endpoint exists at /notes/:id
- [ ] Criterion 2: sending a valid note index (e.g., /notes/0) deletes that note from memory
- [ ] Criterion 3: she api returns a confirmation response in JSON, e.g.: { "deleted": "note text here" }
- [ ] Criterion 4: if an invalid index is provided, the api returns a 404 Not Found error
- [ ] Criterion 5: deleting a note does not crash the server




---

## Resolution

### Solution Implemented
> [Description of how the issue was resolved]

### Pull Request(s)
- PR #001: Add delete note endpoint to Notes API

### Resolution Date
[2025-01-14]

---

# Quick Templates

## 🐛 Bug Report (Short Form)

```
**Bug:** [One line description]
**Steps:** 1. ... 2. ... 3. ...
**Expected:** [What should happen]
**Actual:** [What happens]
**Severity:** Critical / High / Medium / Low
```

## ✨ Feature Request (Short Form)

```
**Feature:** add delete endpoint for notes
**User Story:** as a user of the notes api, i want to delete a specific note so that i can remove notes that are outdated or no longer needed
**Acceptance Criteria:**
- [ ] a delete endpoint exists at /notes/:id
- [ ] a valid index removes the note and returns confirmation json
- [ ] an invalid index returns a 404 not found error
```

---

# Priority Definitions

| Priority | Response Time | Description |
|----------|---------------|-------------|
| 🔴 Critical | < 4 hours | System down, data loss, security breach |
| 🟠 High | < 24 hours | Major feature broken, significant impact |
| 🟡 Medium | < 1 week | Feature impaired but workaround exists |
| 🟢 Low | < 1 sprint | Minor issue, cosmetic, nice-to-have |

---

# Status Workflow

```
📋 Backlog → 🔄 In Progress → 👀 In Review → ✅ Done
```
