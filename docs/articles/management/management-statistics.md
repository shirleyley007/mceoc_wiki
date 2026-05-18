# Statistics

## W Day Statistics (Workday Statistics)

The **W Day Statistics** feature provides a quick overview of each engineer's expected workdays for the current month.

### How to Access

Click the **W Day Statistics** button on the left side of the Team View page.

![W Day Statistics Button](/wday-statistics-button.png)

### What It Shows

The panel displays:

- **Expected W Days** — the standard number of workdays for the current month (shown at the top).
- **Engineer list** — each engineer's name (alias) and their individual expected workday count.

![W Day Statistics Panel](/wday-statistics.png)

### Calculation Rules

- The statistic counts only **expected working days** (work type with On Duty value).
- It **includes** benefits-related leave, including:
  - Paid leave (Annual Leave, Sick Leave, etc.)
  - Training days
  - Public holidays
- Engineers whose workday count **differs from the standard** (Expected W Days) will be **highlighted**, making it easy to identify schedule anomalies at a glance.

## FTE Learning Day Stats

The **FTE Learning Day Stats** feature tracks how many learning days each engineer has used on a yearly basis.

### How to Access

Navigate to: **Resource Center** → **Engineer Stats** → **FTE Learning Day Stats**

![Resource Center - Engineer Stats](/resource-center-engineer-stats.png)

![FTE Learning Day Stats](/learning-day-stats.png)

### Filters

| Filter | Description |
|--------|-------------|
| **Year** | Select the year to view (e.g., `2026`). Click **Go** to apply. |
| **Pod Filter** | Filter by POD (e.g., `DB`, `VM`, `NET`) or select `All` to view all PODs. |

### What It Shows

The table displays the following columns:

| Column | Description |
|--------|-------------|
| **Alias** | The engineer's alias. |
| **Name** | The engineer's full name. |
| **Pod** | The POD the engineer belongs to. |
| **Learning Days** | The number of learning days used vs. the annual quota (e.g., `1.50 / 15`). |
