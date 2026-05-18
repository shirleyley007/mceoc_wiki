# Teams Chat Notification

MCEOC sends automated reminders via **Microsoft Teams** to ensure on-call phone call forwarding is correctly configured each week. Messages are sent by the **Workflows** account.

## On-Call Phone Forwarding Reminder

### Schedule

| Timing | Purpose |
|--------|---------|
| **First working day of the week** | Remind the **previous week's weekend on-call** engineers to hand over — coordinate with pod TA/TM to update call forwarding to the next on-call engineer's phone number. |
| **Last working day of the week** | Remind the **current week's weekend on-call** engineers to double-confirm that call forwarding has been set to their own phone number. |

### Where Messages Are Sent

- **Group chat:** Messages are posted in the **Mooncake SLA Monitor** group chat, with the relevant on-call engineers @mentioned.
- **1:1 chat:** At the same time, the Workflows account also sends a private 1:1 message directly to each @mentioned engineer.

![Teams On-Call Reminder](/teams-oncall-reminder.png)
