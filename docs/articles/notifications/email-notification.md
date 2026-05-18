# Email Notifications

All notification emails are sent from **Mooncake People Harbor** (`mcph@microsoft.com`).

MCEOC sends automated email notifications to engineers to help them prepare for upcoming schedule events. Below are the notification types currently supported.

## Learning Day Reminder

Engineers receive an email reminder **the day before** (the previous working day) their scheduled learning day, sent at approximately **8:00 AM**.

**Subject:** *Upcoming Learning Day Arranged for You*

The email includes:
- The engineer's name and the scheduled learning day date
- A checklist of actions to take before the learning day

![Learning Day Reminder Email](/email-learning-day.png)

## Long Leave Reminder

If an engineer has **2 or more consecutive working days** of OOF scheduled (the calculation can span weekends), MCEOC will send a reminder email **2 working days in advance**.

**Subject:** *Upcoming Leave Plan Reminder*

The email includes:
- The leave date range (e.g., `2026-04-24 to 2026-04-30`)
- A checklist of actions to ensure seamless operations:

![Long Leave Reminder Email](/email-long-leave.png)

::: tip
These notifications are sent automatically based on your schedule in MCEOC. Ensure your schedule is up to date to receive timely reminders.
:::

## Availability Report

The Availability Report is sent **only to TAs and Team Managers (TMs)**, providing a summary of team resource availability. It includes two types: **Daily Report** and **Weekly Report**.

### Daily Report

The daily report is sent **twice per day**:

| Time | Content |
|------|---------|
| **8:55 AM** | Today's availability report |
| **4:55 PM** | Tomorrow's availability report |

**Subject:** *Availability Report for Mooncake [POD] on [Date]*

The email includes:
- The number of resources **on shift**
- The number of resources involving **unavailability** (highlighted in red)
- A detailed list of unavailable engineers with their leave type (e.g., `L (Learning Day)`, `AL (Annual Leave)`, `HH (Holistic Health Time Off)`, `FC (Family Care)`)

![Daily Report - Morning (8:55 AM)](/email-daily-report-am.png)

![Daily Report - Afternoon (4:55 PM)](/email-daily-report-pm.png)

### Weekly Report

The weekly report is sent every **Friday at approximately 9:00 AM**, covering the **following week's** availability.

**Subject:** *Weekly Availability Report for Mooncake for [Date Range]*

The email includes a table organized by POD, showing for each day of the week:
- **Availability** percentage
- **AS** (Afternoon Shift) engineer
- **OnCall** engineer
- **Flexible shift** engineers

Weekend columns are highlighted separately.

![Weekly Availability Report](/email-weekly-report.png)
