# SME Intelligent Bot

SME Intelligent Bot now supports **absence list today** and **absence list tomorrow** features with data fetched from MCEOC, which can serve as a quick insight of your team availability. Features are configured on team level (as pod in MC), once enabled, all your team members would receive absence lists at the time you configured.

## Install the Bot

1. Download the bot [zip file here](https://microsoftapc-my.sharepoint.com/:u:/g/personal/lucashuang_microsoft_com/Eamgwb5XPdtKlGphUMLWhMUB81CydBkeHqlsv17OUUxRHg?e=bWvpjO) (updated at 2024-12-17)

2. Install the Zip file to Teams:
   - Open Microsoft Teams → click **Apps** → click **Manage your apps** → click **Upload an app** → select **Upload a custom app** → choose the downloaded zip file.

3. Choose the installation type:
   - Click **Add** to onboard as personal account
   - Click **Add to a chat** for groupChat onboarding
   - Click **Add to a team** for channel onboarding

## Team Creation

::: tip
If you are new to Bot and haven't got a Team in Bot yet, you need to create a Team in Bot first. Skip this section if you already know your Team name.
:::

1. Make sure you are a **Technical Advisor** or **Manager** — the command will verify your job title and currently only those roles can create a Team in Bot.
2. After installing the Bot, use command: `create team with name <Your-Team-Name>`

::: warning
The Team name is **case-sensitive**. You will be automatically linked to the Team with `TA` role.
:::

## Add Chat Group to Your Team

This refers to `groupChat` user account. After installing the bot to the chat group, you can link this chat group to a Team.

In the chat group, use command: `@SMEIntelligentBot register to team: <your-team-name>`

**Example:** `@SMEIntelligentBot register to team: Lucas Test Team`

::: tip
- This registration only targets the chat group itself, regardless of how many people are inside.
- After onboarded, the default role for the chat group account is `TA`, as a group chat is designed to receive all Team related information.
- Each team can only have 1 chat group.
:::

## Add Channel to Your Team

This refers to `channel` user account. After installing the bot to a channel, you can link this channel to a Team.

In the channel, use command: `@SMEIntelligentBot register to team: <your-team-name>`

**Example:** `@SMEIntelligentBot register to team: Lucas Test Team`

::: tip
- This registration only targets the channel itself, regardless of how many people are inside.
- After onboarded, the default role for the channel account is `TA`, as a channel is designed to receive all Team related information.
- Each team can only have 1 channel.
:::

---

## Procedure to Enable Features

1. Open SME Bot chat box, type in "enable feature"
2. Select your Team on card
3. Select "**Mooncake Eyes On Calendar**" on card

## Configure Feature

### JSON Config

```json
{
  "pods": ["VM", "VM"],
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
| **pods** | `["VM", "VM"]` | Put in your pod name or any pod you want to receive your member's absence lists. Pod names: `VM`, `SCIM`, `DB`, `NET`, `PaaS` |
| **custom_date_type** | *(see above)* | DO NOT change custom date types. |
| **Cron Job Expression** | `0 15 7 ? * 2-6` | Stands for absence list sent time. The example means executing absence list job at 07:15 from Monday to Friday every week. |
| **Cron Job Time Zone** | `UTC+8:00` | The timezone for Cron Job time. |

Hit "Submit", and all members in your selected team should receive "absence list today" at 07:15 every Monday to Friday.

### Configuring "Absence List Tomorrow"

To configure absence list **tomorrow**, follow the same procedure as above. Note that "absence list today" and "absence list tomorrow" are **2 separate features**. If you need to configure absence list tomorrow, select feature "**Mooncake Eyes On Calendar Tomorrow**".

## Sample Notifications

The Bot sends messages in the team chat showing:

- **Pod** name
- **All day Leave** — engineers on full-day leave
- **Morning Leave** — engineers on morning leave
- **Afternoon Leave** — engineers on afternoon leave
- **Training/Learning** — engineers on training or learning day

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

![SME Intelligent Bot Guide](/smeintelligent-bot-guide.png)
