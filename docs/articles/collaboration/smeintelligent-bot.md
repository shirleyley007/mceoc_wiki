# SME Intelligent Bot

SME Intelligent Bot now supports **absence list today** and **absence list tomorrow** features with data fetched from MCEOC, which can serve as a quick insight of your team availability. Features are configured on team level (as pod in MC), once enabled, all your team members would receive absence lists at the time you configured.

## Install the Bot

Follow the guidance here: https://white-bush-039d1970f.5.azurestaticapps.net/articles/instructions/onboard-process.html 

::: info For Engineers
Engineers only need to **download and install the Bot** to receive absence list messages. No additional configuration is required. If your pod has not yet enabled this feature, please ask your TA/TM to follow the steps below to enable it.
:::

## Procedure to Enable Features

1. Open SME Bot chat box, type in "enable feature"
2. Select your Team on card
3. Select "**Mooncake Eyes On Calendar**" on card

## Configure Feature

### Sample JSON Config

```json
{
  "pods": ["DB", "VM"],
  "custom_date_type": {
    "all_day_absent": ["FC", "E", "ML", "Re", "HH",
      "morning_absent":
      ["E(M)", "L(M)", "PH(M)", "T(M)", "HH(M)"],
    "afternoon_absent":
      ["E(A)", "L(A)", "PH(A)", "T(A)", "HH(A)"],
    "learning_training": ["L"]
  }
}
```

| Field | Value | Note |
|-------|-------|------|
| **pods** | `["DB", "VM"]` | Put in your pod name or any pod you want to receive your member's absence lists. Pod names: `VM`, `SCIM`, `DB`, `NET`, `PaaS` |
| **custom_date_type** | *(see above)* | DO NOT change custom date types. |
| **Cron Job Expression** | `0 15 7 ? * 2-6` | Stands for absence list sent time. The example means executing absence list job at 07:15 from Monday to Friday every week. |
| **Cron Job Time Zone** | `UTC+8:00` | The timezone for Cron Job time. |

Hit "Submit", and all members in your selected team should receive "absence list today" at 07:15 every Monday to Friday.

![Absence List Sample](/smebot-absence-list.png)

### Configuring "Absence List Tomorrow"

To configure **absence list tomorrow**, follow the same procedure as above. Note that "absence list today" and "absence list tomorrow" are **2 separate features**. If you need to configure absence list tomorrow, select feature "**Mooncake Eyes On Calendar Tomorrow**".


## Team Management Commands

::: warning Special Note
Only members in your selected team (step 2 above) would receive absence lists.
Please follow below to view/edit team members.
:::

### Check Your Team Members

#### List my Teams

- **Description:** Check the team(s) you are in.
- **Command:** `list my team`

#### List my Team Members

- **Description:** Check your team members, and if this is their main Team.
- **Command:** `list my team members`

### Add Users to Your Team

#### Add Personal Account to Your Team

If you are already in a Team with `TA` role, you can add engineers to your team (regardless of if they are registered in Bot or not).

- **Command:** `register <alias1>, <alias2> to team: <Team Name>`
- **Example:** `register lucaszhang1, lucaszhang2, lucaszhang3 to team: Lucas Test Team`

This links those engineers with your Team.

### Remove Users from Your Team

::: info Note
This command needs you to have a `TA` role in Bot.
For removing groupChat/channel, please replace `<alias>` with `<groupChat_channel>`.
:::

- **Description:** Remove user(s) from your team.
- **Command:** `remove <alias1>, <alias2> from my team`
- **Example:** `remove lucasfanbing1, lucasfanbing2 from my team`
