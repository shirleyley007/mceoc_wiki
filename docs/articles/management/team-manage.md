---
outline: [2, 3]
---

# Team Management

Team Management is a set of features designed for users with **TA** or **Manager** permissions, focusing on team operations and resource control.

## Lock

The Lock feature allows TAs and Managers to restrict leave requests for specific PODs on specific dates.

### How to Use

1. Navigate to the **Team View** page.
2. Hover your mouse over a date cell — a popup will appear with checkboxes for 4 PODs (e.g., `VM+SCIM`, `DB`, `NET`, `PaaS`).
3. Check the POD(s) you want to lock for that date.

![Lock Feature](/team-lock.png)

### Lock Behavior

- Once a POD is locked on a given date, engineers in that POD **cannot modify their work type** for that day in MCEOC.
- On the Team View page, the locked date column will appear in a **darker color** for the corresponding POD, providing a clear visual indicator.

::: warning
Use Lock carefully — it prevents all engineers in the selected POD from making schedule changes on the locked date. Communicate with your team before locking.
:::

## WFM Table Download

This feature allows TAs/Managers to download a monthly WFM schedule table as a CSV file, which can be sent to the WFM team for next month's schedule marking.

### How to Access

Click the **Settings** (gear icon) button in the top-right toolbar of the Team View page.

![Page Settings Button](/page-settings-button.png)

### How to Use

1. In the **Page Settings** panel, find the **WFM Table** section.
2. **Select Months** — choose the target month (e.g., `2026 May`).
3. **Select Team** — choose the POD (e.g., `VM+SCIM`).
4. Click **Generate** to download the CSV file to your local machine.

![WFM Table Generate](/wfm-table-generate.png)


## Manage Tab

The **Manage** tab is accessible from the left sidebar and contains administrative tools for team operations.

![Navigate to Manage](/nav-manage.png)

The Manage tab includes 3 sub-tabs:

### EngInfo

The EngInfo interface allows you to manage the engineer database — add, delete, or modify personnel information and permissions.

![EngInfo Interface](/manage-enginfo.png)

#### Table Columns

| Column | Description |
|--------|-------------|
| **POD** | The POD the engineer belongs to. |
| **Alias** | The engineer's alias. |
| **Name** | Full name. |
| **Role** | Role type, e.g., `FTE`., `Vendor`  |
| **Principle** | Controls permission level. Engineers have `None` as their principle. |
| **Phone** | Contact phone number. |
| **Status** | `Active` or `Inactive` — indicates whether the engineer is currently enabled in Team View. |
| **Actions** | Operation buttons (see below). |

#### Actions

| Action | Description |
|--------|-------------|
| **Enable / Disable** | Controls whether this engineer is displayed on the Team View page. Disabled engineers will not appear in the Team view. |
| **Edit** | Opens the edit form to modify the engineer's information. |
| **Delete** | Permanently removes the engineer from the database. |

::: danger
**Delete** is irreversible — it completely removes the engineer's record from the database. Use with extreme caution.
:::

::: info Access Control
Only personnel who exist in the EngInfo database can access MCEOC. To grant a new team member access, they must first be added here.
:::

#### Adding a New Engineer

Click the **+ Add New** button in the top-right corner to add a new engineer to the database.

### WorkTypeInfo

The WorkTypeInfo interface allows you to manage work type definitions used throughout MCEOC.

![WorkTypeInfo Interface](/manage-worktypeinfo.png)

#### Table Columns

| Column | Description |
|--------|-------------|
| **Day Type** | The short code for the work type (e.g., `AS`, `E`, `E(A)`, `E(M)`). |
| **Color** | The color hex code used to visually identify this work type on the calendar. |
| **Content** | A description explaining what the work type represents. |
| **On Duty Value** | A numeric value used to calculate the **On Duty (availability) percentage**. For example: `1.0 (Full Duty)`, `0.5 (Half Duty)`, `0.0 (No Duty)`. |
| **Actions** | Edit or Delete the work type. |

#### Where WorkTypeInfo is Used

The work types defined here are displayed in two key places:

1. **Custom Shift Type panel** in Team View — click the list icon in the top-right toolbar to view all available shift types with their colors and descriptions.

   ![Custom Shift Type Button](/custom-shift-type-button.png)

   ![Custom Shift Type Panel](/custom-shift-type.png)

2. **Engineer's schedule edit dialog** — when an engineer modifies their schedule, the available work type options come from this configuration.

::: danger Important
Editing work types affects multiple dependent features across MCEOC (e.g., On Duty percentage calculation, calendar display, schedule editing). If changes are needed, please **communicate thoroughly with the MCEOC V-Team** before making modifications.
:::

### TagInfo

The TagInfo interface controls how engineers are grouped into tabs on the **Team View** page.

![TagInfo Interface](/manage-taginfo.png)

#### How to Use

1. Select a **tag** from the dropdown (e.g., `NET`, `VM+SCIM`, `DB`, etc.).
2. The **left panel (Member List)** shows engineers currently assigned to this tag.
3. The **right panel (Engineer List)** shows all remaining engineers not in this tag.
4. Use the **left arrow (‹)** to add a selected engineer to the tag (move from right to left).
5. Use the **right arrow (›)** to remove a selected engineer from the tag (move from left to right).


You can also create a **New** tag or **Remove** an existing tag using the buttons next to the dropdown.

#### How Tags Appear in Team View

Tag groupings are reflected as tabs in the Team View page header. Each tag becomes a separate tab that filters the calendar to show only engineers in that group.

![Team View Tabs](/teamview-tabs.png)

::: info
The **Admin** tab is a system tab and is not controlled by TagInfo.
:::
